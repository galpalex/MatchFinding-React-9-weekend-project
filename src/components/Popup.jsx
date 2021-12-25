import React from "react";
import "./Popup.css";

const Popup = ({ myClass, myLink, myWidth, myHeight, text, myState }) => {
  return (
    <>
      {myState && (
        <div className={`${myClass}`}>
          <iframe
            title="This is a unique title"
            src={`${myLink}`}
            width={`${myWidth}`}
            height={`${myHeight}`}
            frameBorder="0"
            className="giphy-embed"
          ></iframe>
          <h2>{text}</h2>
        </div>
      )}
    </>
  );
};

export default Popup;
