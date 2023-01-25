import React from 'react';
import './about.module.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About My Blog</h1>
      <div className="about-description">
        <p>Welcome to my blog! I am a blogger with a passion for writing online blog post. On this platform, I will be
          sharing my insights, experiences, and thoughts on topic with the hope of inspiring and educating my
          readers. </p>
        <p>I started this blog as a way to document my journey and connect with like-minded individuals. I believe that
          blog has the power to change lives and I want to be a part of that change. </p>
        <p>Thank you for visiting my blog and I hope you find value in the content that I share. Feel free to reach out
          to me with any questions or comments. </p>
      </div>
      <div className="about-image">
        {/* add a personal profile image here */}
      </div>
    </div>
  )
}
export default About;
