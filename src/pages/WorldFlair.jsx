import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import WorldFlairDetails from '../components/portfolio/WorldFlairDetails'
import PageTitle from '../components/PageTitle'

const WorldFlair = () => {
  return (
    <>
    <PageTitle title="WorldFlair" />
      <Breadcrumb breadcrumb={["Home","Protfolio","WorldFlair"]}/>
      <WorldFlairDetails/>
    </>
  )
}

export default WorldFlair