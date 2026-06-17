import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import vb from "../../assets/soup/vb.webp"
import vb1 from "../../assets/soup/vb1.webp"
import vb2 from "../../assets/soup/vb2.webp"
import vb3 from "../../assets/soup/vb3.webp"
import vb4 from "../../assets/soup/vb4.mp4"
import vb5 from "../../assets/soup/vb5.webp"
import vb6 from "../../assets/soup/vb6.webp"
import vb7 from "../../assets/soup/vb7.webp"
import vb8 from "../../assets/soup/vb8.webp"
import vb9 from "../../assets/soup/vb9.webp"
import vb10 from "../../assets/soup/vb10.webp"
import vb11 from "../../assets/soup/vb11.webp"
import vb12 from "../../assets/soup/vb12.mp4"
import vbvideo from "../../assets/soup/vbvideo.mp4"

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
      // { img: verteacalblendz, name: "VB", link:"/verteacal-blendz" },
      { img: soupherb, name: "SoupHerb", link:"/soupherb" },
      { img: lomadental, name: "LOMA Dental", link:"/loma-dental" },
      { img: wefanss, name: "WE FANSS" , link:"/wefanss"},
      { img: rekhabrightstill, name: "RBS ",link:"/rekha-bright-still" },
      { img: drgaikwad, name: "Dr Gaikwad" , link:"/dr-gaikwad"},
      { img: akirhs, name: "AKIRHS" , link:"/akirhs"},
      { img: canair, name: "CA NAIR", link:"/ca-nair" },
      { img: lanova, name: "lanova", link:"/lanova" },
      { img: worldflair, name: "WORLD FLAIR", link:"/worldflair" },
  ];

gsap.registerPlugin(ScrollTrigger)

const VerteacalBlendzDetails = () => {
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
          fontSize: window.innerWidth <= 1024 ? "64px" : "130px",
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
          <img src={vb} alt="" />
        </figure>

        <h3 data-gsap className="dettext">
       A legacy tea business reimagined for <br /> a more contemporary and global future.
        </h3>

        <div className="bigtextcontainer" ref={sectionRef}>
          <h2 ref={textRef}>Verteacal Blendz</h2>
        </div>

        <div data-gsap className="subloader h-100">
          <video
            src={vbvideo}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

          {/* <div className="soupimgsgal mt-0 mb-5">
            <div className="row">
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={wf1} alt="" />
                </figure>
              </div>


              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={wf2} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={wf3} alt="" />
                </figure>
              </div>
            </div>
          </div> */}

     

        {/* Challenge */}
        <div className="thechallange">
          <h3 data-gsap>The Challenge</h3>

          <div className="paradiv">
            <p data-gsap>Verteacal Blendz carried over six decades <br /> of trust, relationships, and industry experience  <br /> but the brand presence <br /> did not reflect the scale or evolution <br /> of the business.</p>
            <p data-gsap>The communication felt traditional. <br /> The visual identity lacked distinction. <br /> And the generational legacy <br /> was not translating effectively <br /> to newer markets and audiences.</p>
        
        

          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={vb1} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={vb2} alt="" />
                </figure>
              </div>
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={vb3} alt="" />
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

             
            </div>
          </div>
        </div>

        {/* Approach */}
        <div className="thechallange">
          <h3 data-gsap>The Approach</h3>

          <div className="paradiv">
            <p data-gsap>We approached the rebrand <br />
             through the balance of heritage and progression.</p>
            <p data-gsap>The goal was not to erase the past, <br />
             but to modernize how it was experienced.</p>
            <p data-gsap>From the identity system <br />
             to packaging direction, <br />
             digital communication, <br />
             and brand storytelling  <br />
             every touchpoint was designed <br />
             to feel refined, rooted, and future-ready.</p>

          </div>

          <div className="soupimgsgal">
             <video
            src={vb4}
            autoPlay
            muted
            loop
            playsInline
          />
          </div>
        </div>

        {/* Identity */}
        <div className="thechallange">
          <h3 data-gsap>The Identity</h3>

          <div className="paradiv">
            <p data-gsap>The resulting identity balances <br />
             legacy with modern restraint.</p>
            <p data-gsap>Structured typography. <br />
             Clean visual hierarchy. <br />
             Warm, grounded communication. <br />
             Contemporary presentation systems.</p>
            <p data-gsap>A system designed to preserve trust <br />
             while improving relevance.</p>
          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={vb5} alt="" />
                </figure>
              </div>
               <div className="col-lg-6">
                <div className="maultiimg">
                  <figure data-gsap>
                    <img src={vb6} alt="" />
                  </figure>

                  <figure data-gsap>
                    <img src={vb7} alt="" />
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
            <p data-gsap>Verteacal Blendz now communicates <br /> with greater consistency, <br /> stronger market distinction, <br /> and a more contemporary presence.</p>
            <p data-gsap>The business evolved <br /> from appearing like a traditional distributor <br /> to feeling like a modern tea brand <br /> built on generations of expertise.</p>
   

          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={vb8} alt="" />
                </figure>
              </div>
               <div className="col-lg-6">
                <div className="maultiimg">
                  <figure data-gsap>
                    <img src={vb9} alt="" />
                  </figure>

                  <figure data-gsap>
                    <img src={vb10} alt="" />
                  </figure>
                </div>
              </div>
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={vb11} alt="" />
                </figure>
              </div>
            </div>
          </div>


        </div>

      

        

       


        {/* Identity */}
        <div className="thechallange">
          <h3 data-gsap>Precis</h3>

          <div className="paradiv">
            <p data-gsap>Legacy brands carry something <br />
             modern businesses cannot manufacture overnight earned trust.</p>
            <p data-gsap>Every decision across the system <br />
             was designed to preserve that credibility <br />
             while helping the brand evolve <br />
             for newer markets and future growth.</p>
            <p data-gsap>The result is a brand presence <br />
             that feels experienced, <br />
             refined, <br />
             and built to continue across generations</p>

          </div>

         


        </div>

         <div className="scrilvideo">
                  <div className="videocontainer" ref={videoScaleRef}>
                    {/* <img src={img2} alt="" /> */}
                         <video
                                src={vb12}
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

        {/* <FashionSlider/> */}
        <FashionSlider slides={slides} />

      </div>
    </div>

  )

}

export default VerteacalBlendzDetails;