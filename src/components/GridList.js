import React from "react";
import ProductCard from "./products/ProductCard";
import "../styles/gridList.css";

const GridList = props => {
  let renderList = [];
  console.log("props");
  console.log(props);
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
      <div
        className="grid-list"
        style={{
          gridTemplateColumns: `repeat(auto-fill, minmax(${
            props.col == 3 ? "500px" : "300px"
          }, 1fr))`
        }}>
        {renderList}
      </div>
    </div>
  );
};

export default GridList;
