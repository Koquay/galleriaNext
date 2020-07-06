import React from "react";

import styles from "./SectionBanner.module.css";

const SectionBanner = ({ section }) => {
  return (
    <section id="section-image">
      <div className="row mt-3 mt-lg-0">
        <div className={`${styles.sectionBannerImage}`}>
          <img className="img-fluid" src="static/img/blog-main-1.jpg" />
          <div className={`${styles.sectionBannerInnerText}`}>
            <span>{section}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBanner;
