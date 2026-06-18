import React from 'react'
import HomeBanner from '../components/home/HomeBanner'
import SmoothSlider from '../components/home/SmoothSlider'
import HomeAbout from '../components/home/HomeAbout'
import HoneContact from '../components/home/HoneContact'
import PageTitle from '../components/PageTitle'

const HomePage = () => {
  return (
    <>
    <PageTitle title="Home" />
        <HomeBanner/>
        <HomeAbout/>
        <SmoothSlider/>
        <HoneContact/>
    </>
  )
}

export default HomePage