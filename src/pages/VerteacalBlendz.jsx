import React from 'react'
import VerteacalBlendzDetails from '../components/portfolio/VerteacalBlendzDetails'
import Breadcrumb from '../components/common/Breadcrumb'

const VerteacalBlendz = () => {
  return (
    <div>
        <Breadcrumb breadcrumb={["Home","Protfolio","Verteacal Blendz"]}/>
        <VerteacalBlendzDetails/>
    </div>
  )
}

export default VerteacalBlendz