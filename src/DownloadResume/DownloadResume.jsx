import AOS from "aos";
import React, { useEffect } from "react";

const DownloadResume = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const fileUrl = "docs/SWAYANGPRAJNA_React_3yrs.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "SWAYANGPRAJNA_React_3yrs.pdf";
    link.style.display = "none";

    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
  };

  return (
    <a onClick={handleDownload} href="#download" className="theme-btn centre">
      <i className="las la-download"></i>Resume
    </a>
  );
};

export default DownloadResume;
