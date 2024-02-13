import { Component } from "react";
import ProductCard from "../ProductCard/ProductCard";

export default class Products extends Component {
  render() {
    console.log(this.props.products);
    return (
      <>
        {this.props.products?.map((product) => (
          <div key={product.id} className="col-sm-12 col-md-6 col-lg-3">
            <ProductCard product={product} />
          </div>
        ))}
      </>
    );
  }
}
