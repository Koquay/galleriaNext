import React from "react";
import styles from "./Home.module.css";

const HomeServices = ({ services }) => {
  console.log("services", services);

  return (
    <section id="services" className={`${styles.services}`}>
      <div className="row">
        {services.map((service) => (
          <div
            className="col-12 text-center flex-column justify-content-center col-md-4 col-lg"
            key={service.image}
          >
            <img
              className="img-fluid mb-2"
              src={`static/img/${service.image}`}
            />
            <h6 className="font-weight-bold">{service.title}</h6>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeServices;
