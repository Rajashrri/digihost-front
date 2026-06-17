import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import LomaDetails from '../components/portfolio/LomaDetails'

const Loma = () => {
  return (
    <div>
        <Breadcrumb breadcrumb={["Home","Protfolio","Loma Dental"]}/>
        <LomaDetails/>
    </div>
  )
}

export default Loma