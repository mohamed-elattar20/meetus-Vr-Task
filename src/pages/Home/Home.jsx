import { Component } from "react";
import Products from "../../components/Products/Products";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="container my-5">
          <div className="row">
            <Products products={this.props.products} />
          </div>
        </div>
      </>
    );
  }
}
