import React from "react";
import Link from "next/link";

import styles from "./Header.module.css";

const HeaderTop = () => {
  return (
    <div className="container-fluid">
      <header className={styles.header}>
        <div
          id="header-top-row"
          className={`$styles.headerTopRow row d-none d-md-flex py-2`}
        >
          <div className="col-9 d-flex">
            <span>
              <i className="fa fa-user mr-1"></i>My Account
            </span>
            <span className="ml-4">
              <i className="fa fa-heart mr-1"></i>Wish List (0)
            </span>
            <Link href="/cart">
              <span className="ml-4">
                <i className="fa fa-cart-arrow-down mr-1"></i>Shopping Cart
              </span>
            </Link>
            <span className="ml-4">
              <i className="fa fa-share-square-o mr-1"></i>Checkout
            </span>
          </div>
          <div className="col-3 d-flex justify-content-lg-end">
            <span>
              USD<i className="fa fa-angle-down ml-1"></i>
            </span>
            <span className="ml-4">
              English<i className="fa fa-angle-down ml-1"></i>
            </span>
          </div>
        </div>
        <div className="row d-lg-flex justify-content-lg-end px-13">
          <div
            id="currency"
            className={`${styles.headerCurreency} col text-center col-1 pt-3 d-none`}
          >
            <div>
              <ul className="list-unstyled">
                <li>€ EURO</li>
                <li className="my-1">£ POUND</li>
                <li>¥ YEN</li>
              </ul>
            </div>
            <div>
              <ul className="list-unstyled">
                <li>USD</li>
                <li className="my-1">UK</li>
                <li>GERMAN</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          id="header-middle-row"
          className={`${styles.headerMiddleRow} row d-flex py-3`}
        >
          <div className="col-12 d-flex d-lg-flex align-items-center col-md-4">
            <i
              className={`fa fa-phone mr-2`}
              style={{ fontSize: "1.7rem" }}
            ></i>
            <span>
              <span className="d-block font-weight-bold">1 800 444 4444</span>
              <span className="d-block">We are opened 9am to 10pm</span>
            </span>
          </div>
          <div
            className="col-12 d-flex justify-content-center col-md-4 my-3 m-md-0"
            id="mid-col"
          >
            <img
              className="d-lg-flex justify-content-lg-center"
              src="static/img/logo.png"
            />
          </div>
          <div className="col-12 col-md-4">
            <div className="row">
              <div className="col-12 d-flex justify-content-between">
                <Link href="/login">
                  <span>
                    <i className="fa fa-share-square-o mr-1"></i>Login
                  </span>
                </Link>
                <Link href="/signup">
                  <span>
                    <i className="fa fa-lock mr-1"></i>Register
                  </span>
                </Link>
                <span>
                  <i className="fa fa-shopping-cart mr-1"></i>
                  <span
                    className={`${styles.cartBadge} badge badge-primary d-block`}
                  >
                    4
                  </span>
                </span>
              </div>
              <div className="col-12 mt-3">
                <div className={`${styles.searchInputGroup} input-group`}>
                  <div className="input-group-prepend"></div>
                  <input className="form-control" type="text" />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col px-0">
            <nav
              className={`${styles.navber} navbar navbar-light navbar-expand-lg d-lg-flex`}
            >
              <div className="container-fluid">
                <button
                  data-toggle="collapse"
                  className="navbar-toggler"
                  data-target="#navcol-1"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <i className="fa fa-bars"></i>
                </button>
                <div
                  className="collapse navbar-collapse d-lg-flex justify-content-lg-center"
                  id="navcol-1"
                >
                  <ul className="nav navbar-nav d-lg-flex px-2 mb-2">
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active" href="#">
                        HOME
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" href="#">
                        ABOUT
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" href="#">
                        BLOG
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" href="#">
                        SHOP
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" href="#">
                        MENS
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" href="#">
                        WOMENS
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" href="#">
                        ACCESSORIES
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" href="#">
                        PAGES
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" href="#">
                        CONTACT
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderTop;
