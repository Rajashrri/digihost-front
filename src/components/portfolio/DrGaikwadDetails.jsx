import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import drg from "../../assets/soup/drg.webp"
import drg1 from "../../assets/soup/drg1.webp"
import drg2 from "../../assets/soup/drg2.webp"
import drg3 from "../../assets/soup/drg3.webp"
import drg4 from "../../assets/soup/drg4.webp"
import drg5 from "../../assets/soup/drg5.webp"
import drg6 from "../../assets/soup/drg6.webp"
import drg7 from "../../assets/soup/drg7.webp"
import drg8 from "../../assets/soup/drg8.webp"
import drg9 from "../../assets/soup/drg9.webp"
import drg10 from "../../assets/soup/drg10.mp4"
import drg11 from "../../assets/soup/drg11.webp"
import drg12 from "../../assets/soup/drg12.webp"
import drg13 from "../../assets/soup/drg13.webp"
import drgvideo from "../../assets/soup/drgvideo.mp4"


import FashionSlider from "../soupherb/Slider"
// import FashionSlider from "./Slider"

import img11 from "../../assets/portfolio/g1.png";
import img21 from "../../assets/portfolio/g2.png";
import img31 from "../../assets/portfolio/g3.png";

    const slides = [
    { img: img11, name: "SoupHerb", link:"/soupherb" },
    { img: img21, name: "lanova", link:"/lanova" },
    { img: img31, name: "WE FANSS" , link:"/wefanss"},
    { img: img11, name: "RBS ",link:"/rekha-bright-still" },
    { img: img21, name: "Dr Gaikwad" , link:"/dr-gaikwad"},
    { img: img31, name: "AKIRHS" , link:"/akirhs"},
    { img: img11, name: "CA NAIR", link:"/ca-nair" },
    { img: img21, name: "LOMA Dental", link:"/loma-dental" },
    { img: img31, name: "WORLD FLAIR", link:"/worldflair" },
    { img: img31, name: "VB", link:"/verteacal-blendz" },
  ];


gsap.registerPlugin(ScrollTrigger)

const DrGaikwadDetails = () => {
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
          <img src={drg} alt="" />
        </figure>

        <h3 data-gsap className="dettext">
          A modern dental identity shaped around <br />trust, precision, and human reassurance.
        </h3>

        <div className="bigtextcontainer" ref={sectionRef}>
          <h2 ref={textRef}>Dr Gaikwad</h2>
        </div>

        <div data-gsap className="subloader">
          <video
            src={drgvideo}
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
            <p data-gsap>Despite years of clinical excellence, <br /> the brand presence did not fully reflect <br /> the depth of expertise behind the practice.</p>
            <p data-gsap>The communication felt fragmented. <br /> The visual identity lacked consistency. <br /> And the experience of modern dentistry <br /> was not being translated digitally.</p>
            <p data-gsap>The challenge was not merely to market a clinic  <br /> it was to build confidence before a patient even walked in.</p>


          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={drg1} alt="" />
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
                  <img src={drg2} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={drg3} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>

        {/* Approach */}
        <div className="thechallange">
          <h3 data-gsap>The Approach</h3>

          <div className="paradiv">
            <p data-gsap>We approached the brand from theperspective of patient psychology.</p>
            <p data-gsap>Dental anxiety. <br />
             Fear of pain. <br />
             Fear of judgment. <br />
             Fear of uncertainty.</p>
            <p data-gsap>Every touchpoint was redesigned <br />
             to feel calmer, clearer, and more reassuring.</p>
            <p data-gsap>From the visual identity <br />
             to the website structure, <br />
             content language, <br />
             technology positioning, <br />
             and digital communication — <br />
             the goal was to make modern dentistry <br />
             feel approachable without reducing its sophistication.</p>


          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={drg4} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={drg5} alt="" />
                </figure>
              </div>
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={drg6} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>

        {/* Identity */}
        <div className="thechallange">
          <h3 data-gsap>The Identity</h3>

          <div className="paradiv">
            <p data-gsap>The resulting identity balances <br />
             clinical precision with emotional warmth.</p>
            <p data-gsap>Clean compositions. <br />
             Controlled typography. <br />
             Intentional whitespace. <br />
             Technology-led storytelling.</p>
            <p data-gsap>A visual language designed <br />
             to communicate expertise quietly, <br />
             rather than aggressively.</p>
            <p data-gsap>The brand no longer feels transactional. <br />
             It feels guided.</p>
          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={drg7} alt="" />
                </figure>
              </div>

              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={drg8} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={drg9} alt="" />
                </figure>
              </div>



            </div>
          </div>
        </div>

        {/* Identity */}
        <div className="thechallange">
          <h3 data-gsap>The Outcome</h3>

          <div className="paradiv">
            <p data-gsap>Dr. Shuddhodhan Gaikwad now communicates <br />
             with stronger authority, <br />
             greater consistency, <br />
             and a far more distinctive digital presence.</p>
            <p data-gsap>The practice evolved from being perceived <br />
             as simply another dental clinic <br />
             to becoming a modern dentistry experience <br />
             rooted in trust and transformation.</p>
         



          </div>


        </div>

        <div className="scrilvideo">
          <div className="videocontainer" ref={videoScaleRef}>
                 <video
                        src={drg10}
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
            
          </div>
        </div>

          <div className="soupimgsgal mb-5">
            <div className="row">
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={drg11} alt="" />
                </figure>
              </div>

              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={drg12} alt="" />
                </figure>
              </div>
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={drg13} alt="" />
                </figure>
              </div>



            </div>
          </div>

       


        {/* Identity */}
        <div className="thechallange">
          <h3 data-gsap>Precis</h3>

          <div className="paradiv">
            <p data-gsap>What strengthened the brand was not just aesthetics, but emotional alignment.</p>
            <p data-gsap>Patients do not merely choose dentistry based on treatment. They choose based on how safe, <br /> understood, and confident they feel.</p>
            <p data-gsap>Every part of the identity system was built around reducing hesitation and increasing trust.</p>
            <p data-gsap>The result is a brand presence that feels modern, measured, and deeply patient-aware.</p>

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
        <FashionSlider slides={slides} />

      </div>
    </div>

  )

}

export default DrGaikwadDetails;