import React from 'react'
import AkirhsDetails from '../components/portfolio/AkirhsDetails'
import Breadcrumb from '../components/common/Breadcrumb'
import PageTitle from '../components/PageTitle'

const Akirhs = () => {
  return (
    <div>
       <PageTitle title="Akirhs" />
           <Breadcrumb breadcrumb={[
      {breadtitle:"Home", link:"/"},
      {breadtitle:"portfolio", link:"/portfolio" },
      {breadtitle:"Akirhs", link:"" },
      ]}/>
        {/* <Breadcrumb breadcrumb={["Home","portfolio","Akirhs"]}/> */}
      <AkirhsDetails/>
    </div>
  )
}

export default Akirhs