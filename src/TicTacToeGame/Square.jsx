import React from "react";

const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        border: "3px solid red",
        height: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      className="square"
    >
      <h5>{props.value}</h5>
    </div>
  );
};

export default Square;
