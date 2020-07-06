import React from "react";
import styles from "./Footer.module.css";

const FooterInfo = ({ info }) => {
  const { creditCardImage, facilities, links } = info;
  const { offices } = facilities;

  return (
    <>
      <div id="info" className={`${styles.info} container my-5`}>
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3 mb-4 mb-lg-0">
            <img src={`static/img/${facilities.image}`} />
            {offices.map((office) => (
              <div
                id="offices"
                className={`${styles.infoOffices} mt-3`}
                key={office.title}
              >
                <h5>{office.title}</h5>
                <p className="mb-1">{office.address}</p>
                <p className="mb-1">Telephone : {office.phone}</p>
                <p className="mb-1">Email : {office.email}</p>
                <p className="mb-1">Web : {office.website}</p>
              </div>
            ))}
          </div>
          {links.map((link) => (
            <div
              className="col-12 col-md-4 col-lg-3 mb-4 mb-lg-0"
              key={link.title}
            >
              <h5>
                <strong>{link.title}</strong>
              </h5>
              <ul className="list-unstyled">
                {link.link.map((link) => (
                  <li key={link.label}>{link.label}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-12">
            <img className="img-fluid mt-5" src="static/img/payment.png" />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default FooterInfo;
