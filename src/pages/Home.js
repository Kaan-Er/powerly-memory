import React, { Fragment } from "react";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <Fragment className="container">
      <Navbar />
      <Main />
    </Fragment>
  );
};

export default Home;
