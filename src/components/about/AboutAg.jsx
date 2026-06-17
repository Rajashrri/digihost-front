import React from 'react'
import ag from "../../assets/about/ag.png"

const AboutAg = () => {
  return (
    <div className='aboutag'>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <figure data-gsap>
                        <img src={ag} alt="" />
                    </figure>
                </div>
                <div className="col-lg-8">
                    <div className="thoths">
                        <svg data-gsap width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="-0.25" y="0.25" width="27.5" height="63.5" rx="13.75" transform="matrix(-1 0 0 1 27.5 0)" stroke="#B1EBE0" stroke-width="0.5"/>
                        <rect x="36.25" y="0.25" width="27.5" height="63.5" rx="13.75" stroke="#B1EBE0" stroke-width="0.5"/>
                        </svg>

                        <p data-gsap><span class="space-block"></span><span class="space-block"></span>Attention can be bought. Trust has to be designed, experienced, and earned over time. We build for the second</p>

                        <h3 data-gsap>- Alkesh Gupta</h3>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AboutAg