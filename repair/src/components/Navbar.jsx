import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, socials } from "../utils/const";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={'na'} alt="logo" className="logo" />
          <button
            className="nav-toggle"
            onClick={() => {
              setShowLinks(!showLinks);
            }}
          >
            <FaBars />
          </button>
        </div>
        <div className={`links-container ${showLinks && "show"}`}>
          <ul className="links">
            {links
              .filter((link) => link.text !== "error")
              .map((link) => {
                const { url, id, text } = link;
                return (
                  <li key={id}>
                    <Link to={url}>{text}</Link>
                  </li>
                );
              })}
          </ul>
          </div>
          <ul className={`socials ${showLinks && "show"}`}>
            {socials.map((social) => {
              const { url, id, icon } = social;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
      </div>
    </div>
  );
};
