import { Component } from "react";
import "./Navs.scss";
export default class Navs extends Component {
  render() {
    return (
      <>
        <section className="navs bg-black py-3">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col text-center">
                <a className="nav-style" href="#">
                  Men
                </a>
              </div>
              <div className="col text-center">
                <a className="nav-style" href="#">
                  Women
                </a>
              </div>
              <div className="col text-center">
                <a className="nav-style" href="#">
                  Unisex
                </a>
              </div>
              <div className="col text-center">
                <a className="nav-style" href="#">
                  Kids
                </a>
              </div>
              <div className="col text-center">
                <a className="nav-style" href="#">
                  Best Sellers
                </a>
              </div>
              <div className="col text-center">
                <a className="nav-style" href="#">
                  New Arrivals
                </a>
              </div>
              <div className="col text-center">
                <a className="nav-style" href="#">
                  Offers
                </a>
              </div>
              {/* <div className="col-sm-4 col-md-3 col-lg-1">
                <a href="#">Men</a>
              </div>
              <div className="col-sm-4 col-md-3 col-lg-1">
                <a href="#">Women</a>
              </div>
              <div className="col-sm-4 col-md-3 col-lg-1 text-center">
                <a href="#">Unisex</a>
              </div>
              <div className="col-sm-4 col-md-3 col-lg-1 text-center">
                <a href="#">Kids</a>
              </div>
              <div className="col-sm-4 col-md-3 col-lg-2 text-center">
                <a href="#">Best Sellers</a>
              </div>
              <div className="col-sm-4 col-md-3 col-lg-2 text-center">
                <a href="#">New Arrivals</a>
              </div>
              <div className="col-sm-4 col-md-3 col-lg-1">
                <a href="#">Offers</a>
              </div> */}
            </div>
          </div>
        </section>
      </>
    );
  }
}
