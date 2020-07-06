import React from "react";
import Link from "next/link";

import styles from "./Home.module.css";

const HomeCollection = ({ collections }) => {
  console.log("collections", collections);
  return (
    <section id="collections">
      <div className="row">
        {collections.map((collection) => (
          <div
            className="col-12 col-md-4 col-lg-3 mb-4 mb-lg-0"
            key={collection.title}
          >
            <Link href="/products">
              <div className={`${styles.collection} card`}>
                <img
                  className={`${styles.collectionImg} img-fluid card-img-top w-100 d-block`}
                  src="static/img/product-1.jpg"
                  src={`static/img/${collection.image}`}
                />

                <div
                  id="banner"
                  className={`${styles.collectionBanner} text-center`}
                >
                  <h5 className="font-weight-bold mb-0">{collection.title}</h5>
                  <p className="font-weight-bold mb-0">
                    {collection.description}
                  </p>
                </div>
                <div id="overlay" className={styles.overlay}></div>
                <i className={`${styles.collectionIcon} fa fa-search`}></i>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeCollection;
