import React from 'react'
import AkirhsDetails from '../components/portfolio/AkirhsDetails'
import Breadcrumb from '../components/common/Breadcrumb'

const Akirhs = () => {
  return (
    <div>
        <Breadcrumb breadcrumb={["Home","Protfolio","Akirhs"]}/>
      <AkirhsDetails/>
    </div>
  )
}

export default Akirhs