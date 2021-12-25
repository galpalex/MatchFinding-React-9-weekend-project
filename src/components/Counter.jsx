import React from "react";

const Counter = ({ myClass, myState, label, smiley }) => {
  return (
    <div>
      <div className={`${myClass}`}>
        <span aria-label={`${label}`} role="img">
          {smiley}
        </span>
        {myState}
      </div>
    </div>
  );
};

export default Counter;
