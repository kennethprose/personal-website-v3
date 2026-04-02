import React, { useState } from "react";
import ReactRotatingText from "react-rotating-text";
import throne_pic from "../img/throne.jpg";

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
      <div className="mx-auto min-h-full w-11/12 md:w-9/12">
        <div className="w-full">
          <h1 className="mt-14 text-5xl text-primary dark:text-dark_primary home">
            Hello!
          </h1>
          <h3 className="my-5 text-xl text-secondary dark:text-dark_secondary h-8">
            You must be here to learn about my{" "}
            <ReactRotatingText
              items={["education.", "projects.", "work experience."]}
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
