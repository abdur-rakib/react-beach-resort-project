import React from "react";
import loading from "../images/gif/loading-arrow.gif";

const Loading = () => {
  return (
    <div className="loading">
      <h4>rooms data loading ...</h4>
      <img src={loading} alt="" />
    </div>
  );
};

export default Loading;
