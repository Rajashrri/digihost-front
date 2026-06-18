import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import main from "../../assets/soup/main.webp"
import video1 from "../../assets/soup/soupherbloader.mp4"
import s1 from "../../assets/soup/s1.webp"
import s2 from "../../assets/soup/s2.webp"
import s3 from "../../assets/soup/s3.webp"
import s4 from "../../assets/soup/s4.webp"
import s5 from "../../assets/soup/s5.webp"
import s6 from "../../assets/soup/s6.webp"
import s7 from "../../assets/soup/s7.webp"
import s8 from "../../assets/soup/s8.webp"
import s9 from "../../assets/soup/s9.webp"
import s10 from "../../assets/soup/s10.webp"
import s11 from "../../assets/soup/s11.webp"
import s12 from "../../assets/soup/s12.webp"
import img2 from "../../assets/soup/2.webp"
import img3 from "../../assets/soup/3.webp"
import img4 from "../../assets/soup/4.webp"
import img5 from "../../assets/soup/5.webp"
import FashionSlider from "./Slider"

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
    // { img: soupherb, name: "SoupHerb", link:"/soupherb" },
    { img: lomadental, name: "LOMA Dental", link:"/loma-dental" },
    { img: wefanss, name: "WE FANSS" , link:"/wefanss"},
    { img: rekhabrightstill, name: "RBS ",link:"/rekha-bright-still" },
    { img: drgaikwad, name: "Dr Gaikwad" , link:"/dr-gaikwad"},
    { img: akirhs, name: "AKIRHS" , link:"/akirhs"},
    { img: canair, name: "CA NAIR", link:"/ca-nair" },
    { img: lanova, name: "lanova", link:"/lanova" },
    { img: worldflair, name: "WORLD FLAIR", link:"/worldflair" },
    { img: verteacalblendz, name: "VB", link:"/verteacal-blendz" },
  ];

gsap.registerPlugin(ScrollTrigger)

const Details = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const videoScaleRef = useRef(null)

  useEffect(() => {

     
    const ctx = gsap.context(() => {
    gsap.fromTo(
  textRef.current,
  {
    fontSize: window.innerWidth <= 991 ? "40px" : "64px",
    x: "0%",
    y: "0%",
  },
  {
    fontSize: window.innerWidth <= 991 ? "64px" : "200px",
    x: window.innerWidth <= 991 ? "0%" : "0%",
    y: window.innerWidth <= 991 ? "100%" : "100%",
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
        <figure className="mainimg" data-gsap>
          <img src={main} alt="" />
        </figure>

        <h3 className="dettext" data-gsap>
       An Ayurvedic wellness identity designed around
ancient intelligence and modern accessibility.
        </h3>

        <div className="bigtextcontainer" ref={sectionRef}>
          <h2 ref={textRef}>Soupherb</h2>
        </div>

        <div className="subloader" data-gsap>
          <video
            src={video1}
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
              Soupherb carried a powerful philosophy —
bringing traditional Ayurvedic nourishment
into a format relevant for modern lifestyles.
            </p>

            <p data-gsap>
              But the brand presence lacked cohesion.
The communication felt fragmented.
And the depth of the product philosophy
was not translating digitally.
            </p>
            <p data-gsap>
              The challenge was to create a system
that felt rooted in tradition,
while remaining contemporary and accessible.
            </p>
           
          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={s1} alt="" />
                </figure>
              </div>

              <div className="col-lg-4">
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
              </div>

              <div className="col-lg-8">
                <figure data-gsap>
                  <img src={s2} alt="" />
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
through the idea of forgotten intelligence.
            </p>

            <p data-gsap>
           The wisdom of ingredients.
The rhythm of mindful nourishment.
The balance between body and lifestyle.
            </p>

            <p data-gsap>
      From the identity system
to packaging,
website experience,
product storytelling,
and digital communication —
every touchpoint was designed
to feel natural, informed, and intentional.
            </p>
          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={s6} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>

        {/* Identity */}
        <div className="thechallange">
          <h3 data-gsap>The Identity</h3>

          <div className="paradiv">
            <p data-gsap>The resulting identity balances
heritage with modern clarity.</p>
            <p data-gsap> Earth-led visual language.
Clean typography.
Minimal but warm presentation.
Ingredient-focused storytelling.</p>
            <p data-gsap>A system designed to make wellness
feel approachable rather than overwhelming.</p>
          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={s7} alt="" />
                </figure>
              </div>

              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={s8} alt="" />
                </figure>
              </div>


            </div>
          </div>
        </div>

        {/* Identity */}
        <div className="thechallange">
          <h3 data-gsap>The Outcome</h3>

          <div className="paradiv">
            <p data-gsap>Soupherb now communicates
with greater consistency,
stronger emotional resonance,
and a far more distinctive wellness presence. </p>
            <p data-gsap>The brand evolved
from appearing like a niche product line
to feeling like a thoughtful wellness ecosystem.</p>


          </div>

          <div className="soupimgsgal">
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
          </div>


        </div>

        <div className="scrilvideo" >
          <div className="videocontainer" ref={videoScaleRef}>
            <img src={img2} alt="" />
            <div className="play">
              <a href="#!"> <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
                <path d="M20 20.0004C19.9996 18.5928 20.3706 17.21 21.0755 15.9916C21.7805 14.7732 22.7944 13.7624 24.015 13.0612C25.2356 12.36 26.6195 11.9933 28.0272 11.9981C29.4348 12.0029 30.8162 12.379 32.032 13.0884L80.02 41.0804C81.2311 41.7831 82.2365 42.7914 82.9358 44.0044C83.6351 45.2175 84.0037 46.5928 84.0049 47.993C84.0062 49.3931 83.6399 50.7691 82.9427 51.9833C82.2455 53.1976 81.2418 54.2076 80.032 54.9124L32.032 82.9124C30.8162 83.6219 29.4348 83.998 28.0272 84.0027C26.6195 84.0075 25.2356 83.6408 24.015 82.9396C22.7944 82.2385 21.7805 81.2276 21.0755 80.0093C20.3706 78.7909 19.9996 77.4081 20 76.0004V20.0004Z" fill="#B1EBE0" stroke="#B1EBE0" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="thechallange">


          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={img3} alt="" />
                </figure>
              </div>

              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={img4} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={img5} alt="" />
                </figure>
              </div>


            </div>
          </div>


        </div>


          {/* Identity */}
        <div className="thechallange">
          <h3 data-gsap>Precis</h3>

          <div className="paradiv">
           <p data-gsap>Wellness brands today
often compete through trends.</p>
           <p data-gsap>But the strongest ones
are built on philosophy.
</p>
           <p data-gsap>Every decision across the system
was designed to preserve authenticity,
improve accessibility,
and create a stronger emotional connection
with modern consumers.</p>
           <p data-gsap>The result is a brand presence
that feels grounded,
conscious,
and timelessly relevant.</p>

          </div>

            <div className="soupimgsgal">
              <div className="row">
                <div className="col-lg-12">
                  <figure data-gsap>
                    <img src={s12} alt="" />
                  </figure>
                </div>


              </div>
            </div>


        </div>

        {/* <FashionSlider/> */}
        <FashionSlider slides={slides}/>

      </div>
    </div> 

    )
    
} 
      
export default Details;