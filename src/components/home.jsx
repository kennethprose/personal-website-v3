import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ReactRotatingText from "react-rotating-text";
import throne_pic from "../img/throne.webp";

function Home() {
  const throneRef = useRef(null);
  const pointerRef = useRef(null);
  const [throne, setThrone] = useState({ top: 0, left: 0, visible: false });

  function positionThrone() {
    const image = throneRef.current;
    const pointer = pointerRef.current;
    if (!pointer || !image?.complete || !image.naturalWidth) return;

    const margin = 12;
    const gap = 20;
    const { width, height } = image.getBoundingClientRect();
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;
    const above = pointer.y - height - gap;
    const preferredTop = above >= margin ? above : pointer.y + gap;

    setThrone({
      left: Math.max(margin, Math.min(pointer.x - width / 2, viewportWidth - width - margin)),
      top: Math.max(margin, Math.min(preferredTop, viewportHeight - height - margin)),
      visible: true,
    });
  }

  function showThrone(e) {
    pointerRef.current = { x: e.clientX, y: e.clientY };
    positionThrone();
  }

  const hideThrone = useCallback(() => {
    pointerRef.current = null;
    setThrone((current) => ({ ...current, visible: false }));
  }, []);

  useEffect(() => {
    window.addEventListener("resize", hideThrone);
    window.addEventListener("scroll", hideThrone, true);
    return () => {
      window.removeEventListener("resize", hideThrone);
      window.removeEventListener("scroll", hideThrone, true);
    };
  }, [hideThrone]);

  return (
    <div>
      <div className="mx-auto min-h-full w-11/12">
        <div className="w-full">
          <h1 className="mt-8 sm:mt-14 text-4xl text-primary dark:text-dark_primary home">
            <span aria-hidden="true" className="text-accent dark:text-dark_accent">
              &gt;
            </span>{" "}
            Hello, world!
          </h1>
          <h3 className="my-5 text-xl text-secondary dark:text-dark_secondary h-8">
            You must be here to check out my{" "}
            <ReactRotatingText
              items={["projects.", "blog posts.", "education.", "work experience."]}
              pause={1000}
            />
          </h3>
          <br />
          <h2 className="my-5 text-3xl text-primary dark:text-dark_primary home">
            First, let me tell you a little about myself...
          </h2>
          <h4 className="text-xl text-secondary dark:text-dark_secondary leading-[140%]">
            I'm a developer and IT professional who enjoys tinkering around in
            all things tech. I have a background in Computer Science along with
            a lot of hands-on, self-taught experience that's grown into a career
            as an
            <span
              className="text-accent cursor-pointer dark:text-dark_accent"
              onMouseEnter={showThrone}
              onMouseMove={showThrone}
              onMouseLeave={hideThrone}
            >
              {" "}
              IT Specialist{". "}
            </span>
            Outside of work, I like to mess around with my homelab, create
            automations, and experiment with open source software.
          </h4>
          <div className="mt-10 flex flex-col items-start">
            <Link
              to="/projects"
              className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-lg text-lg font-medium text-secondary decoration-transparent underline-offset-4 transition-colors hover:text-primary hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary dark:text-dark_secondary dark:hover:text-dark_primary dark:focus-visible:outline-dark_accent"
            >
              Explore my projects <span aria-hidden="true">→</span>
            </Link>
            <Link
              to="/resume"
              className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-lg text-lg font-medium text-secondary decoration-transparent underline-offset-4 transition-colors hover:text-primary hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary dark:text-dark_secondary dark:hover:text-dark_primary dark:focus-visible:outline-dark_accent"
            >
              View my resume <span aria-hidden="true">→</span>
            </Link>
            <Link
              to="/blog"
              className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-lg text-lg font-medium text-secondary decoration-transparent underline-offset-4 transition-colors hover:text-primary hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary dark:text-dark_secondary dark:hover:text-dark_primary dark:focus-visible:outline-dark_accent"
            >
              Read my blog <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
      <img
        ref={throneRef}
        id="throne_img"
        className={`fixed z-50 border-2 border-black rounded-2xl h-auto w-auto max-h-[min(260px,calc(100dvh-24px))] max-w-[calc(100vw-24px)] transition-opacity duration-500 pointer-events-none ${throne.visible ? "opacity-100" : "opacity-0"}`}
        src={throne_pic}
        alt="Sitting on my IT throne"
        onLoad={positionThrone}
        style={{ top: throne.top, left: throne.left }}
      />
    </div>
  );
}

export default Home;
