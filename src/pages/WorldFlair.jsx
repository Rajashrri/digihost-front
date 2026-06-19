import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import WorldFlairDetails from '../components/portfolio/WorldFlairDetails'
import PageTitle from '../components/PageTitle'

const WorldFlair = () => {
  return (
    <>
    <PageTitle title="WorldFlair" />
         <Breadcrumb breadcrumb={[
      {breadtitle:"Home", link:"/"},
      {breadtitle:"portfolio", link:"/portfolio" },
      {breadtitle:"WorldFlair", link:"" },
      ]}/>
      <WorldFlairDetails/>
    </>
  )
}

export default WorldFlair