import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import LanovaDetails from '../components/portfolio/LanovaDetails'

const Lanova = () => {
  return (
    <div>
        <Breadcrumb breadcrumb={["Home","Protfolio","La Nova"]}/>
        <LanovaDetails/>
    </div>
  )
}

export default Lanova