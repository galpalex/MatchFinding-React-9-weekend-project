import React from "react";
import data from "./data";

const Item = ({ myState }) => {
  return (
    <div>
      {data.map((picture, index) => {
        return (
          <div
            key={picture.id}
            className={myState === index + 1 ? "slide active-anim" : "slide"}
          >
            <img
              src={
                process.env.PUBLIC_URL + `/assets/images/img${index + 1}.jpg`
              }
              alt="dog pic"
            />
            <h1>{data[index].title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Item;
