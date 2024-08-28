import React from "react";
import "./AboutUsSection.css";
// import aboutusimage from "../assets/about-us.jpg";

function AboutUsSection() {
  return (
    <div className="about-us-section" data-aos="fade-up">
      <div className="about-us-content">
        <h1>About us</h1>
        <p>Welcome to RythuSetu...</p>
        <h2>Our Vision</h2>
        <p>At RythuSetu, we connect farmers...</p>
        <h2>Our Technology</h2>
        <p>RythuSetu leverages React...</p>
      </div>
      <div className="about-us-image" data-aos="fade-left">
        <img src='about-us.jpg' alt="About Us Illustration" />
      </div>
    </div>
  );
}

export default AboutUsSection;
