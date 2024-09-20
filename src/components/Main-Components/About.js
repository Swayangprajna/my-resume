import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="about-area page-section scroll-to-page" id="about">
      <div className="custom-container">
        <div className="about-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="lar la-user"></i> About
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              ...every great thing begin with
              <br />
              an even <span>better story</span>
            </h1>
          </div>
          <p
            className="scroll-animation"
            data-aos="fade-up"
            style={{ textAlign: "justify" }}
          >
            Results-oriented Software Engineer with 3 years of experience
            specializing in developing scalable, high-performance web
            applications using ReactJS, JavaScript, and TypeScript. Proficient
            in designing dynamic user interfaces, integrating RESTful APIs, and
            managing complex application states with Redux. Skilled in
            performing root cause analysis to solve complex technical issues and
            improve system stability. <br />
            Experienced in working on projects through the full software
            development lifecycle, from requirements gathering to deployment and
            post-launch monitoring. Passionate about contributing to innovative
            projects and continuously improving system security and performance.
          </p>
        </div>
      </div>
    </section>
  );
}
