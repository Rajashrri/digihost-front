import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import akirhs from "../../assets/soup/akirhs.webp"
import akirhs1 from "../../assets/soup/akirhs1.webp"
import akirhs2 from "../../assets/soup/akirhs2.webp"
import akirhs3 from "../../assets/soup/akirhs3.webp"
import akirhs4 from "../../assets/soup/akirhs4.webp"
import akirhs5 from "../../assets/soup/akirhs5.webp"
import akirhs6 from "../../assets/soup/akirhs6.webp"
import akirhs7 from "../../assets/soup/akirhs7.webp"
import akirhs8 from "../../assets/soup/akirhs8.mp4"
import akirhs9 from "../../assets/soup/akirhs9.webp"
import akirhs10 from "../../assets/soup/akirhs10.webp"
import akirhs11 from "../../assets/soup/akirhs11.webp"
import akirhs12 from "../../assets/soup/akirhs12.webp"
import akirhsvideo from "../../assets/soup/akirhsvideo.mp4"

import FashionSlider from "../soupherb/Slider"
// import FashionSlider from "./Slider"

import soupherb from "../../assets/portfolio/soupherb.webp";
import lanova from "../../assets/portfolio/lanova.webp";
import wefanss from "../../assets/portfolio/wefanss.webp";
import rekhabrightstill from "../../assets/portfolio/rekha-bright-still.webp";
import drgaikwad from "../../assets/portfolio/dr-gaikwad.webp";
// import akirhs from "../../assets/portfolio/akirhs.webp";
import canair from "../../assets/portfolio/ca-nair.webp";
import lomadental from "../../assets/portfolio/loma-dental.webp";
import worldflair from "../../assets/portfolio/worldflair.webp";
import verteacalblendz from "../../assets/portfolio/verteacal-blendz.webp";

    const slides = [
      // { img: akirhs, name: "AKIRHS" , link:"/akirhs"},
      { img: canair, name: "CA NAIR", link:"/ca-nair" },
      { img: lanova, name: "lanova", link:"/lanova" },
      { img: worldflair, name: "WORLD FLAIR", link:"/worldflair" },
      { img: verteacalblendz, name: "VB", link:"/verteacal-blendz" },
      { img: soupherb, name: "SoupHerb", link:"/soupherb" },
      { img: lomadental, name: "LOMA Dental", link:"/loma-dental" },
      { img: wefanss, name: "WE FANSS" , link:"/wefanss"},
      { img: rekhabrightstill, name: "RBS ",link:"/rekha-bright-still" },
      { img: drgaikwad, name: "Dr Gaikwad" , link:"/dr-gaikwad"},
  ];



gsap.registerPlugin(ScrollTrigger)

const AkirhsDetails = () => {
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
        <figure className="mainimg" data-gsap>
          <img src={akirhs} alt="" />
        </figure>

        <h3 className="dettext" data-gsap>
         A technology identity designed to feel <br /> globally capable, structured, and future-facing.
        </h3>

        <div className="bigtextcontainer" ref={sectionRef}>
          <h2 ref={textRef}>Akirhs</h2>
        </div>

        <div className="subloader" data-gsap>
          <video
            src={akirhsvideo}
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
            <p data-gsap>AKIRHS had the technical capability, team strength, and operational depth but the brand lacked the perception of a modern technology partner.</p>
            <p data-gsap>The communication felt functional, not differentiated.</p>
            <p data-gsap>The challenge was to build an identity that reflected intelligence, scale, and long-term confidence.</p>


          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={akirhs1} alt="" />
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
                  <img src={akirhs2} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={akirhs3} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>

        {/* Approach */}
        <div className="thechallange">
          <h3 data-gsap>The Approach</h3>

          <div className="paradiv">
            <p data-gsap>We approached the brand through clarity and structure.</p>
            <p data-gsap>Not innovation for appearance but systems designed to feel focused, dependable, and modern.</p>
            <p data-gsap>From identity design <br /> to website architecture and communication, <br /> every touchpoint was built <br /> to simplify sophistication.</p>
          


          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={akirhs4} alt="" />
                </figure>
              </div>
              
            </div>
          </div>
        </div>

        {/* Identity */}
        <div className="thechallange">
          <h3 data-gsap>The Identity</h3>

          <div className="paradiv">
            <p data-gsap>The identity balances precision with restraint.</p>
            <p data-gsap>Minimal layouts. <br /> Confident typography. <br /> Structured visual rhythm. <br /> Controlled contrast and motion.</p>
            <p data-gsap>A system designed to feel credible, scalable, and globally relevant.</p>
          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-5">
                <figure data-gsap>
                  <img src={akirhs5} alt="" />
                </figure>
              </div>

              <div className="col-lg-7">
                <figure data-gsap>
                  <img src={akirhs6} alt="" />
                </figure>
              </div>
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={akirhs7} alt="" />
                </figure>
              </div>



            </div>
          </div>
        </div>

        {/* Identity */}
        <div className="thechallange">
          <h3 data-gsap>The Outcome</h3>

          <div className="paradiv">
            <p data-gsap>AKIRHS now communicates with stronger authority and clearer positioning.</p>
            <p data-gsap>The brand evolved from appearing like a development vendor to feeling like a strategic technology partner.</p>
            <p data-gsap>A more contemporary presence <br /> built for long-term growth.</p>
          </div>


        </div>

        <div className="scrilvideo">
          <div className="videocontainer" ref={videoScaleRef}>
                 <video
                        src={akirhs8}
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
            
          </div>
        </div>

          <div className="soupimgsgal mb-5">
            <div className="row">
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={akirhs9} alt="" />
                </figure>
              </div>

                 <div className="col-lg-6">
                <div className="maultiimg">
                  <figure data-gsap>
                    <img src={akirhs10} alt="" />
                  </figure>

                  <figure data-gsap>
                    <img src={akirhs11} alt="" />
                  </figure>
                </div>
              </div>
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={akirhs12} alt="" />
                </figure>
              </div>



            </div>
          </div>

       


        {/* Identity */}
        <div className="thechallange">
          <h3 data-gsap>Precis</h3>

          <div className="paradiv">
            <p data-gsap>Strong technology brands do not just communicate innovation.</p>
            <p data-gsap>They communicate clarity.</p>
            <p data-gsap>Every decision across the system<br /> was designed to reduce noise,<br /> strengthen perception,<br /> and reflect organizational maturity.</p>
            <p data-gsap>The result is a brand presence that feels intelligent, composed, and built for scale.</p>

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

export default AkirhsDetails;