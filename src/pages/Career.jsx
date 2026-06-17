import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import YouWillBe from '../components/career/YouWillBe'
import CareerCta from '../components/career/CareerCta'
import CurrentOpenings from '../components/career/CurrentOpenings'
import HiringProcess from '../components/career/HiringProcess'
import CultureSection from '../components/career/CultureSection'

const Career = () => {
  return (
    <>
     <Breadcrumb breadcrumb={["Home","Career"]}/>
     <CultureSection/>
     <YouWillBe/>
     <HiringProcess/>
     <CurrentOpenings/>
     <CareerCta/>
    </>
  )
}

export default Career