import React from "react";

import styles from "./Pagination.module.css";

const Pagination = () => {
  return (
    <div className="row mt-3">
      <div className="col" id="pagination">
        <nav className="d-lg-flex justify-content-lg-center">
          <ul className="pagination">
            <li className={`${styles.pageItem} page-item`}>
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">«</span>
              </a>
            </li>
            <li className={`${styles.pageItem} page-item`}>
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className={`${styles.pageItem} page-item`}>
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className={`${styles.pageItem} page-item`}>
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className={`${styles.pageItem} page-item`}>
              <a className="page-link" href="#">
                4
              </a>
            </li>
            <li className={`${styles.pageItem} page-item`}>
              <a className="page-link" href="#">
                5
              </a>
            </li>
            <li className={`${styles.pageItem} page-item`}>
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">»</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
