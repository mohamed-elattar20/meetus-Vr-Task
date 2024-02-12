import { Component } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navbar.scss";

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
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg  bg-white">
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
            <Offcanvas.Title className="text-center text-info">
              My Cart
            </Offcanvas.Title>
            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements
              you have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
          </Offcanvas>
          {/*  */}
          {/*  */}
          <div className="container justify-content-between">
            <a className="navbar-brand  d-block d-lg-none" href="#">
              <img
                className="img-fluid my-2 my-lg-0 align-self-center"
                src="../../../public/images/Group 745.svg"
                alt=""
              />
            </a>

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
              <form className="" role="search">
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
                    <img src="../public/images/Path 774.svg" alt="" />
                  </figure>
                </div>
              </form>
              {/*  */}

              <a className="navbar-brand m-auto d-none d-lg-block " href="#">
                <img
                  className="img-fluid my-2 my-lg-0 "
                  src="../../../public/images/Group 745.svg"
                  alt=""
                />
              </a>

              <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
                <li className="nav-item">
                  <button
                    onClick={this.handleShow}
                    className="nav-link active d-flex   text-center"
                    aria-current="page"
                    href="#"
                  >
                    <div className="position-relative d-flex me-2">
                      <img
                        className=""
                        src="../../../public/images/Path 772.svg"
                        alt=""
                      />
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                        0
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </div>
                    <span className="ms-1">Cart</span>
                  </button>
                </li>
                <li className="nav-item mx-0 mx-lg-4">
                  <a className="nav-link active  " aria-current="page" href="#">
                    <img
                      className="me-2"
                      src="../../../public/images/Path 771.svg"
                      alt=""
                    />
                    Wishlist
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active  " aria-current="page" href="#">
                    <img
                      className="me-2"
                      src="../../../public/images/Path 773.svg"
                      alt=""
                    />
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