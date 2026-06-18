import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import DrGaikwadDetails from '../components/portfolio/DrGaikwadDetails'
import PageTitle from '../components/PageTitle'

const DrGaikwad = () => {
  return (
    <>
    <PageTitle title="Dr Gaikwad" />
     <Breadcrumb breadcrumb={["Home","Protfolio","Dr Gaikwad"]}/>
     <DrGaikwadDetails/>
    
    </>
  )
}

export default DrGaikwad