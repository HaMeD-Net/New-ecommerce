import SHOP_DATA from "./shop.data";
import React from "react";
import CollectionPreview from "../collection.preview/collection.preview.component";

const ShopPage = () => {
  // const shopState = {
  //   collections: SHOP_DATA,
  // };

  return (
    <div className="shop-page">
      {SHOP_DATA.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
export default ShopPage;
