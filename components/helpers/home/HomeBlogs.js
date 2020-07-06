import React from "react";
import styles from "./Home.module.css";

const HomeBlogs = ({ blogs, brands }) => {
  console.log("blogs", blogs);
  console.log("brands", brands);
  const { featuredBlogs } = blogs;
  console.log("featuredBlogs", featuredBlogs);

  return (
    <section id="blog-brand" className={styles.blogBrand}>
      <div className="row d-lg-flex">
        <div className="col-12 col-md-6">
          <h5 className="text-center">FROM BLOG</h5>
          <div className="row mt-4">
            {featuredBlogs.map((blog) => (
              <div
                className={`${styles.blogBrandBlog} col-12 col-lg-6 blog`}
                key={blog.image}
              >
                <div className={`${styles.blogBrandCard} card border-0`}>
                  <img
                    className="img-fluid card-img-top w-100 d-block"
                    src={`static/img/${blog.image}`}
                  />
                  <div className="card-body p-0">
                    <h4
                      className={`${styles.blogBrandCardH4} card-title mb-0 mt-1`}
                    >
                      <a href="/">{blog.title}</a>
                      <br />
                    </h4>
                    <p className="card-text mb-0">
                      {blog.excerpt}...
                      <br />
                    </p>
                    <div
                      className={`${styles.blogBrandCardLink} d-flex justify-content-between align-items-center align-items-lg-center links`}
                    >
                      <a href="#">
                        <i className="fa fa-edit mr-1"></i>
                        <span>{blog.author}</span>
                      </a>
                      <a href="#">
                        <i className="fa fa-calendar mr-1"></i>
                        <span>{blog.numberOfDaysAgo} days ago</span>
                      </a>
                      <a href="#">
                        <i className="fa fa-comments mr-1"></i>
                        <span>{blog.numberOfComments} comments</span>
                      </a>
                    </div>
                  </div>
                  <div
                    className={`${styles.blogBrandCardDate} d-flex d-lg-flex align-items-center date text-center`}
                  >
                    <h3>
                      <span>{blog.day}</span>
                      <span
                        className={`${styles.blogBrandCardMonth} d-block month`}
                      >
                        {blog.month}
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 col-md-6">
          <h5 className="text-center">OUR BRANDS</h5>
          <div className="row d-flex justify-content-center mt-4">
            {brands.map((brand) => (
              <div
                key={brand.image}
                className={`${styles.blogBrandCompany} col-3 d-flex justify-content-center align-items-center company py-1 px-0`}
              >
                <img className="img-fluid" src={`static/img/${brand.image}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBlogs;
