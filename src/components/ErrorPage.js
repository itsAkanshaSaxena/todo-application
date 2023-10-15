import React, { useState } from "react";
import NavBar from "./navbar";
import image1 from './image1.png'

const ErrorPage = () => {
  return (
    <>
      <NavBar />

      <h1 className="editerrorpg">Requested route does not exists  :(</h1>
    
      <img src={image1} className="App-logo" alt="logo"  />
    </>
  );
};

export default ErrorPage;