import React from "react";
import "./Trending.css";
import Item from "../Item/Item";
import trending from "../Assets/data";

const Trending = () => {
  return (
    <div className="trending">
      <h1>TRENDING PRODUCTS</h1>
      <hr />
      <div className="trending-item">
        {trending.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
