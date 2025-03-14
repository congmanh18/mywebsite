import React, { useState, useEffect, useContext } from "react";
import "./Blog.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import { blogSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Blogs() {
  const { isDark } = useContext(StyleContext);
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (blogSection.display) {
      fetch("https://blogcongmanh18.vercel.app/page-data/index/page-data.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          const fetchedBlogs = data.result.data.allMarkdownRemark.nodes.map((post) => ({
            title: post.frontmatter.title,
            url: `https://blogcongmanh18.vercel.app${post.fields.slug}`,
            description: post.frontmatter.description || post.excerpt,
            date: post.frontmatter.date,
          }));
          setBlogs(fetchedBlogs);
        })
        .catch((error) => {
          console.error("Lỗi khi fetch dữ liệu blog:", error);
          setError(true);
        });
    }
  }, []);

  if (!blogSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="blogs">
        <div className="blog-header">
          <h1 className="blog-header-text">{blogSection.title}</h1>
          <p className={isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"}>
            {blogSection.subtitle}
          </p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {error ? (
              <p>Lỗi khi tải blog, vui lòng thử lại sau.</p>
            ) : blogs.length > 0 ? (
              blogs.map((blog, i) => (
                <BlogCard key={i} isDark={isDark} blog={blog} />
              ))
            ) : (
              <p>Đang tải bài viết...</p>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
