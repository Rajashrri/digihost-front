import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import canair from "../../assets/soup/canair.webp"
import canair1 from "../../assets/soup/canair1.webp"
import canair2 from "../../assets/soup/canair2.webp"
import canair3 from "../../assets/soup/canair3.webp"
import canair4 from "../../assets/soup/canair4.webp"
import canair5 from "../../assets/soup/canair5.webp"
import canair6 from "../../assets/soup/canair6.webp"
import canair7 from "../../assets/soup/canair7.webp"
import canair8 from "../../assets/soup/canair8.webp"
import canair9 from "../../assets/soup/canair9.mp4"
import canair10 from "../../assets/soup/canair10.webp"
import canair11 from "../../assets/soup/canair11.webp"
import canairvideo from "../../assets/soup/canairvideo.mp4"

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

const CaNairDetails = () => {
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
          <img src={canair} alt="" />
        </figure>

        <h3 data-gsap className="dettext">
         A technology identity designed to feel <br /> globally capable, structured, and future-facing.
        </h3>

        <div className="bigtextcontainer" ref={sectionRef}>
          <h2 ref={textRef}>Ca Nair</h2>
        </div>

        <div className="subloader" data-gsap>
          <video
            src={canairvideo}
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
            <p data-gsap>CA Nair had years of expertise, <br />
             but the brand presence did not reflect <br />
             the level of professionalism behind the practice.</p>
            <p data-gsap>The communication felt traditional. <br />
             The identity lacked distinction. <br />
             And the digital experience <br />
             did not build immediate trust.</p>
            <p data-gsap>The challenge was not to appear louder — <br />
             but to appear clearer and more credible.</p>


          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={canair1} alt="" />
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

              <div className="col-lg-5">
                <figure data-gsap>
                  <img src={canair2} alt="" />
                </figure>
              </div>
              <div className="col-lg-7">
                <figure data-gsap>
                  <img src={canair3} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>

        {/* Approach */}
        <div className="thechallange">
          <h3 data-gsap>The Approach</h3>

          <div className="paradiv">
            <p data-gsap>We approached the brand <br /> through the lens of financial reassurance.</p>
            <p data-gsap>Clients seek expertise, <br /> but they also seek confidence, <br /> stability, <br /> and clarity.</p>
            <p data-gsap>From the visual identity <br /> to the website structure, <br /> service communication, <br /> and overall tone — <br /> every touchpoint was redesigned <br /> to feel composed, structured, and dependable.</p>
   
          


          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={canair4} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={canair5} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={canair6} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={canair7} alt="" />
                </figure>
              </div>
              
            </div>
          </div>
        </div>

        {/* Identity */}
        <div className="thechallange">
          <h3 data-gsap>The Identity</h3>

          <div className="paradiv">
            <p data-gsap>The resulting identity balances <br /> professional precision with modern simplicity.</p>
            <p data-gsap>Minimal layouts. <br /> Controlled typography. <br /> Structured communication. <br /> Clean visual hierarchy.</p>
            <p data-gsap>A system designed to communicate trust <br /> without unnecessary complexity.</p>
          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={canair8} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>

        {/* Identity */}
        <div className="thechallange">
          <h3 data-gsap>The Outcome</h3>

          <div className="paradiv">
            <p data-gsap>CA Nair now communicates <br /> with stronger authority, <br /> greater consistency, <br /> and a far more contemporary presence.</p>
            <p data-gsap>The brand evolved <br /> from appearing like a conventional accounting practice <br /> to feeling like a modern financial advisory partner.</p>

          </div>


        </div>

        <div className="scrilvideo">
          <div className="videocontainer" ref={videoScaleRef}>
                 <video
                        src={canair9}
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
            
          </div>
        </div>

          <div className="soupimgsgal mb-5">
            <div className="row">
              <div className="col-lg-5">
                <figure data-gsap>
                  <img src={canair10} alt="" />
                </figure>
              </div>

               
              <div className="col-lg-7">
                <figure data-gsap>
                  <img src={canair11} alt="" />
                </figure>
              </div>



            </div>
          </div>

       


        {/* Identity */}
        <div className="thechallange">
          <h3 data-gsap>Precis</h3>

          <div className="paradiv">
            <p data-gsap>Professional service brands <br />
             are built on perception long before interaction.</p>
            <p data-gsap>Every decision across the system <br />
             was designed to strengthen trust, <br />
             reduce friction, <br />
             and create a clearer sense of confidence.</p>
            <p data-gsap>The result is a brand presence <br />
             that feels measured, <br />
             credible, <br />
             and quietly authoritative.</p>

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

export default CaNairDetails;