import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import WefanssDetails from '../components/portfolio/WefanssDetails'
import PageTitle from '../components/PageTitle'

const Wefanss = () => {
  return (
    <>
    <PageTitle title="Wefanss" />
        <Breadcrumb breadcrumb={["Home","Protfolio","Wefanss"]}/>
        <WefanssDetails/>
    </>
  )
}

export default Wefanss