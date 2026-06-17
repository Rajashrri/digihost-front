import React, { useState } from "react"
import g1 from "../../assets/portfolio/g1.png"
import g2 from "../../assets/portfolio/g2.png"
import g3 from "../../assets/portfolio/g3.png"
import g4 from "../../assets/portfolio/g4.png"
import g5 from "../../assets/portfolio/g5.png"
import g6 from "../../assets/portfolio/g6.png"
import g7 from "../../assets/portfolio/g7.png"
import g8 from "../../assets/portfolio/g8.png"
import g9 from "../../assets/portfolio/g2.png"

import s1 from "../../assets/portfolio/s1.png"
import s2 from "../../assets/portfolio/s2.png"
import s3 from "../../assets/portfolio/s3.png"

const Portfolio = () => {
  const [view, setView] = useState("grid")

  const galleryData = [
    g1, g2, g3, g4, g5, g6, g7, g8, g9,
    g1
  ]

  const stack = [
    {
      id: 1,
      title: "Soupherb",
      para: "Discover our unique approach to achieving success.",
      img: s1,
      tags: ["AI", "Machine Learning", "Deep Learning"],
    },
    {
      id: 2,
      title: "Dr.Gaikwad",
      para: "Creative solutions that deliver business growth.",
      img: s2,
      tags: ["Branding", "UI UX", "SEO"],
    },
    {
      id: 3,
      title: "Verteacal Blendz",
      para: "Modern strategies with impactful results.",
      img: s3,
      tags: ["React", "Node", "Cloud"],
    },
  ]

  return (
    <div className="gallery-section">

      {/* Buttons */}
      <div className="btncontainer1">
        <button
         type="button"
          className={view === "grid" ? "active" : ""}
          onClick={(e) => {
             window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
            setView("grid");
          }}
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M6 16C11 16 13 8 18 8C19.0609 8 20.0783 8.42143 20.8284 9.17157C21.5786 9.92172 22 10.9391 22 12C22 13.0609 21.5786 14.0783 20.8284 14.8284C20.0783 15.5786 19.0609 16 18 16C13 16 11 8 6 8C4.93913 8 3.92172 8.42143 3.17157 9.17157C2.42143 9.92172 2 10.9391 2 12C2 13.0609 2.42143 14.0783 3.17157 14.8284C3.92172 15.5786 4.93913 16 6 16Z" stroke="#FEFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>

        <button
         type="button"
          className={view === "list" ? "active" : ""}
          onClick={(e) => {
           window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          setView("list");
        }}
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 5H21M3 12H21M3 19H21" stroke="#1A766D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
      </div>

      {/* Grid View */}
      {view === "grid" && (
        <div className="container-fluid p-0" id="grid">
          <div className="custom-gallery">
            {galleryData.map((img, index) => (
              <div className="item" data-gsap key={index}>
                <img src={img} alt="" />

                <div className="read">
                  <a href="#!">View Project</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* List View */}
      {view === "list" && (
        <div className="container" id="list">
          {stack.map((item, index) => (
            <a href="#!" data-gsap className="portitem" key={index}>
              <figure>
                <img src={item.img} alt="" />
              </figure>

              <div className="portconten">
                <div className="conty">
                  <h1>{item.title}</h1>
                  <p>{item.para}</p>

                  <div className="tags">
                    {item.tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="atext">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M42 26V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V10C6 8.93913 6.42143 7.92172 7.17157 7.17157C7.92172 6.42143 8.93913 6 10 6H22M42 6L24 24M42 18V6H30" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default Portfolio