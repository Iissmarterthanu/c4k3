import React from "react";
import ProductTabs from "../components/ProductTabs";
import { productGroups, productData, itemData } from '../assets/shop.data';

const Shop = () => {
  return (
    <div>
      <ProductTabs groups={productGroups} ></ProductTabs>
    </div>
  );
};

export default Shop;
