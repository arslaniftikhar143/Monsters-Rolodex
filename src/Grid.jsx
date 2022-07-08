import React from "react";
import "./grid.css";
function Grid() {
  const Nums = ["1", "2", "3", "4", "5", "6"];
  return (
    <div className="grid__container">
      {Nums.map((card) => {
        return <Card img={card} />;
      })}
    </div>
  );
}

export default Grid;

function Card({ img }) {
  return (
    <div className="items">
      <div className="items--heading">Heading</div>
      <div className="items--pic">
        <img
          src={`https://robohash.org/${img}?set=set2&size=180x180`}
          alt="Monster Picture"
        />
      </div>
      <div className="items--info">Info</div>
    </div>
  );
}
