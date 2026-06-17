import React from 'react'
import HomeBanner from '../components/home/HomeBanner'
import SmoothSlider from '../components/home/SmoothSlider'
import HomeAbout from '../components/home/HomeAbout'
import HoneContact from '../components/home/HoneContact'

const HomePage = () => {
  return (
    <>
        <HomeBanner/>
        <HomeAbout/>
        <SmoothSlider/>
        <HoneContact/>
    </>
  )
}

export default HomePage