import React from "react";
// import { useParams } from "react-router-dom";
import "./Advice.css";

class Advice extends React.Component {
  constructor(props) {
    super(props);
    this.state = { advice: "" };
  }

  componentDidMount() {
    this.FetchAdvice();
  }

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
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button
            type="submit"
            className="button"
            onClick={() => this.FetchAdvice()}
          >
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

// const { advice } = useParams();

export default Advice;
