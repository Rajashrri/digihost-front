import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import BlogList from '../components/blog/BlogList'
import PageTitle from '../components/PageTitle'

const Blog = () => {
  return (
    <div>
        <PageTitle title="Blog" />
           <Breadcrumb breadcrumb={[
      {breadtitle:"Home", link:"/"},
      {breadtitle:"Blog", link:"/blog" },
      // {breadtitle:"Akirhs", link:"" },
      ]}/>
        <BlogList/>
        
    </div>
  )
}

export default Blog