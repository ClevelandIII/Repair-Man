import React, { useState, useEffect } from "react";

const Picture = ({ img, name, info, side }) => {
  return (
    <>
      {side === "left" ? (
        <div className="picture">
          <img src={img} alt={name} />
          <p>{info}</p>
        </div>
      ) : (
        <div className="picture">
          <p>{info}</p>
          <img src={img} alt={name} />
        </div>
      )}
    </>
  );
};

export default Picture;
