import React, { useState } from "react"
import g1 from "../../assets/portfolio/1.webp"
import g2 from "../../assets/portfolio/2.webp"
import g3 from "../../assets/portfolio/3.webp"
import g4 from "../../assets/portfolio/4.webp"
import g5 from "../../assets/portfolio/5.webp"
import g6 from "../../assets/portfolio/6.webp"
import g7 from "../../assets/portfolio/7.webp"
import g8 from "../../assets/portfolio/8.webp"
import g9 from "../../assets/portfolio/9.webp"
import g10 from "../../assets/portfolio/10.webp"

import s1 from "../../assets/portfolio/s1.webp"
import s2 from "../../assets/portfolio/s2.webp"
import s3 from "../../assets/portfolio/s3.webp"
import s4 from "../../assets/portfolio/s4.webp"
import s5 from "../../assets/portfolio/s5.webp"
import s6 from "../../assets/portfolio/s6.webp"
import s7 from "../../assets/portfolio/s7.webp"
import s8 from "../../assets/portfolio/s8.webp"
import s9 from "../../assets/portfolio/s9.webp"
import s10 from "../../assets/portfolio/s10.webp"

const Portfolio = () => {
  const [view, setView] = useState("grid")

  const galleryData = [
    {img:g1,
      link:"/soupherb"
    },
    {img:g2,
      link:"/loma-dental"
    },
    {img:g3,
      link:"/wefanss"
    },
    {img:g4,
      link:"/rekha-bright-still"
    },
    {img:g5,
      link:"/dr-gaikwad"
    },
    {img:g6,
      link:"/akirhs"
    },
    {img:g7,
      link:"/ca-nair"
    },
    {img:g8,
      link:"/lanova"
    },
    {img:g9,
      link:"/worldflair"
    },
    {img:g10,
      link:"/verteacal-blendz"
    }
  ]

  const stack = [
    {
      id: 1,
      title: "SoupHerb",
      para: "Discover our unique approach to achieving success.",
      img: s1,
      link:"/soupherb",
      tags: ["AI", "Machine Learning", "Deep Learning"],
    },
    {
      id: 2,
      title: "LOMA ",
      para: "Creative solutions that deliver business growth.",
      img: s2,
      link:"/loma-dental",
      tags: ["Branding", "UI UX", "SEO"],
    },
    {
      id: 3,
      title: "WE FANSS ",
      para: "Modern strategies with impactful results.",
      img: s3,
      link:"/wefanss",
      tags: ["React", "Node", "Cloud"],
    },
    {
      id: 4,
      title: "RBS",
      para: "Modern strategies with impactful results.",
      img: s4,
      link:"/rekha-bright-still",
      tags: ["React", "Node", "Cloud"],
    },
    {
      id: 5,
      title: "Dr Gaikwad ",
      para: "Modern strategies with impactful results.",
      img: s5,
      link:"/dr-gaikwad",
      tags: ["React", "Node", "Cloud"],
    },
    {
      id: 6,
      title: "AKIRHS",
      para: "Modern strategies with impactful results.",
      img: s6,
      link:"/akirhs",
      tags: ["React", "Node", "Cloud"],
    },
    {
      id: 7,
      title: "CA NAIR",
      para: "Modern strategies with impactful results.",
      img: s7,
      link:"/ca-nair",
      tags: ["React", "Node", "Cloud"],
    },
    {
      id: 8,
      title: "LA NOVA ",
      para: "Modern strategies with impactful results.",
      img: s8,
      link:"/lanova",
      tags: ["React", "Node", "Cloud"],
    },
    {
      id: 9,
      title: "WORLD FLAIR",
      para: "Modern strategies with impactful results.",
      img: s9,
      link:"/worldflair",
      tags: ["React", "Node", "Cloud"],
    },
    {
      id: 10,
      title: "VB ",
      para: "Modern strategies with impactful results.",
      img: s10,
      link:"/verteacal-blendz",
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
            {galleryData.map((item, index) => (
              <a href={item.link} className="item" data-gsap key={index}>
                <img src={item.img} alt="" />

                <div className="read">
                  <a href={item.link}>View Project</a>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* List View */}
      {view === "list" && (
        <div className="container" id="list">
          {stack.map((item, index) => (
            <a href={item.link} data-gsap className="portitem" key={index}>
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