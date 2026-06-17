import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import side1 from "../../assets/about/mission.svg";
import side2 from "../../assets/about/eye.png";

gsap.registerPlugin(ScrollTrigger);

const AboutMissionVision = () => {
 

  return (
    <div className="missionvision" >
      <div className="container">

        <div className="mission-wrap" >
          <div className="left-content">
            {/* Mission */}
            <div className="box mission-box" data-gsap>
             

              <div className="text">
                <h3 data-gsap>Mission</h3>
                <p data-gsap>To help businesses build brands that communicate clearly, operate intelligently, and grow meaningfully in a constantly evolving digital world.</p>
              </div>
            </div>

            {/* Vision */}
            <div className="box vision-box" data-gsap>
           

              <div className="text">
                <h3 data-gsap>Vision</h3>
                <p data-gsap>To create reference-worthy brands and digital ecosystems that elevate how businesses from India are perceived, experienced, and remembered globally.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMissionVision;