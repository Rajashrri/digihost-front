import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import BlogList from '../components/blog/BlogList'

const Blog = () => {
  return (
    <div>
        <Breadcrumb breadcrumb={["Home","blog"]}/>
        <BlogList/>
        
    </div>
  )
}

export default Blog