import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import Contact from '../components/contact/Contact'

const ContactPage = () => {
  return (
    <div>
         <Breadcrumb breadcrumb={["Home","Contact",]}/>
         <Contact/>

    </div>
  )
}

export default ContactPage