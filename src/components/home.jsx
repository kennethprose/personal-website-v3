import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactRotatingText from "react-rotating-text";
import throne_pic from "../img/throne.webp";

function Home() {
  const [xThrone, setXThrone] = useState(0);
  const [yThrone, setYThrone] = useState(0);

  function showThrone(e) {
    document.getElementById("throne_img").classList.add("visible");
    setXThrone(
      e.clientY -
      document.getElementById("throne_img").height -
      20 +
      window.pageYOffset,
    );
    setYThrone(e.clientX - 90);
  }

  function hideThrone(e) {
    document.getElementById("throne_img").classList.remove("visible");
  }

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
        id="throne_img"
        className="absolute border-2 border-black rounded-2xl h-[260px] w-auto opacity-0 transition-opacity duration-500 pointer-events-none"
        src={throne_pic}
        alt="Sitting on my IT throne"
        style={{ top: xThrone, left: yThrone }}
      />
    </div>
  );
}

export default Home;
