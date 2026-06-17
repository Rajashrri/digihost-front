import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import Details from '../components/soupherb/Details'

const SoupHerb = () => {
  return (
    <>
        <Breadcrumb breadcrumb={["Home","Protfolio","Soupherb"]}/>
        <Details/>
    </>
  )
}

export default SoupHerb