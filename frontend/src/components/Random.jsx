import React from "react";
import { Link } from "react-router-dom";
import "./Mondrian.css";

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = { advice: "", dataLoaded: false, image_url: "" };
  }

  componentDidMount() {
    this.Fetchperson();
    this.FetchAdvice();
  }

  Fetchperson = () => {
    fetch("https://fakeface.rest/face/json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ ...data, dataLoaded: true });
      });
  };

  FetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice", {
      cache: "no-cache",
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState(data.slip);
      });
  };

  render() {
    const { advice, dataLoaded, image_url: imageUrl } = this.state; // eslint-disable-line
    return (
      <div className="parent">
        <ul>
          <li />
          <li />
          <li />
          <li />
          <li />
          <li className="boxAdvice">
            <p className="text">{advice}</p>
          </li>
          <li>
            {dataLoaded ? (
              <img className="boximage" src={imageUrl || ""} alt="Coucou" />
            ) : null}
          </li>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li className="boxButton">
            <button
              type="submit"
              className="button"
              onClick={() => {
                this.Fetchperson();
                this.FetchAdvice();
              }}
            >
              <span className="textButton">Click ma gâtée</span>
            </button>
          </li>
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    );
  }
}

export default Random;
