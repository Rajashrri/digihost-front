import React, { useState } from 'react'
import Popupform from './Popupform'

const CurrentOpenings = () => {
     const [showPopup, setShowPopup] = useState(false);
  return (<>
  <div className="container">

    <div className='opnings'>
        {/* <h2 className="heading">Current Openings</h2>

        <div className="current">
            <a href="#!" data-gsap onClick={() => setShowPopup(true)}>
                <div>
                    <div className='link1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M17 17V7H7M17 7L7 17" stroke="#B1EBE0" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className='text1'>
                        <h2>UI/UX Designer</h2>
                        <p>Must understand behavioral design — not just aesthetics</p>
                    </div>
                </div>
            </a>
            <a href="#!" data-gsap onClick={() => setShowPopup(true)}>
                <div>
                    <div className='link1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M17 17V7H7M17 7L7 17" stroke="#B1EBE0" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className='text1'>
                        <h2>Full Stack Developer (CI / React / Node)</h2>
                        <p>Clean architecture. Structured thinking. Scalability mindset.</p>
                    </div>
                </div>
            </a>
            <a href="#!" data-gsap onClick={() => setShowPopup(true)}>
                <div>
                    <div className='link1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M17 17V7H7M17 7L7 17" stroke="#B1EBE0" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className='text1'>
                        <h2>Content Strategist</h2>
                        <p>Understands brand voice, psychology, and performance metrics.</p>
                    </div>
                </div>
            </a>

        </div> */}

        <h2 className="heading before mt-0" data-gsap>Before You Apply</h2>
        <h3>Ask yourself:</h3>
        <h4>Do I want </h4>

        <div className='iwant' data-gsap>
            <div>

                <h2>tasks</h2>
                <h2>noise</h2>
                <h2>comfort </h2>
            </div>
            <p>Or</p>
            <div className='white' data-gsap>

                <h2>growth</h2>
                <h2>ownership</h2>
                <h2>clarity</h2>
            </div>

        </div>
        <h2 className="heading before" data-gsap>If clarity excites you, <br />
            we’re aligned.</h2>



    </div>
  </div>

    <Popupform
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />
    </>
  ) 
}

export default CurrentOpenings