import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import "@components/Celebritylookup.css";
import Birthdaysign from "./Birthdaysign";

class Celebritylookup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      json: { error: "Invalid parameters." },
      input: "",
      clickedName: false,
      showSign: false,
      month: 1,
      day: 1,
      name: "",
    };

    this.clickLookup = this.clickLookup.bind(this);
    this.clickAutoFind = this.clickAutoFind.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /*   Reset astro sign state on load */
  componentDidMount() {
    const { setSign } = this.props;
    setSign("");
  }

  /*   Does an API fetch for every input change */
  componentDidUpdate(prevProps, prevState) {
    const { input, json } = this.state;
    if (prevState.input !== input) {
      const URL = `https://celebrity-by-api-ninjas.p.rapidapi.com/v1/celebrity?name=${input}`;
      if (input) {
        fetch(URL, {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "celebrity-by-api-ninjas.p.rapidapi.com",
            "X-RapidAPI-Key":
              "201c4b515cmsh50fbbc704410b18p1eb192jsnd98dfadf24d9",
          },
        })
          .then((response) => response.json())
          .then((jsonData) => {
            this.setState({ json: jsonData });
          });
      }
    }
    if (json.length !== prevState.json.length) {
      if (json.length > 1) this.setState({ clickedName: false });
    }
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  /*   Sets states for name day and month to celebritys data */
  clickLookup(name) {
    const { json } = this.state;

    let index = 0;

    /* sets index of choosen name in json */
    for (let i = 0; i < json.length; i += 1) {
      if (name === json[i].name) index = i;
    }

    /* Capitalize first letter of celebritys name parts */
    let celebrity = json[index].name.split(" ");
    for (let i = 0; i < celebrity.length; i += 1) {
      celebrity[i] =
        celebrity[i].charAt(0).toUpperCase() + celebrity[i].slice(1);
    }
    celebrity = celebrity.join(" ");

    /* seperate day and month from birthday */
    const dateArr = json[index].birthdy.split("-");

    this.setState({
      showSign: true,
      month: dateArr[1],
      day: Number(dateArr[2]),
      name: celebrity,
      clickedName: true,
    });
  }

  clickAutoFind(name) {
    this.setState({
      input: name,
    });
    this.clickLookup(name);
  }

  render() {
    const { json, input, clickedName, showSign, month, day, name } = this.state;
    const { sign, setSign } = this.props;

    return (
      <div>
        <h3> Who`s astro-sign you want to know?</h3>
        <div className="input-line">
          <input
            type="text"
            name="celebrity"
            value={input}
            placeholder="e.g. Britney Spears"
            onChange={(e) => this.handleChange(e)}
            autoComplete="off"
          />

          {!json.error && !clickedName && (
            <div className="auto-find">
              <div className="auto-find-line no-hover">
                Type in a name and click:
              </div>
              {json.map((item, index) => {
                if (/^[0-9*]/gi.test(item.birthdy) && index < 4) {
                  return (
                    <div
                      role="button"
                      className="auto-find-line"
                      key={item.name}
                      onClick={() => this.clickAutoFind(item.name)}
                      onKeyDown={() => this.clickAutoFind(item.name)}
                      tabIndex={0}
                    >
                      {item.name}
                    </div>
                  );
                }
                return null;
              })}
              <div className="auto-find-line no-hover">
                {json.length > 3 ? "..." : ""}
              </div>
            </div>
          )}
        </div>
        {showSign && <p>The astro-sign of {name} is:</p>}
        {showSign && (
          <Birthdaysign sign={sign} setSign={setSign} month={month} day={day} />
        )}
        <br />
        <Link to="/">
          <button type="button">Back</button>
        </Link>
        <br />
        &nbsp;
      </div>
    );
  }
}

Celebritylookup.propTypes = {
  sign: propTypes.string.isRequired,
  setSign: propTypes.func.isRequired,
};

export default Celebritylookup;
