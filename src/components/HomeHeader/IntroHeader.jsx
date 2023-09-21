import React from "react";
import particlesConfig from "../../config/particle-config";
import particlesBlackConfig from "../../config/pr-s-black";
import Particles from "react-tsparticles";

import 'reactflow/dist/style.css';

import Typewriter from 'typewriter-effect';
const IntroHeader = ({ sliderRef, blackStar }) => {

  return (
      <header ref={sliderRef} className="particles particles2 circle-bg valign">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-9">
                      <div className="cont text-center">
                          <h1>
                          <span className="color-font">
                          <Typewriter
                              options={{
                                  strings: ["It's a diary", "It's your computer", "It's on the internet"],
                                  autoStart: true,
                                  delay: 20,
                                  loop: true,
                              }}
                          />
                          </span>
                          </h1>
                      </div>
                  </div>
              </div>
          </div>

      <Particles
        id="particles-js"
        options={blackStar ? particlesBlackConfig : particlesConfig}
      />

        <div className="gradient-circle"></div>
        <div className="gradient-circle two"></div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default IntroHeader;
