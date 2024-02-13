import { Component } from "react";
import "./ProductCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
//
import { LazyLoadImage } from "react-lazy-load-image-component";
//

import icon360 from "../../../public/images/Group 577.svg";
import adidas from "../../../public/images/Group 745.svg";

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  handleImageLoad = () => {
    this.setState({ isLoaded: true });
  };
  render() {
    const { isLoaded } = this.state;
    const { mainImg, productName, sale, productPrice, id } = this.props.product;
    return (
      <>
        <div className="card border-0 p-3 w-100" style={{ width: "18rem" }}>
          <div className="card-img-top position-relative overflow-hidden ">
            <Link to={`/product-details/${id}`}>
              <LazyLoadImage
                src={mainImg}
                alt="Image description"
                className=" img-fluid object-fit-cover d-block w-100 hover"
                loading="lazy"
              />
              <button
                style={{ top: "5%", left: "5%" }}
                className="btn position-absolute bg-white shadow-sm border border-1 border-secondary border-opacity-25 p-1 rounded-3"
              >
                <img src={icon360} alt="" />
              </button>
            </Link>
          </div>
          <div className="card-body p-0 my-2">
            <p className="card-text">{productName || ""}</p>
            <div className="d-flex justify-content-between  align-items-center">
              <div>
                <p style={{ fontSize: "1.25rem" }} className="text-info my-0">
                  {productPrice || ""} <sub>LE</sub>
                </p>
                <div className="d-flex mt-2">
                  <p className="text-decoration-line-through my-0 text-muted">
                    12,000
                  </p>
                  <p className="bg-primary px-2 ms-2">{sale || ""}%</p>
                </div>
              </div>
              <div>
                <img
                  className="img-fluid object-fit-contain "
                  src={adidas}
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
