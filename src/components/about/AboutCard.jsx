import React from 'react'

const AboutCard = () => {
  return (
    <div className='abcard'>
        <h2 data-gsap>The way we think influences the way we build.</h2>
        <p data-gsap>These principles shape every brand, system, and experience we create.</p>
        <div className="row">
             <div className="col-lg-4" data-gsap>
                <div className="card11">
                    <h3>Clarity Over Complexity</h3>
                    <p>We simplify what businesses are trying to say, so customers instantly understand why they matter.</p>
                </div>
             </div>
             <div className="col-lg-4" data-gsap>
                <div className="card11">
                    <h3>Craft with Intention</h3>
                    <p>Every interaction, interface, visual element, and message is designed to feel consistent, thoughtful, and purposeful.</p>
                </div>
             </div>
             <div className="col-lg-4" data-gsap>
                <div className="card11">
                    <h3>Human-Centered Thinking</h3>
                    <p>Behind every business decision is a human emotion — trust, ambition, fear, pride, uncertainty. We build with that reality in mind.</p>
                </div>
             </div>

        </div>
    </div>
  )
}

export default AboutCard