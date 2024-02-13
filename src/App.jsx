import { Component } from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Navs from "./components/Navs/Navs";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
//
import toast, { Toaster } from "react-hot-toast";

//

let products = [
  {
    id: crypto.randomUUID(),
    productName: "Adidas black t-shirt ",
    productPrice: 9999,
    sizes: ["small", "medium", "Large", "X Large", "XX Large"],
    colors: [
      "../../../public/images/Group 354.png",
      "../../../public/images/Group 356.png",
    ],
    rates: 22,
    sale: 30,
    mainImg: "../../../public/images/gn1856-4.jpg",
    imgs: [
      "../../../public/images/gn1856-4.jpg",
      "../../../public/images/gn1856-2.jpg",
      "../../../public/images/gn1856-8.jpg",
      "../../../public/images/gn1856-9.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    productName: "Floral Tee - adidas",
    productPrice: 700,
    sizes: ["small", "medium", "Large", "X Large", "XX Large"],
    colors: [
      "../../../public/images/Group 354.png",
      "../../../public/images/Group 356.png",
    ],
    rates: 50,
    sale: 20,
    mainImg:
      "https://api.yeshtery.com/v1/yeshtery/files/31/hc2110-5.jpg?height=2272",
    imgs: [
      "https://api.yeshtery.com/v1/yeshtery/files/31/hc2110-5.jpg?height=2272",
      "https://api.yeshtery.com/v1/yeshtery/files/31/hc2110-2-apparel-photography-front-center-view-white-7bc57de6151942a38d8299d0b72b02e3.jpg?height=568",
      "https://api.yeshtery.com/v1/yeshtery/files/31/hc2110-5-apparel-on-model-back-view-white-990e687da49045fab2e890cfbd306e91.jpg?height=2272",
      "https://api.yeshtery.com/v1/yeshtery/files/31/hc2110-4-apparel-on-model-front-view-white-ac1740d590ca40b2a841caf65a7ec1f0.jpg?height=568",
    ],
  },
  {
    id: crypto.randomUUID(),
    productName: "Adidas SPRT Summer Tee",
    productPrice: 1000,
    sizes: ["small", "medium", "Large", "X Large", "XX Large"],
    colors: [
      "../../../public/images/Group 354.png",
      "../../../public/images/Group 356.png",
    ],
    rates: 22,
    sale: 30,
    mainImg:
      "https://api.yeshtery.com/v1/yeshtery/files/31/he4717-5-apparel-on-model-back-view-white-843ffd3426b64fe2af1fe3ffc040982b.jpg?height=568",
    imgs: [
      "https://api.yeshtery.com/v1/yeshtery/files/31/he4717-5-apparel-on-model-back-view-white-843ffd3426b64fe2af1fe3ffc040982b.jpg?height=568",
      "https://api.yeshtery.com/v1/yeshtery/files/31/he4717-6-apparel-on-model-side-view-white-88d9d5bb8d3a46c8806df987a04219fe.jpg?height=568",
      "https://api.yeshtery.com/v1/yeshtery/files/31/he4717-10-apparel-zip-turntable-3d-8-white-05e94f77021e4f84ad13ee85789ea863.jpg?height=568",
      "https://api.yeshtery.com/v1/yeshtery/files/31/he4717-9-apparel-on-model-detail-view-3-white-78313b7e43a0488b83c240c8f9248571.jpg?height=568",
    ],
  },
  {
    id: crypto.randomUUID(),
    productName: "Studio Graphic Tee-Adidas",
    productPrice: 1079,
    sizes: ["small", "medium", "Large", "X Large", "XX Large"],
    colors: [
      "../../../public/images/Group 354.png",
      "../../../public/images/Group 356.png",
    ],
    rates: 36,
    sale: 15,
    mainImg:
      "https://api.yeshtery.com/v1/yeshtery/files/31/hb6547-1-apparel-photography-front-view-white-ab8c0fb08ce34778bfd2029b779efe0b.jpg?height=2272",
    imgs: [
      "https://api.yeshtery.com/v1/yeshtery/files/31/hb6547-1-apparel-photography-front-view-white-ab8c0fb08ce34778bfd2029b779efe0b.jpg?height=2272",
      "https://api.yeshtery.com/v1/yeshtery/files/31/hb6547-8-apparel-on-model-detail-view-2-white-0cde1da9c2284e6b83d13a7fff23f593.jpg?height=2272",
      "https://api.yeshtery.com/v1/yeshtery/files/31/hb6547-5-apparel-on-model-back-view-white-165408fb2cb7484d91b09f10c3c2b5ac.jpg?height=568",
      "https://api.yeshtery.com/v1/yeshtery/files/31/hb6547-3-apparel-on-model-standard-view-white-691a6fcebdf8402d9d91c44019158c92.jpg?height=568",
    ],
  },
  {
    id: crypto.randomUUID(),
    productName: "ZX FTW PACK TEE",
    productPrice: 869,
    sizes: ["small", "medium", "Large", "X Large", "XX Large"],
    colors: [
      "../../../public/images/Group 354.png",
      "../../../public/images/Group 356.png",
    ],
    rates: 22,
    sale: 30,
    mainImg:
      "https://api.yeshtery.com/v1/yeshtery/files/31/gp1110-7.jpg?height=568",
    imgs: [
      "https://api.yeshtery.com/v1/yeshtery/files/31/gp1110-7.jpg?height=568",
      "https://api.yeshtery.com/v1/yeshtery/files/31/gp1110-5.jpg?height=568",
      "https://api.yeshtery.com/v1/yeshtery/files/31/gp1110-3.jpg?height=568",
      "https://api.yeshtery.com/v1/yeshtery/files/31/gp1110-9.jpg?height=568",
    ],
  },
];
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  addToCart = (productId) => {
    // console.log(productId);
    // console.log(this.state.cart);
    const foundProduct = this.state.cart?.find(
      (product) => product.id === productId
    );
    if (!foundProduct) {
      const newProduct = products.find((product) => product.id === productId);
      this.setState((currState) => {
        return { cart: [...currState.cart, { ...newProduct, quantity: 1 }] };
      });
      toast.success("Product Added To Cart Successfully");
    } else {
      this.setState((currState) => {
        const updatedCart = currState.cart.map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        return { cart: updatedCart };
      });
      // alert("Found and Added to Quantity");
    }
  };
  //
  deleteFromCart = (productId) => {
    this.setState((currState) => {
      return {
        cart: currState.cart.filter((product) => product.id !== productId),
      };
    });
    toast.success("Product Removed From Cart Successfully");
  };
  //
  removeFromQuantity = (productId) => {
    const foundProduct = this.state.cart?.find(
      (product) => product.id === productId
    );
    if (!foundProduct) {
      toast.error("This Product is not in Cart");
      return;
    } else {
      console.log(foundProduct);
      this.setState((currState) => {
        let updatedCart;
        if (foundProduct.quantity > 1) {
          updatedCart = currState.cart.map((product) =>
            product.id === productId
              ? { ...product, quantity: product.quantity - 1 }
              : product
          );
        }
        if (foundProduct.quantity === 1) {
          updatedCart = currState.cart.filter(
            (product) => product.id !== foundProduct.id
          );
        }
        return { cart: updatedCart };
      });
      console.log(this.state.cart);
      // this.setState((currState) => {
      //   const updatedCart = currState.cart.map((product) =>
      //     product.id === productId && product.quantity > 1
      //       ? { ...product, quantity: product.quantity - 1 }
      //       : product
      //   );
      //   return { cart: updatedCart };
      // });
      toast.success("Product Removed From Cart Successfully");
    }
  };

  render() {
    return (
      <>
        <Header />
        <Navbar deleteFromCart={this.deleteFromCart} cart={this.state.cart} />
        <Navs />
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route
            path="/product-details/:id"
            element={
              <ProductDetails
                removeFromQuantity={this.removeFromQuantity}
                cart={this.state.cart}
                addToCart={this.addToCart}
                products={products}
              />
            }
          />
        </Routes>
        <Footer />
        <Toaster />
      </>
    );
  }
}
