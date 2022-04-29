import React from "react";

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = { advice: "", dataLoaded: false, image_url: "" };
  }


  componentDidMount() {
    this.Fetchperson(), 
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
      <div className="app">
        <div className="card">
          <button
            type="submit"
            className="button"
            onClick={() => {
                {this.Fetchperson()}
                {this.FetchAdvice()}
            }}
          >
            <span>GIVE ME SOMEONE!</span>
          </button>
        </div>
        <div>
          {dataLoaded ? (
            <img className="heading" src={imageUrl || ""} alt="Coucou" />
          ) : null}
          </div> 
        <div>{advice}</div>
      </div>
    );
  }
}

export default Random;
