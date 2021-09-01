import { homeData } from "../utils/data";
import React, { useState, useEffect } from "react";
import Picture from "../components/Picture";

const home = () => {
  const { companyName, mainPicture, pictureData } = homeData[0];
  return (
    <div className="home">
      <div className="header">
        <h1 className="center">{companyName}</h1>
        <div className="img">
          <img src={mainPicture} alt="Big Picture" className="BigPic" />
        </div>
      </div>
      {pictureData.map((info) => {
        const { img, name, words, side } = info;
        return <Picture img={img} name={name} info={words} side={side} />;
      })}
    </div>
  );
};

export default home;
