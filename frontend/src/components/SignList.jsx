import React from "react";
import { Link } from "react-router-dom";
import "./Birthdaysign.css";

function SignList() {
  const signs = [
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius",
    "capricorn",
    "aquarius",
    "pisces",
  ];

  return (
    <div className="sign-list-container">
      {signs.map((item) => {
        return (
          <Link key={item} to={`/zodiac-signs/information/${item}`}>
            <img
              className="sign-img"
              src={`../src/assets/signs-small/${item}.png`}
              alt={item}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default SignList;
