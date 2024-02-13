import { Component } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navbar.scss";

//
import adidas from "../../../public/images/Group 745.svg";
import searchIcon from "../../../public/images/Path 774.svg";
import cart from "../../../public/images/Path 772.svg";
import wishList from "../../../public/images/Path 771.svg";
import login from "../../../public/images/Path 773.svg";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleShow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };

  submitHandler(e) {
    e.preventDefault();
  }
  render() {
    // console.log(this.props.cart);
    return (
      <>
        <nav className="navbar navbar-expand-lg  bg-white sticky-top">
          {/*  */}
          {/*  */}
          <Offcanvas
            show={this.state.show}
            onHide={this.handleClose}
            placement={"end"}
          >
            <Offcanvas.Header
              className=" justify-content-end "
              closeButton
            ></Offcanvas.Header>
            <Offcanvas.Title className="text-center text-info fw-bold">
              My Cart
            </Offcanvas.Title>
            <Offcanvas.Body>
              <div className="container">
                {this.props.cart?.length > 0 ? (
                  <div className="row">
                    {this.props.cart?.map((product) => (
                      <div key={product.id} className="col-12 d-flex w-100">
                        <figure className=" w-25 ">
                          <img
                            className="object-fit-cover img-fluid"
                            src={product.mainImg}
                            alt=""
                          />
                        </figure>
                        <div className="w-75">
                          <p>{product.productName}</p>
                          <p className="fs-6">Quantity : {product.quantity}</p>
                          <div className="d-flex justify-content-between w-100">
                            <p className="text-info fw-bold">
                              {product.productPrice} <sub>LE</sub>
                            </p>
                            <button
                              style={{ fontSize: "12px" }}
                              onClick={() =>
                                this.props.deleteFromCart(product.id)
                              }
                              className="btn btn-sm btn-primary rounded-pill px-3"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="d-flex gap-1 my-4 justify-content-center">
                      <button
                        style={{ fontSize: "12px" }}
                        className="rounded-pill btn btn-primary px-3 "
                      >
                        Review Cart
                      </button>
                      <button
                        style={{ fontSize: "12px" }}
                        className="rounded-pill btn btn-info px-3"
                      >
                        Complete Checkout
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h3 className="fw-bold">Cart is Empty</h3>
                  </div>
                )}
              </div>
            </Offcanvas.Body>
          </Offcanvas>
          {/*  */}
          {/*  */}
          <div className="container justify-content-between">
            <Link className="navbar-brand  d-block d-lg-none" to={`/`}>
              <img
                className="img-fluid my-2 my-lg-0 align-self-center"
                src={adidas}
                alt=""
              />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/*  */}
            <div
              className="collapse navbar-collapse justify-content-center "
              id="navbarSupportedContent"
            >
              {/*  */}
              <form onSubmit={this.submitHandler} className="" role="search">
                <div className="position-relative my-3 my-lg-0">
                  <input
                    className=" rounded-5 p-2 px-5 search-input"
                    type="text"
                    placeholder="search"
                  />
                  <figure
                    style={{ top: "20%", left: "3%" }}
                    className="position-absolute "
                  >
                    <img src={searchIcon} alt="" />
                  </figure>
                </div>
              </form>
              {/*  */}

              <Link to={`/`} className="navbar-brand m-auto d-none d-lg-block ">
                <img className="img-fluid my-2 my-lg-0 " src={adidas} alt="" />
              </Link>

              <ul className="navbar-nav ms-auto align-items-sm-baseline align-items-lg-center  mb-2 mb-lg-0">
                <li className="nav-item">
                  <button
                    onClick={this.handleShow}
                    className="nav-link active d-flex   "
                    aria-current="page"
                    href="#"
                  >
                    <div className="position-relative d-flex me-2">
                      <img className="" src={cart} alt="" />
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                        {this.props.cart?.length}
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </div>
                    <span className="ms-1">Cart</span>
                  </button>
                </li>
                <li className="nav-item mx-0 mx-lg-4">
                  <a className="nav-link active  " aria-current="page" href="#">
                    <img className="me-2" src={wishList} alt="" />
                    Wishlist
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active  " aria-current="page" href="#">
                    <img className="me-2" src={login} alt="" />
                    Login
                  </a>
                </li>
              </ul>
            </div>
            {/*  */}
          </div>
        </nav>
      </>
    );
  }
}
