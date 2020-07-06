import React from "react";
import styles from "./Home.module.css";

const HomeSalesAds = ({ salesAds }) => {
  console.log("salesAds", salesAds);

  return (
    <section id="sale" className={styles.salesAds}>
      <div className="row">
        <div className={`${styles.ad} col-12 col-md-8 mb-4 mb-md-0`}>
          <img className="img-fluid" src={`static/img/${salesAds[0].image}`} />
          <div className={`${styles.adSalesBanner} text-center`}>
            <h2 className="font-weight-bold mb-0">
              <span className="d-block">{salesAds[0].text1}</span>
              <span className="d-block">{salesAds[0].text2}</span>
            </h2>
          </div>
          <div className={styles.overlay}></div>
          <i className="fa fa-search"></i>
        </div>
        <div className={`${styles.ad} col-12 col-md-4 `}>
          <img
            className={`img-fluid`}
            src={`static/img/${salesAds[1].image}`}
          />
          <div
            className={`${
              (styles.adSalesBanner2, styles.adSalesBanner)
            } img-fluid text-center`}
          >
            <h2 className="font-weight-bold mb-0">
              <span className="d-block">{salesAds[1].text1}</span>
              <span className="d-block">{salesAds[1].text2}</span>
            </h2>
          </div>
          <div className={styles.overlay}></div>
          <i className="fa fa-search"></i>
        </div>
      </div>
    </section>
  );
};

export default HomeSalesAds;
