import React from "react";

import styles from "./Home.module.css";

const HomeJumbotron = () => {
  return (
    <div
      className="carousel slide carousel-fade mt-3 mt-lg-0"
      data-ride="carousel"
      id="carousel-1"
    >
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active active">
          <img
            className="w-100 d-block"
            src="static/img/slider-1.jpg"
            alt="Slide Image"
          />
          <div
            data-aos="fade"
            data-aos-duration="500"
            data-aos-delay="500"
            className={styles.carouselInnertextDiv}
          >
            <h1 className={styles.carouselInnertextDivH1}>BIGGEST SALE</h1>
            <h2 className={styles.carouselInnertextDivH2}>ON</h2>
            <h1 className={styles.carouselInnertextDivH1}>SUMMER COLLECTION</h1>
          </div>
        </div>
      </div>
      <div>
        <a
          className="carousel-control-prev"
          href="#carousel-1"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel-1"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <ol className="carousel-indicators">
        <li data-target="#carousel-1" data-slide-to="0" className="active"></li>
      </ol>
    </div>
  );
};

export default HomeJumbotron;
