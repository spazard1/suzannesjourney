import React from "react";

import cover from "./cover.jpg";

import "./Home.css";

const Home = () => {

  return (
    <div className="homeContainer">
      <div className="mainTitle">
        <div>Suzanne's Journey</div>
        <div className="mainSubTitle">Stories and Poems by Suzanne Nelson</div>
      </div>
      <div className="coverPhoto"><img src={cover} alt="cover"/></div>
    </div>
  );
};

export default Home;