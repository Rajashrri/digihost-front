import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import wefanss from "../../assets/soup/wefanss.webp"
// import lomavideo from "../../assets/soup/lomavideo.mp4"
import wefanss1 from "../../assets/soup/wefanss1.webp"
import wefanss2 from "../../assets/soup/wefanss2.webp"
import wefanss3 from "../../assets/soup/wefanss3.webp"
import wefanss4 from "../../assets/soup/wefanss4.webp"
import wefanss5 from "../../assets/soup/wefanss5.webp"
import wefanss6 from "../../assets/soup/wefanss6.webp"
import wefanss7 from "../../assets/soup/wefanss7.webp"
import wefanss8 from "../../assets/soup/wefanss8.webp"
import wefanss9 from "../../assets/soup/wefanss9.webp"
import wefanss10 from "../../assets/soup/wefanss10.webp"
import wefanss11 from "../../assets/soup/wefanss11.webp"
import wefanss12 from "../../assets/soup/wefanss12.webp"

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

const WefanssDetails = () => {
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
          <img src={wefanss} alt="" />
        </figure>

        <h3 data-gsap className="dettext">
          A youth-driven identity designed around <br /> energy, culture, and digital engagement.
        </h3>

        <div className="bigtextcontainer" ref={sectionRef}>
          <h2 ref={textRef}>Wefanss</h2>
        </div>

        {/* <div className="subloader">
          <video
            src={lomavideo}
            autoPlay
            muted
            loop
            playsInline
          />
        </div> */}

        <div className="soupimgsgal mb-5 mt-0">
          <div className="row">
            <div className="col-lg-12">
              <figure data-gsap>
                <img src={wefanss1} alt="" />
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
                <img src={wefanss2} alt="" />
              </figure>
            </div>
            <div className="col-lg-6">
              <figure data-gsap>
                <img src={wefanss3} alt="" />
              </figure>
            </div>
          </div>
        </div>

        {/* Challenge */}
        <div className="thechallange">
          <h3 data-gsap>The Challenge</h3>

          <div className="paradiv">
            <p data-gsap>
              We Fanss needed a presence <br /> that could immediately connect <br /> with a younger, digitally native audience.
            </p>
            <p data-gsap>
              The communication lacked consistency. <br /> The identity felt fragmented. <br /> And the brand personality <br /> was not translating effectively across platforms.
            </p>
            <p data-gsap>
              The challenge was to create a system <br /> that felt expressive, <br /> recognizable, <br /> and culturally relevant.
            </p>


          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={wefanss4} alt="" />
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
                  <img src={wefanss5} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={wefanss6} alt="" />
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
              We approached the brand <br /> through the rhythm of online communities.
            </p>
            <p data-gsap>
              Fast-moving. <br /> Interactive. <br /> Emotionally driven.
            </p>
            <p data-gsap>
              From the identity system <br /> to social communication, <br /> visual storytelling, <br /> and digital execution  <br /> every touchpoint was designed <br /> to feel energetic, social, and highly engaging.
            </p>


          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={wefanss7} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={wefanss8} alt="" />
                </figure>
              </div>
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={wefanss9} alt="" />
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
              The resulting identity balances <br /> boldness with structure.
            </p>

            <p data-gsap>
              Expressive visuals. <br /> Dynamic layouts. <br /> Youth-centric communication. <br /> High-energy digital language.
            </p>

            <p data-gsap>
              A system designed to feel vibrant <br /> without becoming chaotic.
            </p>
          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={wefanss10} alt="" />
                </figure>
              </div>

              <div className="col-lg-6">
                <figure data-gsap>
                  <img src={wefanss11} alt="" />
                </figure>
              </div>



            </div>
          </div>
        </div>

        {/* Identity */}
        <div className="thechallange">
          <h3 data-gsap>The Outcome</h3>

          <div className="paradiv">
            <p data-gsap>We Fanss now communicates<br /> with greater consistency,<br /> stronger audience recall,<br /> and a far more engaging digital presence.</p>
            <p data-gsap>The brand evolved<br /> from appearing like a content page<br /> to feeling like a digital-first community brand.</p>



          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure data-gsap>
                  <img src={wefanss12} alt="" />
                </figure>
              </div>




            </div>
          </div>


        </div>

        {/* <div className="scrilvideo">
          <div className="videocontainer" ref={videoScaleRef}>
                 <video
                        src={loma9}
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
            
          </div>
        </div> */}

       


        {/* Identity */}
        <div className="thechallange">
          <h3 data-gsap>Precis</h3>

          <div className="paradiv">
            <p data-gsap>Youth brands survive on relevance, <br /> but they grow through consistency.</p>
            <p data-gsap>Every decision across the system <br /> was designed to strengthen engagement, <br /> improve recognition, <br /> and create a more connected audience experience.</p>
            <p data-gsap>The result is a brand presence <br /> that feels current, <br /> interactive, <br /> and culturally aware.</p>

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

export default WefanssDetails;