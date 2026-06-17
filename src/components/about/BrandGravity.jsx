import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";

import c1 from "../../assets/about/cd1.png";
import c2 from "../../assets/about/cd2.png";
import c3 from "../../assets/about/cd3.png";

gsap.registerPlugin(ScrollTrigger);

const BrandGravity = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 991) {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 80,
      });
      return;
    }

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".movecard");
      const title = sectionRef.current.querySelector(".brandbox1 h2");
      const sub = sectionRef.current.querySelector(".brandbox1 h4");
      const soul = sectionRef.current.querySelector(".soultext .soul");
      const science = sectionRef.current.querySelector(".soultext .science");
      const scale = sectionRef.current.querySelector(".soultext .scale");
      const com = sectionRef.current.querySelector(".soultext .com");

      gsap.set(cards[0], {
        opacity: 0,
        y: -700,
        x: -150,
        scale: 0.6,
        rotate: 8,
      });

      gsap.set(cards[1], {
        opacity: 0,
        y: -250,
        x: -80,
        scale: 0.6,
        rotate: 8,
      });

      gsap.set(cards[2], {
        opacity: 0,
        y: -500,
        x: 200,
        scale: 0.6,
        rotate: 8,
      });

      gsap.set([title, sub, soul, science, scale, com], {
        opacity: 0,
        y: 50,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=350%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(soul, { opacity: 1, y: 0 })
        .to(cards[0], { opacity: 1, y: -700, x: -150 })
        .to(science, { opacity: 1, y: 0 })
        .to(cards[1], { opacity: 1, y: -250, x: -80 })
        .to(scale, { opacity: 1, y: 0 })
        .to(cards[2], { opacity: 1, y: -500, x: 200 })
        .to(com, { opacity: 1, y: 0 })
        .to(cards, {
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
          stagger: 0.15,
        })
        .to(title, { opacity: 1, y: 0 })
        .to(sub, { opacity: 1, y: 0 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="gravitysection">
      <div className="container">
        <div className="gravitycontainer" ref={sectionRef}>
          <div className="soultext">
            <h2>
              <span className="soul" data-aos="fade-up">
                When Soul shapes positioning,
              </span>
              <br />
              <span className="science" data-aos="fade-up">
                Science structures execution,
              </span>
              <br />
              <span className="scale" data-aos="fade-up">
                And Scale is approached consciously,
              </span>
              <br />
              <span className="com" data-aos="fade-up">
                brands stop chasing attention.
                <br />
                They start building trust, recognition,
                <br />
                and long-term recall.
              </span>
            </h2>
          </div>

          <div className="brandbox1">
            <h2 data-aos="fade-up">The</h2>

            <div className="topstage">
              <div className="movecard card1" data-aos="fade-right">
                <img src={c2} alt="" />
              </div>

              <div className="movecard card2" data-aos="fade-up">
                <img src={c3} alt="" />
              </div>

              <div className="movecard card3" data-aos="fade-left">
                <img src={c1} alt="" />
              </div>
            </div>

            <h4 data-aos="fade-up">
              philosophy is not a method.
              <br />
              It is a way of thinking.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandGravity;