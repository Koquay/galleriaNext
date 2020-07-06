import React from "react";
import styles from "./Footer.module.css";

const FooterSubscription = ({ subscription }) => {
  console.log("subscription", subscription);
  const { aboutUs, followUs, newsLetter } = subscription;

  return (
    <div id="subscription" className={`${styles.subscription} container mt-5`}>
      <hr />
      <div className="row mt-5">
        <div className="col-12 col-md-4">
          <h5 className="text-center mb-4">{aboutUs.title}</h5>
          <p>
            {aboutUs.text}
            <br />
          </p>
        </div>
        <div className="col-12 col-md-4">
          <h5 className="text-center mb-4">{followUs.title}</h5>
          <div className="d-flex justify-content-between">
            {followUs.socialIcons.map((icon) => (
              <i className={icon} key={icon}></i>
            ))}
          </div>
        </div>
        <div className="col-12 col-md-4">
          <h5 className="text-center">{newsLetter.title}</h5>
          <div className={`${styles.subscriptionInputGroup} input-group mt-4`}>
            <div className="input-group-prepend"></div>
            <input className="form-control" type="text" />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                {newsLetter.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSubscription;
