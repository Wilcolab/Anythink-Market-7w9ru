import React from "react";
import logo from "../../imgs/logo.png";

export const SearchBox = (props) => {
  const changeHandler = (ev) => {
    ev.preventDefault();
    console.log(ev.target.value);
  };
  return <input id="search-box" onChange={changeHandler}></input>;
};

const Banner = () => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <SearchBox></SearchBox>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
