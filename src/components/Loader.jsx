import React from "react";
import { giphy } from "../assets";

const Loader = () => {
  return (
    <div className="loader">
      <img className="pikaLoader" src={giphy} alt="loader" />
    </div>
  );
};

export default Loader;
