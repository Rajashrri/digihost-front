import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import BlogList from '../components/blog/BlogList'
import PageTitle from '../components/PageTitle'

const Blog = () => {
  return (
    <div>
        <PageTitle title="Blog" />
        <Breadcrumb breadcrumb={["Home","blog"]}/>
        <BlogList/>
        
    </div>
  )
}

export default Blog