import React from 'react'
import CaNairDetails from '../components/portfolio/CaNairDetails'
import Breadcrumb from '../components/common/Breadcrumb'
import PageTitle from '../components/PageTitle'

const CaNair = () => {
  return (
    <div>
       <PageTitle title="Ca Nair" />
         <Breadcrumb breadcrumb={["Home","Protfolio","Ca Nair"]}/>
        <CaNairDetails/>
    </div>
  )
}

export default CaNair