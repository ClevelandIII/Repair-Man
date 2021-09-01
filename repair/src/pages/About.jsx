import { aboutData, homeData } from "../utils/data";
import React, { useState, useEffect } from "react";
import Picture from "../components/Picture";

const About = () => {
  const { aboutMe, mainPicture, pictureData } = aboutData[0];
  return (
    <div className="home">
      <div className="header">
        <h1 className="center">{aboutMe}</h1>
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

export default About;
