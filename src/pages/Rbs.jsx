import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import RBSdetails from '../components/portfolio/RBSdetails'
import PageTitle from '../components/PageTitle'

const Rbs = () => {
  return (
    <>
    <PageTitle title="Rekha Bright Steel" />
     <Breadcrumb breadcrumb={["Home","Protfolio","Rekha Bright Steel"]}/>
     <RBSdetails/>
    </>
  )
}

export default Rbs