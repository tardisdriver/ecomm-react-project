import React from "react";
import SHOP_DATA from "./shopData";

class ShopPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    return <div>SHOP PAGE</div>;
  }
}
