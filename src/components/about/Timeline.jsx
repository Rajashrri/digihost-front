import React, { useEffect, useRef, useState } from "react";
import timeline from "../../assets/about/timeline.png";

const milestones = [
  {
    year: "2012",
    title: "The Beginning",
    description:
      "What started as a small creative pursuit slowly evolved into a studio built on clarity, craft, and meaningful digital experiences — shaped project by project, milestone by milestone.",
  },
  {
    year: "2016",
    title: "Growth Phase",
    description:
      "What started as a small creative pursuit slowly evolved into a studio built on clarity, craft, and meaningful digital experiences — shaped project by project, milestone by milestone.",
  },
  {
    year: "2018",
    title: "Recognition",
    description:
      "What started as a small creative pursuit slowly evolved into a studio built on clarity, craft, and meaningful digital experiences — shaped project by project, milestone by milestone.",
  },
  {
    year: "2022",
    title: "Global Reach",
    description:
      "What started as a small creative pursuit slowly evolved into a studio built on clarity, craft, and meaningful digital experiences — shaped project by project, milestone by milestone.",
  },
  {
    year: "2024",
    title: "Innovation",
    description:
      "What started as a small creative pursuit slowly evolved into a studio built on clarity, craft, and meaningful digital experiences — shaped project by project, milestone by milestone.",
  },
  {
    year: "2025",
    title: "Future Vision",
    description:
      "What started as a small creative pursuit slowly evolved into a studio built on clarity, craft, and meaningful digital experiences — shaped project by project, milestone by milestone.",
  },
];


export default function Timeline() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);

  const handleNext = () => {
    if (active < milestones.length - 1) {
      setActive((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (active > 0) {
      setActive((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const totalHeight = rect.height - window.innerHeight;

      if (totalHeight <= 0) return;

      let progress = (-rect.top / totalHeight) * milestones.length;
      progress = Math.max(0, Math.min(milestones.length - 1, progress));

      setActive(Math.floor(progress));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="timeline-wrapper"
      style={{ minHeight: "300vh" }}
    >
      <div className="timeline-sticky">
        <div className="timeline-header heading1">
          <h2>Milestones That Shaped Us</h2>

          <div className="snap-btns">
            <button onClick={handlePrev}>
                         <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 16L2 12L6 8M2 12H22"
                  stroke="#1A766D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button onClick={handleNext}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 16L22 12L18 8M22 12H2"
                  stroke="#1A766D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="timeline-track">
          {milestones.map((item, i) => (
            <div
              key={i}
              className={`timeline-card ${active === i ? "active" : ""}`}
            >
              <div className="year">{item.year}</div>

              {active === i && (
                <div className="content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <img src={timeline} alt="" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}