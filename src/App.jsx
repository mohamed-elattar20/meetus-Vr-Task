import { Component } from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Navs from "./components/Navs/Navs";
import ProductDetails from "./components/ProductDetails/ProductDetails";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Navbar />
        <Navs />
        <ProductDetails />
      </>
    );
  }
}
