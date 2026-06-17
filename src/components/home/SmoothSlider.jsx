import React, { useState, useEffect } from "react"
import img1 from "../../assets/home/slider/0.png"
import img2 from "../../assets/home/slider/1.png"
import img3 from "../../assets/home/slider/2.png"
import img4 from "../../assets/home/slider/3.png"
import img5 from "../../assets/home/slider/4.png"
import img6 from "../../assets/home/slider/5.png"

const slides = [
  {
    image: img1,
    thumb: img1,
    title: "SoupHerb",
    desc: "Committed to sustainability, we harness technology to build a greener and more efficient future for all.",
    tags: ["Renewable Energy", "Smart Grids", "Waste Management Tech","Sustainable Materials"],
  },
  {
    image: img2,
    thumb: img2,
    title: "LOMA",
    desc: "Pioneering innovative solutions that transform ideas into reality, pushing the boundaries of technology.",
    tags: ["Blockchain", "Augmented Reality","Cloud Computing","Cybersecurity"],
  },
  {
    image: img3,
    thumb: img3,
    title: "WE FANSS",
    desc: "Committed to sustainability, we harness technology to build a greener and more efficient future for all.",
    tags: ["Dental Hygiene", "Oral Health Systems","Dental Waste Disposal","Biocompatible Materials"],
  },
  {
    image: img4,
    thumb: img4,
    title: "RBS",
    desc: "Committed to sustainability, we harness technology to build a greener and more efficient future for all.",
    tags: ["Organic Ingredients", "Gluten-Free","Non-GMO","Vegan Friendly"],
  },
  {
    image: img5,
    thumb: img5,
    title: "Dr Gaikwad",
    desc: "Committed to sustainability, we harness technology to build a greener and more efficient future for all.",
    tags: ["Renewable Energy", "Smart Grids","Waste Management Tech","Sustainable Materials"],
  },
  {
    image: img6,
    thumb: img6,
    title: "View All Portfolio’s ",
    desc: "",
    tags: [],
  },
]

const SmoothSlider = () => {
  const [active, setActive] = useState(0)

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const auto = setInterval(() => {
      nextSlide()
    }, 4000)

    return () => clearInterval(auto)
  }, [])

  return (
    <div className="smooth-slider">

      {/* LEFT SIDE UPCOMING CARDS */}
      <div className="left-thumbs">
        {slides
          .filter((_, index) => index === active)
          .map((item, i) => {
            const realIndex = (active + i + 1) % slides.length

            return (
              <div
                key={realIndex}
                className="left-thumb"
                onClick={() => setActive(realIndex)}
              >
                <img src={slides[realIndex].thumb} alt="" />
              </div>
            )
          })}
      </div>

      {/* CENTER IMAGE */}
      <div className="slider-left">
        <img src={slides[active].image} alt="" />
      </div>

      {/* RIGHT CONTENT */}
      <div className="slider-right">
        <div className="contentwrpa1">

      

        <div className="nav-btns">
          <button onClick={prevSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 8L2 12M2 12L6 16M2 12H22" stroke="#1A766D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </button>
          <button onClick={nextSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 8L22 12M22 12L18 16M22 12H2" stroke="#1A766D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </button>
        </div>

        <div className="content-box">

          <figure>
             <img src={slides[active].image} alt="" />
          </figure>

          <h2>{slides[active].title}</h2>
          <p>{slides[active].desc}</p>

          <div className="tags">
            {slides[active].tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
          <div>
            <a href="#!"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M42 26V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V10C6 8.93913 6.42143 7.92172 7.17157 7.17157C7.92172 6.42143 8.93913 6 10 6H22M42 6L24 24M42 6H30M42 6V18" stroke="#B1EBE0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></a>
          </div>
        </div>
          </div>

        {/* RIGHT THUMBS */}
        <div className="thumb-row">
          {slides.map((item, index) => (
            <div
              key={index}
              className={`thumb ${active === index ? "active" : ""}`}
              onClick={() => setActive(index)}
            >
              <img src={item.thumb} alt="" />
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default SmoothSlider