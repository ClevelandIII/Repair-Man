import { aboutData, homeData } from "../utils/data";
import React, { useState, useEffect } from "react";
import Picture from "../components/Picture";

const About = () => {
  const { header, about, pictureData } = aboutData[0];
  return (
    <div className="about">
      <div className="header">
        <h1 className="center">{header}</h1>
        {about.map((paragraph) => {
          return <p className='aboutMe'>{paragraph}</p>
        })}
      </div>
      {pictureData.map((info) => {
        const { img, name, words, side } = info;
        return <Picture img={img} name={name} info={words} side={side} />;
      })}
    </div>
  );
};

export default About;
