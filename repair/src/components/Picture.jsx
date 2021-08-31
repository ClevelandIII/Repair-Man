import React, { useState, useEffect } from "react";

const Picture = ({ img, name, info, side }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      {side === "left" ? (
        <div className="picture">
          <img src={img} alt={name} />
          <p>
            {" "}
            {readMore ? info : `${info.substring(0, 200)}... `}
            <button
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              {readMore ? "show less" : "show more"}
            </button>
          </p>
        </div>
      ) : (
        <div className="picture">
          <p>
            {" "}
            {readMore ? info : `${info.substring(0, 200)}... `}
            <button
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              {readMore ? "show less" : "show more"}
            </button>
          </p>
          <img src={img} alt={name} />
        </div>
      )}
    </>
  );
};

export default Picture;
