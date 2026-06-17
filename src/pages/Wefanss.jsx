import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import WefanssDetails from '../components/portfolio/WefanssDetails'

const Wefanss = () => {
  return (
    <>
        <Breadcrumb breadcrumb={["Home","Protfolio","Wefanss"]}/>
        <WefanssDetails/>
    </>
  )
}

export default Wefanss