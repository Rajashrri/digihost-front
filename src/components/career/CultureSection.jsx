import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CultureSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 1024px)", () => {
    const ctx = gsap.context(() => {

      // =========================
      // FADE IN ANIMATION
      // =========================
      gsap.utils.toArray(".culture-card").forEach((card) => {
        const fadeItems = card.querySelectorAll(
          ".fade-item, .pill, .bottom-text"
        );

        gsap.set(fadeItems, {
          opacity: 0,
          y: 80,
        });

        gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 70%",
          },
        }).to(fadeItems, {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.08,
          ease: "power3.out",
        });
      });

      // =========================
      // PIN CENTER
      // =========================
      gsap.utils.toArray(".culture-card").forEach((card, index, cards) => {
        const center = card.querySelector(".culture-center");

        ScrollTrigger.create({
          trigger: card,
          start: "top 0",
          end:
            index === cards.length - 1
              ? "bottom bottom"
              : "bottom -13%",
          pin: center,
          pinSpacing: false,
          scrub: true,
          anticipatePin: 1,
          // markers:true
        });
      });

      // =========================
      // DOUBLE LINE GROW
      // =========================
      gsap.utils.toArray(".culture-center").forEach((center) => {
        const lines = center.querySelectorAll(".double-line");

        gsap.fromTo(
          lines,
          {
            height: 0,
          },
          {
            height: "100%",
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: center,
              start: "top 85%",
            },
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  });

  mm.add("(min-width: 1024px)", () => {
    gsap.set(
      ".fade-item, .pill, .bottom-text",
      {
        opacity: 1,
        y: 0,
      }
    );

    gsap.set(".double-line", {
      height: "100%",
    });
  });

  return () => mm.revert();
}, []);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {

  //     // =========================
  //     // FADE IN ANIMATION
  //     // =========================
  //     gsap.utils.toArray(".culture-card").forEach((card) => {

  //       const fadeItems = card.querySelectorAll(
  //         ".fade-item, .pill, .bottom-text"
  //       );

  //       gsap.set(fadeItems, {
  //         opacity: 0,
  //         y: 80,
  //       });

  //       gsap.timeline({
  //         scrollTrigger: {
  //           trigger: card,
  //           start: "top 70%",
  //           // markers:true
  //         },
  //       }).to(fadeItems, {
  //         opacity: 1,
  //         y: 0,
  //         duration: 1,
  //         stagger: 0.08,
  //         ease: "power3.out",
  //       });

  //     });

  //     // =========================
  //     // PIN DOUBLE II
  //     // =========================
  //     gsap.utils.toArray(".culture-card").forEach((card, index, cards) => {

  //       const center = card.querySelector(".culture-center");

  //       ScrollTrigger.create({
  //         trigger: card,
  //         start: "top 10%",

  //         end:
  //           index === cards.length - 1
  //             ? "bottom bottom"
  //             : "bottom -13%",

  //         pin: center,
  //         pinSpacing: false,
  //         scrub: true,
  //         anticipatePin: 1,

  //         // markers:true
  //       });

  //     });

  //     // =========================
  //     // DOUBLE LINE GROW
  //     // =========================
  //     gsap.utils.toArray(".culture-center").forEach((center) => {

  //       const lines = center.querySelectorAll(".double-line");

  //       gsap.fromTo(
  //         lines,
  //         {
  //           height: 0,
  //         },
  //         {
  //           height: "100%",
  //           duration: 1,
  //           ease: "power4.out",
  //           stagger: 0,
  //           scrollTrigger: {
  //             trigger: center,
  //             start: "top 85%",
  //             // markers:true
  //           },
  //         }
  //       );

  //     });

  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <section className="culture-section" ref={sectionRef}>

      <div className="container">

        <div className="culturehead">
            <h2 data-gsap>We don’t hire employees. <br />
            We align with builders.</h2>
            <p data-gsap>DIIGIIHOST is for thinkers who want to shape brands with clarity, discipline, and depth — not just execute tasks.</p>
        </div>

        {/* ========================================= */}
        {/* FIRST CARD */}
        {/* ========================================= */}

        <div className="culture-card">

          <div className="culture-grid">

            {/* LEFT */}
            <div className="culture-side left">

              <h2 className="fade-item">
                DIIGIIHOST Is Not Built For:
              </h2>

              <div className="pill-wrap">

                <div className="pill">
                  Trend-followers without thinking
                </div>

                <div className="pill">
                  Passive executors waiting for instructions
                </div>

                <div className="pill">
                  “Just complete the task” mindset
                </div>

                <div className="pill">
                  Ego-driven creatives
                </div>

                <div className="pill">
                  Blame-shifters
                </div>

              </div>

              <p className="bottom-text">
                We expect contribution.
                <br />
                Not compliance.
              </p>

            </div>

            {/* CENTER */}
            <div className="culture-center">

              <div className="double-line"></div>

              <div className="double-line"></div>

            </div>

            {/* RIGHT */}
            <div className="culture-side right">

              <h2 className="fade-item">
                You Will Thrive Here If
              </h2>

              <div className="pill-wrap">

                <div className="pill active">
                  You ask "why" before "how"
                </div>

                <div className="pill active">
                  You take ownership beyond your job title
                </div>

                <div className="pill active">
                  You can balance creativity with logic
                </div>

                <div className="pill active">
                  You are calm, focused, and deliberate
                </div>

              </div>

              <p className="bottom-text">
                We operate in Soul. Science. Scale.
                <br />
                That applies internally too.
              </p>

            </div>

          </div>

        </div>

           <div className="culturehead secrt">
            <h2>How We Think About Growth</h2>
           </div>

        {/* ========================================= */}
        {/* SECOND CARD */}
        {/* ========================================= */}

        <div className="culture-card light">

          <div className="culture-grid">

            {/* LEFT */}
            <div className="culture-side left">

              <h2 className="fade-item smtext">
               Growth is not just about:
              </h2>

              <div className="pill-wrap">

                <div className="pill">
                  Promotions
                </div>

                <div className="pill">
                  Appearances
                </div>

                <div className="pill">
                  Titles
                </div>

              </div>

            </div>

            {/* CENTER */}
            <div className="culture-center">

              <div className="double-line"></div>

              <div className="double-line"></div>

            </div>

            {/* RIGHT */}
            <div className="culture-side right">

              <h2 className="fade-item smtext">
                Growth is about:
              </h2>

              <div className="pill-wrap">

                <div className="pill active">
                  Strategic thinking
                </div>

                <div className="pill active">
                  Ownership maturity
                </div>

                <div className="pill active">
                  System understanding
                </div>

                <div className="pill active">
                  Behavioral awareness
                </div>

                <div className="pill active">
                  Long-term consistency
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


    </section>
  );
};

export default CultureSection;