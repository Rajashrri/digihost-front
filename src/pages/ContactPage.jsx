import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import Contact from '../components/contact/Contact'
import PageTitle from '../components/PageTitle'

const ContactPage = () => {
  return (
    <div>
      <PageTitle title="Contact" />
         <Breadcrumb breadcrumb={["Home","Contact"]}/>
         <Contact/>

    </div>
  )
}

export default ContactPage