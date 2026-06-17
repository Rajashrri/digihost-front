import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import DrGaikwadDetails from '../components/portfolio/DrGaikwadDetails'

const DrGaikwad = () => {
  return (
    <>
     <Breadcrumb breadcrumb={["Home","Protfolio","Dr Gaikwad"]}/>
     <DrGaikwadDetails/>
    
    </>
  )
}

export default DrGaikwad