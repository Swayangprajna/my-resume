import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Resume() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="resume-area page-section scroll-to-page" id="resume">
      <div className="custom-container">
        <div className="resume-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-briefcase"></i> Resume
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              Education & <span>Experience</span>
            </h1>
          </div>

          <div className="resume-timeline">
            <div className="item scroll-animation" data-aos="fade-right">
              <span className="date">February 2023 – Present</span>
              <h2 className="valtra">VMO2</h2>
              <p>ReactJS web application </p>
            </div>

            <div className="item scroll-animation" data-aos="fade-right">
              <span className="date">October 2021 – January 2023</span>
              <h2 className="fendt">Telefonica</h2>
              <p>web application</p>
            </div>

            <div className="item scroll-animation" data-aos="fade-right">
              <span className="date">October 2021</span>
              <h2>
                Joined <b className="infy">Cognizant</b>
              </h2>
              <p>As Junior Software Engineer</p>
            </div>
            <div className="item scroll-animation" data-aos="fade-left">
              <span className="date">February 2021 – June 2021</span>
              <h2 className="ao">Airline management System</h2>
              <p>Internship at Cognizant</p>
            </div>

            <div className="item scroll-animation" data-aos="fade-left">
              <span className="date">2017 - 2021</span>
              <h2>
                Completed Bachelors Degree in Electronics and Communication
                Engineering
              </h2>
              <p>S'O'A University, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
