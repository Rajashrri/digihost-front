import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import logo from "./../assets/logo.svg"
import menu from "./../assets/svg/menu.svg"

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="menuwrap">
            <Link to="/" className="logo">
              <img src={logo} alt="" />
            </Link>

            <button
              className="menubtn"
              onClick={() => setOpenMenu(true)}
            >
              <img src={menu} alt="" />
            </button>
          </div>
        </div>
      </div>

      {/* Popup Menu */}
      <div className={`menu-popup ${openMenu ? "active" : ""}`}>
        <button
          className="close-btn"
          onClick={() => setOpenMenu(false)}
        >
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="36" y="11" width="12" height="36" rx="6" transform="rotate(45 36 11)" fill="#B1EBE0"/>
            <rect x="11" y="19.5147" width="12" height="36" rx="6" transform="rotate(-45 11 19.5147)" fill="#B1EBE0"/>
            </svg>

        </button>

        <div className="popbody">
            <div className="menu1 text-end">
                <ul>
                    <li  onClick={() => setOpenMenu(false)}><NavLink to="/">Home</NavLink></li>
                     <li  onClick={() => setOpenMenu(false)}><NavLink to="/about">About</NavLink></li>
                    <li  onClick={() => setOpenMenu(false)}><NavLink to="/portfolio">Portfolio</NavLink></li>
                    {/* <li  onClick={() => setOpenMenu(false)}><NavLink to="/services">Services</NavLink></li> */}
                </ul>
            </div>
            <div className="boflogo">
                <svg width="224" height="465" viewBox="0 0 224 465" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="99" height="464" rx="49.5" stroke="#1A766D"/>
            <rect x="124.5" y="0.5" width="99" height="464" rx="49.5" stroke="#1A766D"/>
            </svg>
            </div>
            <div className="menu1 text-start">
                  <ul>
                   
                    <li  onClick={() => setOpenMenu(false)}><NavLink to="/blog">Blog</NavLink></li>
                    <li  onClick={() => setOpenMenu(false)}><NavLink to="/career">Career</NavLink></li>
                    <li  onClick={() => setOpenMenu(false)}><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Header