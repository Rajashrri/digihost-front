import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import Details from '../components/soupherb/Details'
import PageTitle from '../components/PageTitle'

const SoupHerb = () => {
  return (
    <>
    <PageTitle title="Soupherb" />
          <Breadcrumb breadcrumb={[
      {breadtitle:"Home", link:"/"},
      {breadtitle:"portfolio", link:"/portfolio" },
      {breadtitle:"Soupherb", link:"" },
      ]}/>
        <Details/>
    </>
  )
}

export default SoupHerb