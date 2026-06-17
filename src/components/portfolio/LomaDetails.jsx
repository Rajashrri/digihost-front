import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import loma from "../../assets/soup/loma.webp"
import lomavideo from "../../assets/soup/lomavideo.mp4"
import loma1 from "../../assets/soup/loma1.webp"
import loma2 from "../../assets/soup/loma2.webp"
import loma3 from "../../assets/soup/loma3.webp"
import loma4 from "../../assets/soup/loma4.mp4"
import loma5 from "../../assets/soup/loma5.webp"
import loma6 from "../../assets/soup/loma6.webp"
import loma7 from "../../assets/soup/loma7.webp"
import loma8 from "../../assets/soup/loma8.webp"
import loma9 from "../../assets/soup/loma9.mp4"
import loma10 from "../../assets/soup/loma10.webp"
import loma11 from "../../assets/soup/loma11.webp"
import loma12 from "../../assets/soup/loma12.webp"
import FashionSlider from "../soupherb/Slider"
// import FashionSlider from "./Slider"

import soupherb from "../../assets/portfolio/soupherb.webp";
import lanova from "../../assets/portfolio/lanova.webp";
import wefanss from "../../assets/portfolio/wefanss.webp";
import rekhabrightstill from "../../assets/portfolio/rekha-bright-still.webp";
import drgaikwad from "../../assets/portfolio/dr-gaikwad.webp";
import akirhs from "../../assets/portfolio/akirhs.webp";
import canair from "../../assets/portfolio/ca-nair.webp";
import lomadental from "../../assets/portfolio/loma-dental.webp";
import worldflair from "../../assets/portfolio/worldflair.webp";
import verteacalblendz from "../../assets/portfolio/verteacal-blendz.webp";

    const slides = [
      // { img: lomadental, name: "LOMA Dental", link:"/loma-dental" },
      { img: wefanss, name: "WE FANSS" , link:"/wefanss"},
      { img: rekhabrightstill, name: "RBS ",link:"/rekha-bright-still" },
      { img: drgaikwad, name: "Dr Gaikwad" , link:"/dr-gaikwad"},
      { img: akirhs, name: "AKIRHS" , link:"/akirhs"},
      { img: canair, name: "CA NAIR", link:"/ca-nair" },
      { img: lanova, name: "lanova", link:"/lanova" },
      { img: worldflair, name: "WORLD FLAIR", link:"/worldflair" },
      { img: verteacalblendz, name: "VB", link:"/verteacal-blendz" },
      { img: soupherb, name: "SoupHerb", link:"/soupherb" },
  ];


gsap.registerPlugin(ScrollTrigger)

const LomaDetails = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const videoScaleRef = useRef(null)

  useEffect(() => {

     
    const ctx = gsap.context(() => {
    gsap.fromTo(
  textRef.current,
  {
    fontSize: window.innerWidth <= 1024 ? "32px" : "64px",
    x: "0%",
    y: "0%",
  },
  {
    fontSize: window.innerWidth <= 1024 ? "64px" : "200px",
    x: window.innerWidth <= 1024 ? "0%" : "0%",
    y: window.innerWidth <= 1024 ? "80%" : "100%",
    ease: "none",
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 80%",
      end: "10% 40%",
      scrub: 1,
      // markers:true
    },
  }
);

      gsap.fromTo(
        videoScaleRef.current,
        {
          scale: 0.35,
          borderRadius: "30px",
        },
        {
          scale: 1,
          borderRadius: "0px",
          ease: "none",
          scrollTrigger: {
            trigger: ".scrilvideo",
            start: "top top",
            end: "+=1800",
            scrub: 1,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            markers: false,
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="detailsbody">
      <div className="container">
        <figure data-gsap className="mainimg">
          <img src={loma} alt="" />
        </figure>

        <h3 data-gsap className="dettext">
          A premium dental identity designed around modern care, emotional comfort, and transformation.
        </h3>

        <div className="bigtextcontainer" ref={sectionRef}>
          <h2 ref={textRef}>Loma Dental</h2>
        </div>

        <div data-gsap className="subloader">
          <video
            src={lomavideo}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Challenge */}
        <div className="thechallange">
          <h3 data-gsap>The Challenge</h3>

          <div className="paradiv">
            <p data-gsap>
             LOMA Dental was envisioned
             as more than a conventional clinic.
            </p>

            <p data-gsap>
            The goal was to create a modern dentistry experience that felt technologically advanced, emotionally aware, and globally aspirational.
            </p>
            <p data-gsap>
            The challenge was to build a brand that balanced luxury with reassurance — without losing clinical credibility.
            </p>
          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={loma1} alt="" />
                </figure>
              </div>

              {/* <div className="col-lg-4">
                <div className="maultiimg">
                  <figure data-gsap>
                    <img src={s3} alt="" />
                  </figure>

                  <figure data-gsap>
                    <img src={s4} alt="" />
                  </figure>

                  <figure data-gsap>
                    <img src={s5} alt="" />
                  </figure>
                </div>
              </div> */}

              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={loma2} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={loma3} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>

        {/* Approach */}
        <div className="thechallange">
          <h3 data-gsap>The Approach</h3>

          <div className="paradiv">
            <p data-gsap>
              We approached the brand
              <br />through the experience of modern dentistry.
            </p>

            <p data-gsap>
            Not cold.
            <br />Not intimidating.
            <br />Not overly clinical.
            </p>

            <p data-gsap>
             From the identity system
             <br />to the website experience,
             <br />interior communication,
             <br />technology storytelling,
             <br />and visual direction —
             <br />every touchpoint was designed
             <br />to feel calm, refined, and intentional.
            </p>
          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
               <video
            src={loma4}
            autoPlay
            muted
            loop
            playsInline
          />
              </div>
            </div>
          </div>
        </div>

        {/* Identity */}
        <div className="thechallange">
          <h3 data-gsap>The Identity</h3>

          <div className="paradiv">
            <p data-gsap>
             The resulting identity balances <br /> premium aesthetics with human warmth.
            </p>

            <p data-gsap>
              Minimal compositions. <br /> Elegant typography. <br /> Controlled whitespace. <br /> Technology-led storytelling.
            </p>

            <p data-gsap>
             A system designed to communicate sophistication <br /> without feeling distant.
            </p>
          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={loma5} alt="" />
                </figure>
              </div>

              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={loma6} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={loma7} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={loma8} alt="" />
                </figure>
              </div>


            </div>
          </div>
        </div>

        {/* Identity */}
        <div className="thechallange">
          <h3 data-gsap>The Outcome</h3>

          <div className="paradiv">
            <p data-gsap>
              
              LOMA Dental now communicates <br /> with stronger distinction, <br /> greater consistency, <br /> and a far more elevated digital presence.</p>

            <p data-gsap>
              
              The brand evolved <br /> from appearing like a dental clinic <br /> to feeling like a modern dental experience. </p>


          </div>

          {/* <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={s9} alt="" />
                </figure>
              </div>

              <div className="col-lg-4">
                <figure data-gsap>
                  <img src={s10} alt="" />
                </figure>
              </div>
              <div className="col-lg-8">
                <figure data-gsap>
                  <img src={s11} alt="" />
                </figure>
              </div>


            </div>
          </div> */}


        </div>

        <div className="scrilvideo">
          <div className="videocontainer" ref={videoScaleRef}>
            {/* <img src={img2} alt="" /> */}
                 <video
                        src={loma9}
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
            {/* <div className="play">
              <a href="#!"> <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
                <path d="M20 20.0004C19.9996 18.5928 20.3706 17.21 21.0755 15.10246C21.7805 14.7732 22.7944 13.7624 24.015 13.0612C25.2356 12.36 26.6195 11.9933 28.0272 11.9981C29.4348 12.0029 30.8162 12.379 32.032 13.0884L80.02 41.0804C81.2311 41.7831 82.2365 42.7914 82.9358 44.0044C83.6351 45.2175 84.0037 46.5928 84.0049 47.993C84.0062 49.3931 83.6399 50.7691 82.9427 51.9833C82.2455 53.1976 81.2418 54.2076 80.032 54.9124L32.032 82.9124C30.8162 83.6219 29.4348 83.998 28.0272 84.0027C26.6195 84.0075 25.2356 83.6408 24.015 82.9396C22.7944 82.2385 21.7805 81.2276 21.0755 80.0093C20.3706 78.7909 19.9996 77.4081 20 76.0004V20.0004Z" fill="#B1EBE0" stroke="#B1EBE0" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              </a>
            </div> */}
          </div>
        </div>

        <div className="thechallange">


          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-6">
                <div className="maultiimg">
                  <figure data-gsap>
                    <img src={loma10} alt="" />
                  </figure>

                  <figure data-gsap>
                    <img src={loma11} alt="" />
                  </figure>
                </div>
              </div>

              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={loma12} alt="" />
                </figure>
              </div>


            </div>
          </div>


        </div>


          {/* Identity */}
        <div className="thechallange">
          <h3 data-gsap>Precis</h3>

          <div className="paradiv">
           <p data-gsap>Modern healthcare branding <br /> is no longer only about expertise</p>
           <p data-gsap>It is about how confidently <br /> and comfortably <br /> that expertise is experienced.</p>
           <p data-gsap>Every decision across the system <br /> was designed to reduce fear, <br /> strengthen trust, <br /> and elevate perception.</p>
           <p data-gsap>The result is a brand presence <br /> that feels refined, <br /> reassuring, <br /> and unmistakably contemporary.</p>

          </div>

            {/* <div className="soupimgsgal">
              <div className="row">
                <div className="col-lg-12">
                  <figure data-gsap>
                    <img src={s12} alt="" />
                  </figure>
                </div>


              </div>
            </div> */}


        </div>

        {/* <FashionSlider/> */}
        <FashionSlider slides={slides}/>

      </div>
    </div> 

    )
    
} 
      
export default LomaDetails;