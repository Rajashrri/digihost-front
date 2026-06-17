import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ab1 from "../../assets/about/about1.png";

gsap.registerPlugin(ScrollTrigger);

const AboutText = () => {
  const textRef = useRef(null);

  const headingText = `We did not begin by chasing trends, algorithms, or vanity metrics. We began with a quieter belief, that brands deserve clarity before visibility, trust before traction, and meaning before scale. What started as a pursuit of thoughtful design slowly evolved into a brand engineering studio helping founders, family businesses, and growing organizations build identities people don’t just notice, but remember, trust, and return to. Today, DiigiiHost works at the intersection of soul, systems, and storytelling, crafting brands that feel aligned from the inside out.`;

  useEffect(() => {
    const words = headingText.split(" ");

  textRef.current.innerHTML =
  words
    .map(
      (word) =>
        `<span class="word"><span class="inner-word">${word}</span></span>`
    )
    .join(" ");

    const allWords = textRef.current.querySelectorAll(".inner-word");

    gsap.set(allWords, {
      opacity: 0.15,
    });

    gsap.to(allWords, {
      opacity: 1,
      stagger: 0.15,
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 70%",
        end: "30% 30%",
        scrub: true,
        // markers:true,
      },
    });
  }, []);

  return (
    <div className="aboutttext">
      <div className="container">
        <div className="textscroll">
          <p data-gsap ref={textRef}></p>
        </div>

        <div className="row sdfdsvsd">
          <div className="col-lg-6">
            <div className="abtxt">
              <div className="abcoote">
          <svg data-gsap width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="-0.25" y="0.25" width="27.5" height="63.5" rx="13.75" transform="matrix(-1 0 0 1 27.5 0)" stroke="#B1EBE0" stroke-width="0.5"/>
            <rect x="36.25" y="0.25" width="27.5" height="63.5" rx="13.75" stroke="#B1EBE0" stroke-width="0.5"/>
            </svg>
              <p data-gsap>
                Some businesses are built from ambition. 
                Others are built from inheritance.
              </p>
              <p data-gsap>
               Both eventually arrive at the same question:
              “How do we grow without losing who we are?”
              </p>
              <p data-gsap>
                That question shapes everything we do.
              </p>
              </div>
              
            </div>
          </div>

          <div className="col-lg-6">
            <figure data-gsap>
              <img src={ab1} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutText;