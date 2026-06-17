import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import rbs from "../../assets/soup/rbs.webp"
import rbsvideo from "../../assets/soup/rbsvideo.mp4"
import rbhvideo1 from "../../assets/soup/rbhvideo1.mp4"
import rbs1 from "../../assets/soup/rbs1.webp"
import rbs2 from "../../assets/soup/rbs2.webp"
import rbs3 from "../../assets/soup/rbs3.webp"
import rbs4 from "../../assets/soup/rbs4.webp"
import rbs5 from "../../assets/soup/rbs5.webp"
import rbs6 from "../../assets/soup/rbs6.webp"
import rbs7 from "../../assets/soup/rbs7.webp"
import rbs8 from "../../assets/soup/rbs8.webp"
import rbs9 from "../../assets/soup/rbs9.webp"
import rbs10 from "../../assets/soup/rbs10.webp"
import rbs11 from "../../assets/soup/rbs11.webp"

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

const RBSdetails = () => {
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
          fontSize: window.innerWidth <= 1024 ? "54px" : "130px",
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
          <img src={rbs} alt="" />
        </figure>

        <h3 data-gsap className="dettext">
         A legacy industrial brand rebuilt with <br /> greater clarity, structure, and modern relevance.
        </h3>

        <div className="bigtextcontainer rbh" ref={sectionRef}>
          <h2 ref={textRef}>Rekha Bright Steels</h2>
        </div>

        <div data-gsap className="subloader">
          <video
            src={rbsvideo}
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
            <p data-gsap> Despite decades of credibility, <br /> the brand presence no longer reflected <br /> the scale and precision of the business.</p>
            <p data-gsap> The communication felt dated. <br /> The positioning lacked distinction. <br /> And their custom manufacturing expertise <br /> was getting lost in a commoditized market.</p>
          
          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={rbs1} alt="" />
                </figure>
              </div>

              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={rbs2} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={rbs3} alt="" />
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
We approached the brand <br /> through the lens of industrial trust.
            </p>
            <p data-gsap> 
Not flashy marketing. <br /> But clarity, structure, and confidence.
            </p>
            <p data-gsap> 
From the website system <br /> to the visual language and communication  <br /> every touchpoint was redesigned <br /> to feel dependable, modern, and precise.
            </p>


          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={rbs4} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={rbs5} alt="" />
                </figure>
              </div>
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={rbs6} alt="" />
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
            The resulting identity balances <br /> industrial robustness with modern presentation.
            </p>
            <p data-gsap> 
            Structured layouts. <br /> Confident typography. <br /> Controlled visual language.
            </p>
            <p data-gsap> 
            A system designed to communicate capability <br /> without unnecessary complexity.
            </p>

        
          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={rbs7} alt="" />
                </figure>
              </div>

              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={rbs8} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={rbs9} alt="" />
                </figure>
              </div>



            </div>
          </div>
        </div>

        {/* Identity */}
        <div className="thechallange">
          <h3 data-gsap>The Outcome</h3>

          <div className="paradiv">
            <p data-gsap> Rekha Bright Steels now communicates <br /> with greater authority, <br /> clearer positioning, <br /> and stronger consistency across platforms.</p>
            <p data-gsap> The business evolved from appearing <br /> like a conventional supplier <br /> to feeling like a long-term industrial partner.</p>



          </div>

          {/* <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={wefanss12} alt="" />
                </figure>
              </div>




            </div>
          </div> */}


        </div>

        <div className="scrilvideo">
          <div className="videocontainer" ref={videoScaleRef}>
                 <video
                        src={rbhvideo1}
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
                  <img src={rbs10} alt="" />
                </figure>
              </div>
              <div className="col-lg-7">
                <figure data-gsap>
                  <img src={rbs11} alt="" />
                </figure>
              </div>




            </div>
          </div>

       


        {/* Identity */}
        <div className="thechallange">
          <h3 data-gsap>Precis</h3>

          <div className="paradiv">
            <p data-gsap> The goal was never to redesign the legacy, <br /> but to present it with greater clarity.</p>
            <p data-gsap> Every decision focused on strengthening trust, <br /> modernizing perception, <br /> and reflecting the discipline <br /> the business was already built on.</p>
            <p data-gsap> The result is a brand presence <br /> that feels experienced, <br /> grounded, <br /> and future-ready.</p>

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

export default RBSdetails;