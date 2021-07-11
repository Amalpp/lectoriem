import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <div className="content">
        <img
          src={process.env.PUBLIC_URL + "/amal-book-cover.png"}
          width="100%"
          alt="homeImage"
        />
      </div>
    </div>
  );
};

export default Banner;
