import React from 'react'
import img1 from "../../assets/career/1.png"
import img2 from "../../assets/career/2.png"
import img3 from "../../assets/career/3.png"
import img4 from "../../assets/career/4.png"

const YouWillBe = () => {
  return (
    <div className='youwillbe'>
        <div className="container">
            <h2 data-gsap>You will be exposed to:</h2>
            <div className="youwill">
                <div className="willbox" data-gsap>
                    <figure>
                        <img src={img1} alt="" />
                    </figure>
                    <h3>Performance reviews based on clarity and outcomes</h3>
                </div>
                <div className="willbox" data-gsap>
                    <figure>
                        <img src={img2} alt="" />
                    </figure>
                    <h3>Real business decisions</h3>
                </div>
                <div className="willbox" data-gsap>
                    <h3>Founder-level conversations</h3>
                    <figure>
                        <img src={img4} alt="" />
                    </figure>
                </div>
                <div className="willbox" data-gsap>
                    <h3>Strategy frameworks</h3>
                    <figure>
                        <img src={img3} alt="" />
                    </figure>
                </div>

            </div>

        </div>
    </div>
  )
}

export default YouWillBe