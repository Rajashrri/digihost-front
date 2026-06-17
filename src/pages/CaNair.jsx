import React from 'react'
import CaNairDetails from '../components/portfolio/CaNairDetails'
import Breadcrumb from '../components/common/Breadcrumb'

const CaNair = () => {
  return (
    <div>
         <Breadcrumb breadcrumb={["Home","Protfolio","Ca Nair"]}/>
        <CaNairDetails/>
    </div>
  )
}

export default CaNair