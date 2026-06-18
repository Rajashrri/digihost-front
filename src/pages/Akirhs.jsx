import React from 'react'
import AkirhsDetails from '../components/portfolio/AkirhsDetails'
import Breadcrumb from '../components/common/Breadcrumb'
import PageTitle from '../components/PageTitle'

const Akirhs = () => {
  return (
    <div>
       <PageTitle title="Akirhs" />
        <Breadcrumb breadcrumb={["Home","Protfolio","Akirhs"]}/>
      <AkirhsDetails/>
    </div>
  )
}

export default Akirhs