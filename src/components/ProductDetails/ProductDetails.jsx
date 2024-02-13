import { Component } from "react";
import "./ProductDetails.scss";
// import ProductCard from "../ProductCard/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../ProductCard/ProductCard";

//
let sizes = ["small", "medium", "Large", "X Large", "XX Large"];
class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgSrc: "../../../public/images/gn1856-4.jpg",
      productId: null,
      product: {},
      productQuantity: 0,
    };
  }
  handleChangeImg = (event) => {
    // console.log(event.target.src);
    if (!event.target.src) return;
    this.setState({ imgSrc: event.target.src });
  };

  componentDidMount() {
    console.log(this.props.cart);
    if (
      this.props.cart.filter(
        (product) => product.id == window.location.pathname.split("details/")[1]
      )[0]
    ) {
      this.setState({
        productQuantity: this.props.cart.filter(
          (product) =>
            product.id == window.location.pathname.split("details/")[1]
        )[0].quantity,
      });
    }
    // console.log(
    //   this.props.cart.filter(
    //     (product) =>
    //       product.id == window.location.pathname.split("details/")[1]
    //   )[0]
    // );
    // console.log(window.location.pathname.split("details/")[1]);
    // this.setState({ productId: window.location.pathname.split("details/")[1] });

    // console.log(
    //   this.props.products.filter(
    //     (product) => product.id == window.location.pathname.split("details/")[1]
    //   )
    // );
    this.setState({
      product: this.props.products.filter(
        (product) => product.id == window.location.pathname.split("details/")[1]
      )[0],
      imgSrc: this.props.products.filter(
        (product) => product.id == window.location.pathname.split("details/")[1]
      )[0].mainImg,
    });
  }

  render() {
    let quan = 0;
    if (
      this.props.cart?.filter(
        (product) => product.id == window.location.pathname.split("details/")[1]
      )[0]
    ) {
      quan =
        this.props.cart.filter(
          (product) =>
            product.id == window.location.pathname.split("details/")[1]
        )[0].quantity || 0;
    }
    return (
      <>
        <section className="paths borders">
          <div className="container py-3">
            <a className="mx-1" href="#">
              Men
            </a>
            /
            <a className="mx-1" href="#">
              Clothing
            </a>
            /
            <a className="mx-1" href="#">
              Tops
            </a>
            /
            <a className="mx-1" href="#">
              Adidas
            </a>
            /
            <a className="mx-1" href="#">
              Adidas Black T-Shirt
            </a>
          </div>
        </section>
        {/*  */}
        {/*  */}
        {/*  */}
        <div className="container my-5">
          <div className="row ">
            <div className="col-sm-12 col-md-5 col-lg-6">
              <div className="row">
                <div className="col-12 position-relative p-0 rounded-3">
                  <img
                    className="img-fluid object-fit-cover rounded-3"
                    src={this.state.imgSrc || ""}
                    alt=""
                  />
                  {/* <img
                    className="img-fluid object-fit-cover rounded-3"
                    src="../../../public/images/gn1856-4.jpg"
                    alt=""
                  /> */}
                  <button
                    style={{ top: "5%", left: "5%" }}
                    className="btn position-absolute bg-white shadow-sm border border-1 border-secondary border-opacity-25 p-1 rounded-3"
                  >
                    <img
                      className=""
                      src="../../../public/images/Group 338.svg"
                      alt=""
                    />
                  </button>
                </div>
                <div className="col-12 mt-2">
                  <div onClick={(e) => this.handleChangeImg(e)} className="row">
                    {this.state.product?.imgs?.map((img) => (
                      <div key={img} className={`col rounded-3 `}>
                        <img
                          className={`img-fluid rounded-3 pointer`}
                          src={img}
                          alt=""
                        />
                      </div>
                    ))}
                    {/* <div className={`col rounded-3 `}>
                      <img
                        className={`img-fluid rounded-3 pointer`}
                        src="../../../public/images/gn1856-4.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col rounded-3">
                      <img
                        className="img-fluid rounded-3 pointer"
                        src="../../../public/images/gn1856-2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col rounded-3">
                      <img
                        className="img-fluid rounded-3 pointer"
                        src="../../../public/images/gn1856-8.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col rounded-3">
                      <img
                        className="img-fluid rounded-3 pointer"
                        src="../../../public/images/gn1856-9.jpg"
                        alt=""
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-7 col-lg-6">
              <div>
                <img src="../../../public/images/Group 346.svg" alt="" />
              </div>
              <p style={{ maxWidth: "65%" }} className="fw-bold mt-2">
                {this.state.product?.productName}
              </p>
              <p className="text-muted fw-bold">Men</p>
              {/*  */}
              <div className="d-flex">
                <div className="stars">
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
                </div>
                <p className="fw-bold mx-4">4.9 of 5</p>
                <p className="fw-bold text-muted">
                  {this.state.product?.rates} Rates
                </p>
              </div>
              {/*  */}
              <div className="d-flex price justify-content-start align-items-center section-border  pb-3">
                <p
                  style={{ fontSize: "1.8rem" }}
                  className="text-info fw-bold my-0"
                >
                  {this.state.product?.productPrice}{" "}
                  <sub className="fw-medium">LE</sub>
                </p>
                <p className="text-muted fw-bold mx-4 my-0 text-decoration-line-through">
                  12,000
                </p>

                <p className="fw-bold my-0 bg-primary py-1 px-2  ">30 % Off</p>
              </div>
              {/*  */}
              <p className="fw-bold my-3 fs-5">Size</p>
              <div className="d-flex flex-wrap section-border pb-4">
                {sizes.map((size) => (
                  <button
                    key={size}
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      fontSize: "10px",
                    }}
                    className=" p-3  border text-center d-flex  justify-content-center align-items-center text-info fw-bold bg-white hover-btn me-1 border-opacity-10 "
                  >
                    {size}
                  </button>
                ))}
              </div>
              {/*  */}
              <div className="section-border pb-3">
                <p className="fw-bold my-3 fs-5">Color</p>

                {this.state.product?.colors?.map((color) => (
                  <button key={color} className="btn rounded-">
                    <img src={color} alt="" />
                  </button>
                ))}
                {/* <button className="btn rounded-circle">
                  <img src="../../../public/images/Group 354.png" alt="" />
                </button>
                <button className="btn rounded-circle">
                  <img src="../../../public//images/Group 356.png" alt="" />
                </button> */}
              </div>
              {/*  */}

              <div className="">
                <p className="fw-bold my-3 fs-5">Quantity</p>
                <div className=" rounded-pill p-2 w-50 d-flex justify-content-between bg-secondary bg-opacity-25 align-items-center ">
                  <button
                    onClick={() =>
                      this.props.removeFromQuantity(this.state.product?.id)
                    }
                    className="btn btn-primary rounded-circle fw-bold"
                  >
                    -
                  </button>
                  <span className="text-info fw-bold">{quan}</span>
                  <button
                    onClick={() => this.props.addToCart(this.state.product?.id)}
                    className="btn btn-primary rounded-circle fw-bold"
                  >
                    +
                  </button>
                </div>
                <div className="d-flex mt-3 gap-1 flex-wrap">
                  <button
                    onClick={() => this.props.addToCart(this.state.product?.id)}
                    style={{ fontSize: "1rem" }}
                    className="rounded-pill bg-info text-light border-0 px-5 py-2 fw-medium w-50"
                  >
                    Add To Cart
                  </button>
                  <button
                    style={{ fontSize: "1rem" }}
                    className="rounded-pill bg-primary text-black border-0 px-5 py-2 fw-medium"
                  >
                    Pickup From Store
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-5 fw-bold g-3">
            <h2 className="text-info">Similar Product</h2>
            <p className="text-muted fw-medium">
              You may like these products also
            </p>
            {this.props.products
              .filter((product) => product.id !== this.state.product?.id)
              .slice(0, 4)
              .map((product) => (
                <div key={product.id} className="col-sm-12 col-md-6 col-lg-3">
                  <ProductCard product={product} />
                </div>
              ))}
            {/* <div className="col-sm-12 col-md-6 col-lg-3">
              <ProductCard />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <ProductCard />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <ProductCard />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <ProductCard />
            </div> */}
          </div>
        </div>
      </>
    );
  }
}
// export default withRouter(ProductDetails);
export default ProductDetails;
