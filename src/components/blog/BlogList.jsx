import React, { useEffect, useState } from "react";
import { getBlogsApi, getBlogCategoriesApi } from "../../utils/frontApi";
import img1 from "../../assets/blog/blog- (1).png";
import img2 from "../../assets/blog/blog- (2).png";
import img3 from "../../assets/blog/blog- (3).png";
import img4 from "../../assets/blog/blog- (4).png";
import img5 from "../../assets/blog/blog- (5).png";
import img6 from "../../assets/blog/blog- (6).png";
import img7 from "../../assets/blog/blog- (7).png";
import img8 from "../../assets/blog/blog- (8).png";
import img9 from "../../assets/blog/blog- (9).png";
import img10 from "../../assets/blog/blog- (10).png";
import img11 from "../../assets/blog/blog- (11).png";
import img12 from "../../assets/blog/blog- (12).png";
import img13 from "../../assets/blog/blog- (13).png";

const BlogList = () => {
  const [active, setActive] = useState("All");
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchBlogs();

      document.title = "Blogs | DIIGIIHOST";

    fetchCategories();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await getBlogsApi();

      if (response.data.success) {
        setBlogs(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getBlogCategoriesApi();

      if (response.data.success) {
        setCategories(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filteredBlogs =
    active === "All"
      ? blogs
      : blogs.filter((item) => item.categoryId?.categoryName === active);
  return (
    <div className="bloglist">
      <div className="container">
        <div className="blog-filter">
          <a
            data-gsap
            className={active === "All" ? "btn1" : "btn2"}
            onClick={() => setActive("All")}
          >
            All
          </a>

          {categories.map((item) => (
            <a
              data-gsap
              key={item._id}
              className={active === item.categoryName ? "btn1" : "btn2"}
              onClick={() => setActive(item.categoryName)}
            >
              {item.categoryName}
            </a>
          ))}
        </div>

        <div className="blog-grid">
          {filteredBlogs.map((item, index) => (
            <a
              href={`/blog/${item.slug}`}
              data-gsap
              key={item._id}
              className={`blog-card ${index === 0 ? "large-card" : ""}`}
            >
              <span className="blog-tag">{item.categoryId?.categoryName}</span>

              <div className="blog-img">
                <img
                  src={`${import.meta.env.VITE_API_BASE_URL}/blog/${item.featuredImage}`}
                  alt={item.title}
                />
              </div>

              <p className="blog-date">
                Published On :{" "}
                {new Date(item.date || item.createdAt).toLocaleDateString(
                  "en-US",
                  {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  },
                )}
              </p>
              <h3>{item.title}</h3>

              <p>{item.shortDescription}</p>

              <a href={`/blog/${item.slug}`} className="btn2">
                Read Blog
              </a>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
