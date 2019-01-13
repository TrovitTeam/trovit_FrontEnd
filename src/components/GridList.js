import React from "react";
import ProductCard from "./products/ProductCard";
import "../styles/gridList.css";

const GridList = props => {
  let renderList = [];

  if (props.list) {
    renderList = props.list.map(item => {
      return (
        <div key={item.id}>
          <ProductCard product={item} />
        </div>
      );
    });
  }

  return (
    <div>
      <div className="grid-list">{renderList}</div>
    </div>
  );
};

export default GridList;
