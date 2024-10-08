import React from "react";
import ChatPopup from "../../Chat/ChatPopup";
import DownloadResume from "../../DownloadResume";

export default function Lsb() {
  return (
    <div className="left-sidebar">
      <div className="sidebar-header d-flex align-items-center justify-content-between">
        {/* <img src="./assets/images/logo.png" alt="Logo" height={50} /> */}
        {/* <p className="designation">Web Developer & UX Designer</p> */}
      </div>
      <img className="me" src="./assets/images/me.png" alt="Me" />
      <h2 className="email">SwayangPrajna@gmail.com</h2>
      <h2 className="address">Based in Pune, India</h2>
      <p className="copyright">Web app Developer</p>
      {/* <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
        <li>
          <a
            href="https://www.linkedin.com/in/Swayangprajna-nayak02/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="lab la-linkedin" />
          </a>
        </li>
        <li>
          <a
            href="https://stackoverflow.com/users/10612757/Swayangprajna"
            target="_blank"
            rel="noreferrer"
          >
            <i className="lab la-stack-overflow" />
          </a>
        </li>

        <li>
          <a href="https://github.com/akunal1" target="_blank" rel="noreferrer">
            <i className="lab la-github"></i>
          </a>
        </li>
      </ul> */}
      <DownloadResume />
    </div>
  );
}
