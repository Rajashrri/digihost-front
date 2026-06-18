import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import LomaDetails from '../components/portfolio/LomaDetails'
import PageTitle from '../components/PageTitle'

const Loma = () => {
  return (
    <div>
      <PageTitle title="Loma Dental" />
        <Breadcrumb breadcrumb={["Home","Protfolio","Loma Dental"]}/>
        <LomaDetails/>
    </div>
  )
}

export default Loma