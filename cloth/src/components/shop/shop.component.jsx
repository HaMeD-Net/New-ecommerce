import SHOP_DATA from "./shop.data";
import React from "react";

const ShopPage = () => {
  const shopState = {
    collections: SHOP_DATA,
  };
  return shopState.collections.map((item) => (
    <div key={item.id}>{item.title}</div>
  ));
};
export default ShopPage;
