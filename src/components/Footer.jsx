import React from 'react'
import footerlog from "./../assets/footer.svg"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerconainer">
            <h2 data-gsap>Craftiing viisual storiies that capture the essence of your brand.</h2>

            <ul className='footermenu'>
                <li data-gsap><Link to="/">HOME</Link></li>
                <li data-gsap><Link to="/about">About</Link></li>
                <li data-gsap><Link to="/portfolio">Portfolio</Link></li>
                <li data-gsap><Link to="/blog">Blogs</Link></li>
                <li data-gsap><Link to="/career">Career</Link></li>
                <li data-gsap><Link to="/contact">Contact</Link></li>
            </ul>

            <div className="policy">
                <ul>
                    <li data-gsap><Link to="/privacy-policy">Privacy Policy</Link></li>
                    <li data-gsap><Link to="/terms-conditions">Terms & Conditions</Link></li>
                </ul>
                <ul>
                    <li data-gsap><a target='_blank' href='https://www.instagram.com/diigiihost_in/'>Instagram</a></li>
                    <li data-gsap><a target='_blank' href='https://www.facebook.com/DiigiiHost.In/'>Facebook</a></li>
                    <li data-gsap><a target='_blank' href='https://www.linkedin.com/company/diigiihost'>Linkedin</a></li>
                    <li data-gsap><a target='_blank' href='https://x.com/DiigiiHost_In'>Twitter</a></li>
                </ul>
            </div>

        </div>
        <hr />
        <p className="copyright">Copyright © 2026. All Rights Reserved. Powered By : <a href="https://www.digihost.in/">DIIGIIHOST</a></p>
        <div className="footerlogo" >
            <img src={footerlog}  alt="" />

        </div>

    </div>
  )
}

export default Footer

