import React from 'react'
import CaNairDetails from '../components/portfolio/CaNairDetails'
import Breadcrumb from '../components/common/Breadcrumb'
import PageTitle from '../components/PageTitle'

const CaNair = () => {
  return (
    <div>
       <PageTitle title="Ca Nair" />
             <Breadcrumb breadcrumb={[
      {breadtitle:"Home", link:"/"},
      {breadtitle:"portfolio", link:"/portfolio" },
      {breadtitle:"Ca Nair", link:"" },
      ]}/>
        <CaNairDetails/>
    </div>
  )
}

export default CaNair