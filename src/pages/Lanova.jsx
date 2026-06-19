import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import LanovaDetails from '../components/portfolio/LanovaDetails'
import PageTitle from '../components/PageTitle'

const Lanova = () => {
  return (
    <div>
      <PageTitle title="La Nova" />
              <Breadcrumb breadcrumb={[
      {breadtitle:"Home", link:"/"},
      {breadtitle:"portfolio", link:"/portfolio" },
      {breadtitle:"La Nova", link:"" },
      ]}/>
        <LanovaDetails/>
    </div>
  )
}

export default Lanova