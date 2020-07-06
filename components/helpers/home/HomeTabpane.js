import React from "react";
import Rating from "material-ui-rating";
import styles from "./Home.module.css";
import { toFixed } from "../utils/FormatCurrency";

const HomeTabpane = ({ featuredItems }) => {
  const { recent, featured, special } = featuredItems;

  console.log(" recent, featured, special", recent, featured, special);

  return (
    <section className={styles.productCarousel}>
      <div className="row">
        <div className="col">
          <div className="d-flex d-md-flex flex-column align-items-md-center">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a
                  className="nav-link"
                  role="tab"
                  data-toggle="pill"
                  href="#tab-1"
                >
                  RECENT
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  role="tab"
                  data-toggle="pill"
                  href="#tab-2"
                >
                  FEATURED
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  role="tab"
                  data-toggle="pill"
                  href="#tab-3"
                >
                  SPECIAL
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade" role="tabpanel" id="tab-1">
                <div className="row d-flex justify-content-between mt-4">
                  {recent.map((item) => (
                    <div
                      className="col-12 col-md-4 col-lg product mb-3 mb-l-0"
                      key={item.designer}
                    >
                      <div className={`${styles.productCarouselCard} card`}>
                        <img
                          className={`${styles.productCarouselCardImg1} card-img-top w-100 d-block img-1`}
                          src={`static/img/${item.image}`}
                        />
                        <img
                          className={`${styles.productCarouselCardImg2} card-img-top w-100 d-block img-1`}
                          src="static/img/product-9.jpg"
                          style={{ opacity: "1" }}
                        />
                        <div
                          className={`${styles.productCarouselCardBody} card-body text-center`}
                        >
                          <span className="d-block">{item.designer}</span>
                          <span className="d-block">
                            <span className="mr-2 strike-through">
                              ${toFixed(item.listPrice, 0)}
                            </span>
                            <span className="font-weight-bold">
                              ${toFixed(item.price, 0)}
                            </span>
                          </span>
                          <span>
                            <Rating
                              value={item.rating}
                              max={5}
                              size="small"
                              // onChange={(value) => onRatingChange(value)}
                            />
                          </span>
                        </div>
                        <div className={styles.productCarouselCardActions}>
                          <i className="fa fa-search"></i>
                          <i className="fa fa-heart"></i>
                          <i className="fa fa-exchange"></i>
                        </div>
                        <div className={styles.productCarouselAddToCart}>
                          <span>Add to Cart</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="tab-pane fade show active"
                role="tabpanel"
                id="tab-2"
              >
                <div className="row d-flex justify-content-between mt-4">
                  {featured.map((item) => (
                    <div
                      className="col-12 col-md-4 col-lg product mb-3 mb-l-0"
                      key={item.designer}
                    >
                      <div className={`${styles.productCarouselCard} card`}>
                        <img
                          className={`${styles.productCarouselCardImg1} card-img-top w-100 d-block img-1`}
                          src={`static/img/${item.image}`}
                        />
                        <img
                          className={`${styles.productCarouselCardImg2} card-img-top w-100 d-block img-1`}
                          src="static/img/product-9.jpg"
                          style={{ opacity: "1" }}
                        />
                        <div
                          className={`${styles.productCarouselCardBody} card-body text-center`}
                        >
                          <span className="d-block">{item.designer}</span>
                          <span className="d-block">
                            <span className="mr-2 strike-through">
                              ${toFixed(item.listPrice, 0)}
                            </span>
                            <span className="font-weight-bold">
                              ${toFixed(item.price, 0)}
                            </span>
                          </span>
                          <span>
                            <Rating
                              value={item.rating}
                              max={5}
                              size="small"
                              // onChange={(value) => onRatingChange(value)}
                            />
                          </span>
                        </div>
                        <div className={styles.productCarouselCardActions}>
                          <i className="fa fa-search"></i>
                          <i className="fa fa-heart"></i>
                          <i className="fa fa-exchange"></i>
                        </div>
                        <div className={styles.productCarouselAddToCart}>
                          <span>Add to Cart</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="tab-pane fade show active"
                role="tabpanel"
                id="tab-3"
              >
                <div className="row d-flex justify-content-between mt-4">
                  {special.map((item) => (
                    <div
                      className="col-12 col-md-4 col-lg product mb-3 mb-l-0"
                      key={item.designer}
                    >
                      <div className={`${styles.productCarouselCard} card`}>
                        <img
                          className={`${styles.productCarouselCardImg1} card-img-top w-100 d-block img-1`}
                          src={`static/img/${item.image}`}
                        />
                        <img
                          className={`${styles.productCarouselCardImg2} card-img-top w-100 d-block img-1`}
                          src="static/img/product-9.jpg"
                          style={{ opacity: "1" }}
                        />
                        <div
                          className={`${styles.productCarouselCardBody} card-body text-center`}
                        >
                          <span className="d-block">{item.designer}</span>
                          <span className="d-block">
                            <span className="mr-2 strike-through">
                              ${toFixed(item.listPrice, 0)}
                            </span>
                            <span className="font-weight-bold">
                              ${toFixed(item.price, 0)}
                            </span>
                          </span>
                          <span>
                            <Rating
                              value={item.rating}
                              max={5}
                              size="small"
                              // onChange={(value) => onRatingChange(value)}
                            />
                          </span>
                        </div>
                        <div className={styles.productCarouselCardActions}>
                          <i className="fa fa-search"></i>
                          <i className="fa fa-heart"></i>
                          <i className="fa fa-exchange"></i>
                        </div>
                        <div className={styles.productCarouselAddToCart}>
                          <span>Add to Cart</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* <div className="tab-pane fade" role="tabpanel" id="tab-3">
                <p>Content for tab 3.</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTabpane;
