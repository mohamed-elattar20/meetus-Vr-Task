import { Component } from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

//
import logo from "../../../public/images/Group 1436.svg";
import logo2 from "../../../public/images/Group 1439.svg";
import facebook from "../../../public/images/Group 1432.svg";
import twitter from "../../../public/images/Group 1433.svg";
import instagram from "../../../public/images/Group 1434.svg";
import linkedin from "../../../public/images/Group 1435.svg";
import cashOnDelivery from "../../../public/images/Rectangle 586.png";
import visa from "../../../public/images/Group 1437.png";
import master from "../../../public/images/Group 1438.png";
export default class Footer extends Component {
  render() {
    return (
      <>
        <section className="footer mt-5 p-4">
          <div className="container">
            <div
              style={{ borderBottom: "1px solid grey" }}
              className="row pb-3"
            >
              <div className="col-sm-12 col-md-12 col-lg-6 border-col px-2">
                <img src={logo} alt="" />
                <p className="mt-3">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat
                </p>
                <p>
                  Ut wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                  consequat. Duis autem vel eum iriure dolor in hendrerit in
                  vulputate velit esse molestie consequat, vel illum dolore eu
                  feugiat nulla. Lorem ipsum dolor sit amet, consectetuer
                  adipiscing elit, sed dia
                </p>
                <p>
                  m nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit
                </p>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 px-4">
                <div className="row">
                  <div className="col-12">
                    <p>Subscribe to our newsletter</p>
                    <div className="position-relative">
                      <input
                        className="input-mail w-100 p-2 rounded-pill border-0"
                        type="text"
                        placeholder="Enter Your Mail"
                      />
                      <button
                        style={{
                          right: "1%",
                          top: "15%",
                          fontSize: "0.625rem",
                        }}
                        className="rounded-pill btn btn-primary px-3 position-absolute"
                      >
                        Subscribe{" "}
                        <FontAwesomeIcon className="ms-2" icon={faPaperPlane} />
                      </button>
                    </div>
                  </div>
                  <div className="col-sm-12 col-lg-6 p-2">
                    <ul className="mt-4 list-unstyled border-col ">
                      <li>
                        <a className="anchor text-light" href="#">
                          About Us
                        </a>
                      </li>
                      <li className="my-3">
                        <a className="anchor text-light" href="#">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a className="anchor text-light" href="#">
                          Track Order
                        </a>
                      </li>
                      <li className="my-3">
                        <a className="anchor text-light" href="#">
                          Terms & Conditions
                        </a>
                      </li>
                      <li>
                        <a className="anchor text-light" href="#">
                          Privacy Policy
                        </a>
                      </li>
                      <li className="my-3">
                        <a className="anchor text-light" href="#">
                          Sell With Us
                        </a>
                      </li>
                      <li>
                        <a className="anchor text-light" href="#">
                          Shipping And Returns
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-lg-6 p-2">
                    <a
                      className="d-flex align-items-center text-decoration-none text-light"
                      href="#"
                    >
                      <img
                        className="object-fit-cover img-fluid mt-4"
                        src={facebook}
                        alt=""
                      />
                      <span className="mt-4 ms-3">/YESHTERY</span>
                    </a>
                    <a
                      className="d-flex align-items-center text-decoration-none text-light"
                      href="#"
                    >
                      <img
                        className="object-fit-cover img-fluid mt-4"
                        src={twitter}
                        alt=""
                      />
                      <span className="mt-4 ms-3">/YESHTERY</span>
                    </a>
                    <a
                      className="d-flex align-items-center text-decoration-none text-light"
                      href="#"
                    >
                      <img
                        className="object-fit-cover img-fluid mt-4"
                        src={instagram}
                        alt=""
                      />
                      <span className="mt-4 ms-3">/YESHTERY</span>
                    </a>
                    <a
                      className="d-flex align-items-center text-decoration-none text-light"
                      href="#"
                    >
                      <img
                        className="object-fit-cover img-fluid mt-4"
                        src={linkedin}
                        alt=""
                      />
                      <span className="mt-4 ms-3">/YESHTERY</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-sm-12 col-md-12 col-lg-4 d-flex align-items-center justify-content-center justify-content-lg-start">
                <p className="text-light my-0">
                  © 2021 yeshtery, all rights reserved.
                </p>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4 d-flex gap-1 align-items-center justify-content-center my-3 my-lg-0">
                <figure>
                  <img src={cashOnDelivery} alt="" />
                </figure>
                <figure>
                  <img src={visa} alt="" />
                </figure>
                <figure>
                  <img src={master} alt="" />
                </figure>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4 d-flex align-items-center justify-content-center">
                <p className="text-light my-0 me-3">Powered By</p>
                <img src={logo2} alt="" />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
