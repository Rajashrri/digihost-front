import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import lanova from "../../assets/soup/lanova.webp"
import lanovavideo from "../../assets/soup/lanovavideo.mp4"
import lanova1 from "../../assets/soup/lanova1.webp"
import lanova2 from "../../assets/soup/lanova2.webp"
import lanova3 from "../../assets/soup/lanova3.webp"
import lanova4 from "../../assets/soup/lanova4.webp"
import lanova5 from "../../assets/soup/lanova5.webp"
import lanova6 from "../../assets/soup/lanova6.webp"
import lanova7 from "../../assets/soup/lanova7.webp"
import lanova8 from "../../assets/soup/lanova8.webp"
import lanova9 from "../../assets/soup/lanova9.webp"
import lanova10 from "../../assets/soup/lanova10.webp"
import lanova11 from "../../assets/soup/lanova11.webp"
import lanova11v from "../../assets/soup/lanova11v.mp4"
import lanova12 from "../../assets/soup/lanova12.webp"

import FashionSlider from "../soupherb/Slider"
// import FashionSlider from "./Slider"

import soupherb from "../../assets/portfolio/soupherb.webp";
// import lanova from "../../assets/portfolio/lanova.webp";
import wefanss from "../../assets/portfolio/wefanss.webp";
import rekhabrightstill from "../../assets/portfolio/rekha-bright-still.webp";
import drgaikwad from "../../assets/portfolio/dr-gaikwad.webp";
import akirhs from "../../assets/portfolio/akirhs.webp";
import canair from "../../assets/portfolio/ca-nair.webp";
import lomadental from "../../assets/portfolio/loma-dental.webp";
import worldflair from "../../assets/portfolio/worldflair.webp";
import verteacalblendz from "../../assets/portfolio/verteacal-blendz.webp";

    const slides = [
      // { img: lanova, name: "lanova", link:"/lanova" },
      { img: worldflair, name: "WORLD FLAIR", link:"/worldflair" },
      { img: verteacalblendz, name: "VB", link:"/verteacal-blendz" },
      { img: soupherb, name: "SoupHerb", link:"/soupherb" },
      { img: lomadental, name: "LOMA Dental", link:"/loma-dental" },
      { img: wefanss, name: "WE FANSS" , link:"/wefanss"},
      { img: rekhabrightstill, name: "RBS ",link:"/rekha-bright-still" },
      { img: drgaikwad, name: "Dr Gaikwad" , link:"/dr-gaikwad"},
      { img: akirhs, name: "AKIRHS" , link:"/akirhs"},
      { img: canair, name: "CA NAIR", link:"/ca-nair" },
  ];


gsap.registerPlugin(ScrollTrigger)

const LanovaDetails = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const videoScaleRef = useRef(null)

  useEffect(() => {

     
    const ctx = gsap.context(() => {
    gsap.fromTo(
  textRef.current,
  {
    fontSize: window.innerWidth <= 1024 ? "40px" : "64px",
    x: "0%",
    y: "0%",
  },
  {
    fontSize: window.innerWidth <= 1024 ? "64px" : "200px",
    x: window.innerWidth <= 1024 ? "0%" : "0%",
    y: window.innerWidth <= 1024 ? "0%" : "100%",
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
          <img src={lanova} alt="" />
        </figure>

        <h3 data-gsap className="dettext">
         A modern identity for a brand built around refinement, restraint, and quiet confidence.
        </h3>

        <div className="bigtextcontainer" ref={sectionRef}>
          <h2 ref={textRef}>La Nova</h2>
        </div>

        <div data-gsap className="subloader">
          <video
            src={lanovavideo}
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
            La Nova needed an identity that felt elevated <br /> without becoming distant.
            </p>

            <p data-gsap>The existing visual language lacked distinction. <br /> It looked functional, but not memorable. <br /> Premium, but not emotionally resonant. </p>
            <p data-gsap>
           The goal was not simply to redesign a logo — <br /> it was to shape a feeling around the brand.
            </p>
          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={lanova1} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={lanova2} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={lanova3} alt="" />
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
            We began by studying how luxury is perceived today.
            </p>

            <p data-gsap>
              Not through excess, <br /> but through clarity. <br /> Not through noise, <br /> but through restraint.
            </p>

            <p data-gsap>
              Every element — typography, spacing, tone, <br /> packaging direction, and digital presence — <br /> was designed to feel composed and intentional.
            </p>
          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={lanova4} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>

        {/* Identity */}
        <div className="thechallange">
           <h3 data-gsap>The Identity</h3>

          <div className="paradiv">
            <p data-gsap>
             The resulting identity system balances <br /> minimalism with warmth.
            </p>

            <p data-gsap>
             Elegant typography. <br /> Controlled contrast. <br /> Structured layouts. <br /> Subtle detailing.
              </p>

            <p data-gsap>
           An identity designed not to demand attention, <br /> but to hold it.
            </p>
          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-6">
                <div className="maultiimg">
                  <figure data-gsap>
                    <img src={lanova5} alt="" />
                  </figure>

                  <figure data-gsap>
                    <img src={lanova6} alt="" />
                  </figure>

                  <figure data-gsap>
                    <img src={lanova7} alt="" />
                  </figure>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="maultiimg">
                  <figure data-gsap>
                    <img src={lanova8} alt="" />
                  </figure>

                  <figure data-gsap>
                    <img src={lanova9} alt="" />
                  </figure>

                  <figure data-gsap>
                    <img src={lanova10} alt="" />
                  </figure>
                </div>
              </div>


            </div>
          </div>
        </div>

        {/* Identity */}
        <div className="thechallange">
           <h3 data-gsap>The Outcome</h3>

          <div className="paradiv">
            <p data-gsap>
              
              La Nova now communicates with greater consistency, <br /> stronger recall, and a clearer sense of personality.
              </p>
            <p data-gsap>
              
            The brand no longer feels like a product. <br /> It feels like a point of view.
            </p>

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
            {/* <img src={lanova11} alt="" /> */}
              <video
            src={lanova11v}
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
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={lanova12} alt="" />
                </figure>
              </div>



            </div>
          </div>


        </div>


          {/* Identity */}
        <div className="thechallange">
           <h3 data-gsap>Precis</h3>

          <div className="paradiv">
           <p data-gsap>What makes La Nova successful is not any single visual element, <br /> but the discipline behind the entire system.</p>
           <p data-gsap>Every decision was made to reduce distraction <br /> and strengthen perception. <br /> The result is a brand that feels calm, <br /> confident, and unmistakably intentional.</p>
           <p data-gsap>Rather than chasing trends, <br /> the project focused on creating something enduring — <br /> an identity designed to age with elegance <br /> and communicate without excess.</p>

          </div>

           


        </div>

        {/* <FashionSlider/> */}
        <FashionSlider slides={slides}/>

      </div>
    </div> 

    )
    
} 
      
export default LanovaDetails;