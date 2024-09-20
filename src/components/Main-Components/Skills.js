import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="skills-area page-section scroll-to-page" id="skills">
      <div className="custom-container">
        <div className="skills-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-shapes"></i> my skills
            </h4>
            <h1 className="scroll-animation" data-aos="fade-left">
              <span>Skills</span>
            </h1>
          </div>

          <div className="row skills text-center">
            <div className="col-md-3 scroll-animation" data-aos="fade-up">
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/react.png" alt="React" />
                  <h1 className="percent font-24">ReactJS</h1>
                </div>
                {/* <p className="name">React</p> */}
              </div>
            </div>

            <div className="col-md-3 scroll-animation" data-aos="fade-down">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png"
                    alt="Typescript"
                    height={60}
                  />
                  <h1 className="percent font-24">Typescript</h1>
                </div>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-left">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                    alt="Javascript"
                    height={60}
                  />
                  <h1 className="percent font-24">Javascript</h1>
                </div>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-right">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
                    alt="HTML5"
                    height={60}
                  />
                  <h1 className="percent font-24">HTML 5</h1>
                </div>
                {/* <p className="name">Figma</p> */}
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-up">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"
                    alt="CSS3"
                    height={60}
                  />
                  <h1 className="percent font-24">CSS3</h1>
                </div>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-down">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                    alt="git"
                    height={60}
                  />
                  <h1 className="percent font-24">Git</h1>
                </div>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-left">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png"
                    alt="bootstrap"
                    height={60}
                  />
                  <h1 className="percent font-24">Bootstrap</h1>
                </div>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-left">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
                    alt="Redux"
                    height={60}
                  />
                  <h1 className="percent font-24">Redux</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
