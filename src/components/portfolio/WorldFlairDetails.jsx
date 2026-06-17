import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import wf from "../../assets/soup/wf.webp"
import wf1 from "../../assets/soup/wf1.webp"
import wf2 from "../../assets/soup/wf2.webp"
import wf3 from "../../assets/soup/wf3.webp"
import wf4 from "../../assets/soup/wf4.webp"
import wf5 from "../../assets/soup/wf5.webp"
import wf6 from "../../assets/soup/wf6.webp"
import wf7 from "../../assets/soup/wf7.webp"
import wf8 from "../../assets/soup/wf8.webp"
import wf9 from "../../assets/soup/wf9.webp"
import wf10 from "../../assets/soup/wf10.webp"
import wf11 from "../../assets/soup/wf11.webp"
import wf12 from "../../assets/soup/wf12.webp"

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
      // { img: worldflair, name: "WORLD FLAIR", link:"/worldflair" },
      { img: verteacalblendz, name: "VB", link:"/verteacal-blendz" },
      { img: soupherb, name: "SoupHerb", link:"/soupherb" },
      { img: lomadental, name: "LOMA Dental", link:"/loma-dental" },
      { img: wefanss, name: "WE FANSS" , link:"/wefanss"},
      { img: rekhabrightstill, name: "RBS ",link:"/rekha-bright-still" },
      { img: drgaikwad, name: "Dr Gaikwad" , link:"/dr-gaikwad"},
      { img: akirhs, name: "AKIRHS" , link:"/akirhs"},
      { img: canair, name: "CA NAIR", link:"/ca-nair" },
      { img: lanova, name: "lanova", link:"/lanova" },
  ];


gsap.registerPlugin(ScrollTrigger)

const WorldFlairDetails = () => {
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
          y: window.innerWidth <= 1024 ? "20%" : "100%",
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
          <img src={wf} alt="" />
        </figure>

        <h3 data-gsap className="dettext">
        A global procurement identity designed around <br />coordination, efficiency, and operational clarity.
        </h3>

        <div className="bigtextcontainer" ref={sectionRef}>
          <h2 ref={textRef}>WorldFlair</h2>
        </div>

        {/* <div className="subloader">
          <video
            src={canairvideo}
            autoPlay
            muted
            loop
            playsInline
          />
        </div> */}

          <div className="soupimgsgal mt-0 mb-5">
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
          </div>

     

        {/* Challenge */}
        <div className="thechallange">
          <h3 data-gsap>The Challenge</h3>

          <div className="paradiv">
            <p data-gsap>World Flair operated across <br /> multiple countries, <br /> manufacturers, <br /> and procurement systems — <br /> but the digital presence <br /> did not reflect the sophistication <br /> behind the operations.</p>
            <p data-gsap>The communication felt functional. <br /> The workflows lacked visibility. <br /> And the scale of coordination <br /> was not being communicated effectively.</p>
        

          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={wf4} alt="" />
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
            <p data-gsap>We approached the brand <br />
             through the lens of industrial trust.</p>
            <p data-gsap>Not flashy marketing. <br />
             But clarity, structure, and confidence.</p>
            <p data-gsap>From the website system <br />
             to the visual language and communication  <br />
             every touchpoint was redesigned <br />
             to feel dependable, modern, and precise.</p>
   
          


          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={wf5} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={wf6} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>

        {/* Identity */}
        <div className="thechallange">
          <h3 data-gsap>The Identity</h3>

          <div className="paradiv">
            <p data-gsap>The resulting identity balances <br /> global professionalism with functional clarity</p>
            <p data-gsap>Structured layouts. <br /> Controlled communication. <br /> Minimal visual friction. <br /> System-led presentation.</p>
            <p data-gsap>A framework designed to simplify <br /> high-volume operational movement.</p>
          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={wf7} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={wf8} alt="" />
                </figure>
              </div>
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={wf9} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>

        {/* Identity */}
        <div className="thechallange">
          <h3 data-gsap>The Outcome</h3>

          <div className="paradiv">
            <p data-gsap>World Flair now communicates <br />
             with greater clarity, <br />
             stronger operational confidence, <br />
             and a more contemporary digital presence.</p>
            <p data-gsap>The business evolved <br />
             from appearing process-heavy <br />
             to feeling system-driven and globally connected.</p>

          </div>


        </div>

        {/* <div className="scrilvideo">
          <div className="videocontainer" ref={videoScaleRef}>
                 <video
                        src={canair9}
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
            
          </div>
        </div> */}

          <div className="soupimgsgal mb-5">
            <div className="row">
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={wf10} alt="" />
                </figure>
              </div>

               
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={wf11} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={wf12} alt="" />
                </figure>
              </div>



            </div>
          </div>

       


        {/* Identity */}
        <div className="thechallange">
          <h3 data-gsap>Precis</h3>

          <div className="paradiv">
            <p data-gsap>The strongest operational brands <br /> are rarely the loudest.</p>
            <p data-gsap>They are the ones <br /> that make complexity feel effortless.</p>
            <p data-gsap>Every decision across the system <br /> was designed to reduce friction, <br /> improve visibility, <br /> and communicate scale with greater precision.</p>
            <p data-gsap>The result is a brand presence <br /> that feels structured, <br /> efficient, <br /> and internationally aligned.</p>

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

export default WorldFlairDetails;