import "@components/face.css";
import React from "react";
import axios from "axios";
//import ThisPersonDoesNotExist from 'thispersondoesnotexist-js';



//const dnte = new ThisPersonDoesNotExist();


class Face extends React.Component {
  constructor() {
    super();
    this.state = { face: "" };
  }

  componentDidMount() {
    this.fetchFace();
  }

  fetchFace = () => {
    fetch("https://fakeface.rest/face/json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ ...data, dataLoaded: true });
      });

  


    }

  render() {
    const { dataLoaded, image_url: imageUrl } = this.state; // eslint-disable-line


    return (
      <div className="app">
        <div className="card">
          
          {dataLoaded ? (
            <img src={imageUrl || ""}  />
          ) : null}

          <button onClick={this.fetchFace} type="button">
            <span>SHOW ME A RANDOM FACE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Face;