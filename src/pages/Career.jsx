import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import YouWillBe from '../components/career/YouWillBe'
import CareerCta from '../components/career/CareerCta'
import CurrentOpenings from '../components/career/CurrentOpenings'
import HiringProcess from '../components/career/HiringProcess'
import CultureSection from '../components/career/CultureSection'
import PageTitle from '../components/PageTitle'

const Career = () => {
  return (
    <>
    <PageTitle title="Career" />
        <Breadcrumb breadcrumb={[
      {breadtitle:"Home", link:"/"},
      // {breadtitle:"Protfolio", link:"/protfolio" },
      {breadtitle:"Career", link:"" },
      ]}/>
     <CultureSection/>
     <YouWillBe/>
     <HiringProcess/>
     <CurrentOpenings/>
     <CareerCta/>
    </>
  )
}

export default Career