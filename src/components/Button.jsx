import React from "react";

const Button = ({ callback, label, smiley, myState }) => {
  return (
    <div>
      <button onClick={callback} disabled={myState}>
        <span aria-label={`${label}`} role="img">
          {smiley}
        </span>
      </button>
    </div>
  );
};

export default Button;
