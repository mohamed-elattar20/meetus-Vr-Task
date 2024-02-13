import { Component } from "react";
import { Link } from "react-router-dom";
import yesh from "../../../public/images/Group 769.svg";
export default class Header extends Component {
  render() {
    return (
      <>
        <section className="bg-primary ">
          <div className="container py-2">
            <div className="row justify-content-center">
              <div className="col-sm-12 col-lg-2 d-flex align-items-center justify-content-sm-center">
                <Link to={`/`}>
                  <figure className="m-0">
                    <img
                      className="me-4"
                      src="../../../public/images/Group 770.svg"
                      alt=""
                    />
                    {/* <img src="../../../public/images/Group 769.svg" alt="" /> */}
                    <img src={yesh} alt="" />
                  </figure>
                </Link>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-5 my-3 my-lg-0 justify-content-sm-center d-flex align-items-center">
                <p className="my-0">
                  Valentine’s Day Offers! Buy Two Get One Free{" "}
                </p>
                <a className="text-black ms-2" href="#">
                  Shop Now
                </a>
              </div>
              <div className=" col-sm-12 col-md-12 col-lg-5 justify-content-sm-center d-flex align-items-center flex-wrap">
                <button className="btn d-flex">
                  <figure className="me-2 my-0">
                    <img src="../../../public/images/Group 756.svg" alt="" />
                  </figure>
                  Contanct Us
                </button>
                <button className="btn d-flex">
                  <figure className="me-2 my-0">
                    <img src="../../../public/images/Group 758.svg" alt="" />
                  </figure>
                  Track Order
                </button>
                <button className="btn d-flex">
                  <figure className="me-2 my-0">
                    <img src="../../../public/images/Group 753.svg" alt="" />
                  </figure>
                  Find A Store
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
