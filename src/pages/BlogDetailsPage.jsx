import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Breadcrumb from "../components/common/Breadcrumb";
import BlogDetails from "../components/blog/BlogDetails";

import { getBlogDetailsApi } from "../utils/frontApi";
import PageTitle from "../components/PageTitle";

const BlogDetailsPage = () => {
  const { slug } = useParams();

  const [blogTitle, setBlogTitle] = useState("Blog Details");

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    try {
      const response = await getBlogDetailsApi(slug);

      if (response.data.success) {
        setBlogTitle(response.data.data.title);

        document.title = `${response.data.data.title} | Blog Details | DiigiiHost`;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <PageTitle title={blogTitle}/>
      <Breadcrumb
        breadcrumb={[
          "Home",
          "Blog",
          blogTitle.length > 40
            ? blogTitle.substring(0, 40) + "..."
            : blogTitle,
        ]}
      />

      <BlogDetails />
    </>
  );
};

export default BlogDetailsPage;