import React from 'react'
import VerteacalBlendzDetails from '../components/portfolio/VerteacalBlendzDetails'
import Breadcrumb from '../components/common/Breadcrumb'
import PageTitle from '../components/PageTitle'

const VerteacalBlendz = () => {
  return (
    <div>
      <PageTitle title="Verteacal Blendz" />
        <Breadcrumb breadcrumb={["Home","Protfolio","Verteacal Blendz"]}/>
        <VerteacalBlendzDetails/>
    </div>
  )
}

export default VerteacalBlendz