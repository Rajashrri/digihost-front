import React from 'react'
import banner from "./../../assets/home/banner.png"

const HomeBanner = () => {
  return (
    <div className='homebanner'>
      <figure>
        <img src={banner} alt="" />
      </figure>
      <div className="bannercontent">
        <div className="container">
          <div className="bannerbody">
            <h1 data-gsap>
              Brand <br />
              Soul <br />
              Found
            </h1>
            <div className='btncontainer' data-gsap>
              <a href="/#homecontact" className='btn1'>Connect for Work</a>
              <a href="/#homecontact" className='btn2'>Book a Call</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner