import React from "react";
// import { useParams } from "react-router-dom";

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataLoaded: false, image_url: "" };
  }

  componentDidMount() {
    this.Fetchperson();
  }

  Fetchperson = () => {
    fetch("https://fakeface.rest/face/json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ ...data, dataLoaded: true });
      });
  };

  render() {
    const { dataLoaded, image_url: imageUrl } = this.state; // eslint-disable-line
    return (
      <div className="app">
        <div className="card">
          {dataLoaded ? (
            <img className="heading" src={imageUrl || ""} alt="Coucou" />
          ) : null}
          <button
            type="submit"
            className="button"
            onClick={() => this.Fetchperson()}
          >
            <span>GIVE ME SOMEONE!</span>
          </button>
        </div>
      </div>
    );
  }
}

// const { advice } = useParams();

export default Person;
