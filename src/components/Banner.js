import React from "react";

const Banner = ({ children, title, subtitle }) => {
  return (
    <div className="banner">
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
};

export default Banner;
