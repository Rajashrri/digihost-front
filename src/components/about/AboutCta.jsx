import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ctaabout from "../../assets/about/cta.png";
import ctaabout2 from "../../assets/about/cta2.png";
import img1 from "../../assets/about/img.png";
import img2 from "../../assets/about/img2.png";
import img3 from "../../assets/about/img3.png";
import img4 from "../../assets/about/img4.png";

gsap.registerPlugin(ScrollTrigger);

const AboutCta = () => {
  const sectionRef = useRef(null);

  const count1 = useRef(null);
  const count2 = useRef(null);
  const count3 = useRef(null);
  const count4 = useRef(null);

  useEffect(() => {
    const animateCounter = (ref, end, suffix = "+") => {
      let obj = { val: 0 };

      gsap.to(obj, {
        val: end,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          if (ref.current) {
            ref.current.innerText = Math.floor(obj.val) + suffix;
          }
        },
      });
    };

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "10% 55%",
      once: true,
      // markers:true,
      onEnter: () => {
        animateCounter(count1, 14, "+ Countries");
        animateCounter(count2, 30, "+ Industries");
        animateCounter(count3, 100, "+ Companies");
        animateCounter(count4, 10, "+ Years");
      },
    });
  }, []);

  return (
    <div className="aboutcta" ref={sectionRef}>
      <div className="container">
        <div className="cta">
          <div className="row g-0">
            <div className="col-lg-4">
              <div className="ctabox">
                <figure data-gsap>
                  <img src={img1} alt="" />
                </figure>
                <h3 data-gsap ref={count1}>0+ Countries</h3>
                <p data-gsap>
                  Collaborating with founders, institutions, and businesses across global markets while staying rooted in purposeful execution.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <figure data-gsap>
                <img src={ctaabout} alt="" />
              </figure>
            </div>

            <div className="col-lg-4">
              <div className="ctabox">
                <figure data-gsap>
                  <img src={img2} alt="" />
                </figure>
                <h3 data-gsap ref={count2}>0+ Industries</h3>
                <p data-gsap>
                From healthcare and hospitality to manufacturing, education, technology, and government ecosystems — every industry taught us a different way people build trust.
                </p>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="ctabox">
                <figure data-gsap>
                  <img src={img3} alt="" />
                </figure>
                <h3 data-gsap ref={count3}>+ Companies</h3>
                <p data-gsap>
                 Brands, platforms, and digital systems crafted across industries ranging from healthcare and education to manufacturing, hospitality, and government.
                </p>
              </div>
            </div>

            <div className="col-lg-3">
              <figure data-gsap>
                <img src={ctaabout2} alt="" />
              </figure>
            </div>

            <div className="col-lg-4">
              <div className="ctabox">
                <figure data-gsap>
                  <img src={img4} alt="" />
                </figure>
                <h3 data-gsap ref={count4}>0+ Years</h3>
                <p data-gsap>
                 Spent understanding not just how brands look online - but how businesses grow, evolve, inherit legacy, and earn relevance over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCta;