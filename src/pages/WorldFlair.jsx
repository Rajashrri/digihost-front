import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import WorldFlairDetails from '../components/portfolio/WorldFlairDetails'

const WorldFlair = () => {
  return (
    <>
      <Breadcrumb breadcrumb={["Home","Protfolio","WorldFlair"]}/>
      <WorldFlairDetails/>
    </>
  )
}

export default WorldFlair