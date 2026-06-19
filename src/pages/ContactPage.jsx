import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import Contact from '../components/contact/Contact'
import PageTitle from '../components/PageTitle'

const ContactPage = () => {
  return (
    <div>
      <PageTitle title="Contact" />
             <Breadcrumb breadcrumb={[
      {breadtitle:"Home", link:"/"},
      // {breadtitle:"portfolio", link:"/portfolio" },
      {breadtitle:"Contact", link:"" },
      ]}/>
         <Contact/>

    </div>
  )
}

export default ContactPage