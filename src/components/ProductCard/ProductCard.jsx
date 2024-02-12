import { Component } from "react";
import "./ProductCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default class ProductCard extends Component {
  render() {
    return (
      <>
        <div className="card border-0 p-3 w-100" style={{ width: "18rem" }}>
          <div className="card-img-top position-relative ">
            <img
              src="../../../public/images/Group 583.png"
              className=" img-fluid object-fit-cover d-block w-100"
              alt="..."
            />
            <button
              style={{ top: "5%", left: "5%" }}
              className="btn position-absolute bg-white shadow-sm border border-1 border-secondary border-opacity-25 p-1 rounded-3"
            >
              <img src="../../../public/images/Group 577.svg" alt="" />
            </button>
          </div>
          <div className="card-body p-0 my-2">
            <p className="card-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <div className="d-flex justify-content-between  align-items-center">
              <div>
                <p style={{ fontSize: "1.25rem" }} className="text-info my-0">
                  9,999 <sub>LE</sub>
                </p>
                <div className="d-flex mt-2">
                  <p className="text-decoration-line-through my-0 text-muted">
                    12,000
                  </p>
                  <p className="bg-primary px-2 ms-2">30%</p>
                </div>
              </div>
              <div>
                <img
                  className="img-fluid object-fit-contain "
                  src="../../../public/images/Group 745.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="stars d-flex justify-content-center align-items-center ">
              {[1, 2, 3, 4, 5].map((star) => (
                <FontAwesomeIcon
                  className={`${
                    star <= 4
                      ? "star-color"
                      : "text-secondary  text-opacity-10 "
                  }`}
                  key={star}
                  icon={faStar}
                />
              ))}
              <span className="ms-2">4.2 of 5</span>
            </div>
            <p className="m-0 text-center mt-2">
              Pickup From : <strong>Genena Mall</strong>
            </p>
          </div>
        </div>
      </>
    );
  }
}
