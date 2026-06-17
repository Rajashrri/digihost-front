import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import soulVideo from "../../assets/home/616aa4f43e35046810fa4937de6485b437ce34dd.gif"
import science from "../../assets/home/science.gif"
import scale from "../../assets/home/scale.gif"

const HomeAbout = () => {

      const textRef = useRef(null);

  const headingText = ` At DiigiiHost, we exist to help brands fiind theiir soul, honor theiir truth, and connect wiith theiir audiience iin ways that last.`;

  useEffect(() => {
    const words = headingText.split(" ");

  textRef.current.innerHTML =
  
  words
    .map(
      (word) =>
        `<span class="word"><span class="inner-word">${word}</span></span>`
    )
    .join(" ");

    const allWords = textRef.current.querySelectorAll(".inner-word");

    gsap.set(allWords, {
    //   opacity: 0.15,
      color:"#1A766D"
    });

    gsap.to(allWords, {
    //   opacity: 1,
     color:"#B1EBE0",
      stagger: 0.15,
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 50%",
        end: "30% 30%",
        scrub: true,
      },
    });
  }, []);
  return (
    <div className='homeabout'>
        <div className="container">
            <div className='textscroll'>
                
        <h2 ref={textRef} data-gsap>At DiigiiHost, we exist to help brands fiind theiir soul, honor theiir truth, and connect wiith theiir audiience iin ways that last.</h2>
            </div>

        <div className="soulcards">
            <div className="row">
                <div className="col-lg-4" data-gsap>
                    <div className="card1 soul">
                        <div className="conten1">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 6C25.3333 11.3333 28 15.6667 32 19C36 22.3333 38 26 38 30C38 33.713 36.525 37.274 33.8995 39.8995C31.274 42.525 27.713 44 24 44C20.287 44 16.726 42.525 14.1005 39.8995C11.475 37.274 10 33.713 10 30C10 27.8363 10.7018 25.731 12 24C12 25.3261 12.5268 26.5979 13.4645 27.5355C14.4021 28.4732 15.6739 29 17 29C18.3261 29 19.5979 28.4732 20.5355 27.5355C21.4732 26.5979 22 25.3261 22 24C22 20 19 18 19 14C19 11.3333 20.6667 8.66667 24 6Z" stroke="#B1EBE0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h2>Soul</h2>
                        <p>A brand's soul is discovered in its authentic story and values, resonating deeply with its audience. It's the emotional connection that transforms a simple logo into a beloved identity.</p>
                        </div>
                        <figure>
                             <img src={soulVideo} alt="Soul Animation" className="w-100" />
                        </figure>
                    </div>
                </div>
                <div className="col-lg-4" data-gsap>
                    <div className="card1 soul">
                        <div className="conten1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <path d="M23.9998 26C25.1043 26 25.9998 25.1046 25.9998 24C25.9998 22.8954 25.1043 22 23.9998 22C22.8952 22 21.9998 22.8954 21.9998 24C21.9998 25.1046 22.8952 26 23.9998 26Z" stroke="#B1EBE0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M40.3998 40.4C44.4798 36.34 40.4398 25.68 31.3998 16.6C22.3198 7.56002 11.6598 3.52002 7.59977 7.60002C3.51977 11.66 7.55977 22.32 16.5998 31.4C25.6798 40.44 36.3398 44.48 40.3998 40.4Z" stroke="#B1EBE0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M31.3998 31.4C40.4398 22.32 44.4798 11.66 40.3998 7.60002C36.3398 3.52002 25.6798 7.56002 16.5998 16.6C7.55977 25.68 3.51977 36.34 7.59977 40.4C11.6598 44.48 22.3198 40.44 31.3998 31.4Z" stroke="#B1EBE0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        
                        <h2>Science</h2>
                        <p>A brand's soul is discovered in its authentic story and values, resonating deeply with its audience. It's the emotional connection that transforms a simple logo into a beloved identity.</p>
                        </div>
                        <figure>
                             <img src={science} alt="Soul Animation" className="w-100" />
                        </figure>
                    </div>
                </div>
                <div className="col-lg-4" data-gsap>
                    <div className="card1 soul">
                        <div className="conten1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <path d="M24 6H10C8.93913 6 7.92172 6.42143 7.17157 7.17157C6.42143 7.92172 6 8.93913 6 10V38C6 39.0609 6.42143 40.0783 7.17157 40.8284C7.92172 41.5786 8.93913 42 10 42H38C39.0609 42 40.0783 41.5786 40.8284 40.8284C41.5786 40.0783 42 39.0609 42 38V24M28 30H18M18 30V20M18 30L42 6M32 6H42M42 6V16" stroke="#B1EBE0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        <h2>Scale</h2>
                        <p>A brand's soul is discovered in its authentic story and values, resonating deeply with its audience. It's the emotional connection that transforms a simple logo into a beloved identity.</p>
                        </div>
                        <figure>
                             <img src={scale} alt="Soul Animation" className="w-100" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>

        <h3 data-gsap>Design is not decoration it’s communication.</h3>
        </div>
            

    </div>
  )
}

export default HomeAbout