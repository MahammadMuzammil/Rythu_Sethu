import React from "react";
import "./BlogSection.css";
import blogImage1 from "../../assets/blog-image1.jpg";
import blogImage2 from "../../assets/blog-image2.jpg";
import blogImage3 from "../../assets/blog-image3.jpg";
import blogImage4 from "../../assets/blog-image4.jpg";

function BlogSection() {
  return (
    <div className="blog-section" data-aos="fade-up">
      <h2 className="blog-title">Blogs</h2>
      <div className="blogs-container">
        <div className="featured-blog">
          <img
            src={blogImage1}
            alt="Featured Blog"
            className="featured-image"
          />
          <div className="featured-content">
            <p className="read-time">5 Min read</p>
            <h3>Introducing RythuSetu: Empowering Farmers</h3>
            <p>
              Empowering farmers with direct connections and smart tools:
              Introducing RythuSetu.
            </p>
            <div className="author-info">
              <img
                src="https://via.placeholder.com/50"
                alt="Author"
                className="author-image"
              />
              <div>
                <p className="author-name">Md Muzammil</p>
                <p className="publish-date">Thursday, 5 Sep 2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="other-blogs">
          <div className="blog-card">
            <img src={blogImage2} alt="Blog Post" className="blog-image" />
            <div className="blog-content">
              <p className="read-time">5 Min read</p>
              <h4>Smart Farming with RythuSetu</h4>
              <p>
                Transforming agriculture with RythuSetu's smart farming
                solutions.
              </p>
              <a href="#" className="continue-reading">
                Continue reading →
              </a>
            </div>
          </div>
          <div className="blog-card">
            <img src={blogImage3} alt="Blog Post" className="blog-image" />
            <div className="blog-content">
              <p className="read-time">5 Min read</p>
              <h4>Efficiency in Farming: RythuSetu's Tools</h4>
              <p>Enhancing farming efficiency with RythuSetu's tools.</p>
              <a href="#" className="continue-reading">
                Continue reading →
              </a>
            </div>
          </div>
          <div className="blog-card">
            <img src={blogImage4} alt="Blog Post" className="blog-image" />
            <div className="blog-content">
              <p className="read-time">5 Min read</p>
              <h4>Freshness Guaranteed: RythuSetu's Promise</h4>
              <p>
                Experience the assurance of freshness with RythuSetu's promise.
              </p>
              <a href="#" className="continue-reading">
                Continue reading →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
