import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import RBSdetails from '../components/portfolio/RBSdetails'

const Rbs = () => {
  return (
    <>
     <Breadcrumb breadcrumb={["Home","Protfolio","Rekha Bright Steel"]}/>
     <RBSdetails/>
    </>
  )
}

export default Rbs