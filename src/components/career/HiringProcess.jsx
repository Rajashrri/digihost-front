  import React, { useEffect, useRef } from "react";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  const processData = [
    {
      id: "1",
      title: "Initial conversation",
      side: "left",
      boxTitle: "Behavioral Fit",
      boxText:
        "Do you align with depth, discipline, and ownership?",
    },
    {
      id: "2",
      title: "Strategic discussion round",
      side: "right",
      boxTitle: "Thought Process",
      boxText:
        "We evaluate how you think not just what you know.",
    },
    {
      id: "3",
      title: "Practical evaluation",
      side: "left",
      boxTitle: "Responsibility Readiness",
      boxText:
        "Can you carry weight beyond instructions?",
    },
    {
      id: "4",
      title: "Alignment discussion",
      side: "right",
      boxTitle: "Cultural Alignment",
      boxText:
        "Do you resonate with clarity over chaos?",
    },
    {
      id: "5",
      title: "Offer clarity",
      side: "",
      boxTitle: "",
      boxText: "",
    },
  ];

  export default function HiringProcess() {
    const sectionRef = useRef(null);
    const timelineRef = useRef(null);
useEffect(() => {
  if (!timelineRef.current) return;

  if (window.innerWidth <= 425) {
    timelineRef.current.scrollLeft = 170;
  } else if (window.innerWidth <= 540) {
    timelineRef.current.scrollLeft = 100;
  }
}, []);
    useEffect(() => {
      const cards = gsap.utils.toArray(".process-item");

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 50%",
              scrub: 1,
              // markers:true
            },
          }
        );
      });

      gsap.fromTo(
        ".process-line-fill",
        {
          height: "0%",
        },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );
    }, []);

    return (
      <section className="hiring-process-section" ref={sectionRef}>
        <div className="container">
          {/* TOP CONTENT */}
          <div className="process-heading">
            <h2 data-gsap>
              We Don’t Hire Fast.
              <br />
              We Hire Right.
              <br />
              Our Hiring Process Is Structured Around:
            </h2>
          </div>

          {/* TIMELINE */}
          <div className="process-timeline" ref={timelineRef}>
      

            {processData.map((item, index) => (
              <div 
                className={`process-item  ${
                  item.side === "left"
                    ? "left"
                    : item.side === "right"
                    ? "right"
                    : "center"
                }`}
                key={index}
              >
                {/* SIDE BOX */}
                {item.boxTitle && (
                  <div className="process-side-box">
                    <h4>{item.boxTitle}</h4>
                    <p>{item.boxText}</p>
                  </div>
                )}

                {/* CENTER CONTENT */}
                <div className="process-center">
                  <span>{item.id}</span>

                  <h3>{item.title}</h3>

                  
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM TEXT */}
          <div className="process-bottom-text">
            <h2 data-gsap>
              Because talent without
              <br />
              alignment creates friction.
            </h2>
          </div>
        </div>
      </section>
    );
  }