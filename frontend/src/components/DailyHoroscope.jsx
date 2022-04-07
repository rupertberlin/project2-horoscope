import propTypes from "prop-types";
import React from "react";
import "@components/DailyHoroscope.css";

class DailyHoroscope extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      json: {},
    };
  }

  componentDidMount() {
    const { sign } = this.props;
    const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=today`;
    fetch(URL, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ json });
      });
  }

  render() {
    const { sign, setShowDaily } = this.props;
    const { json } = this.state;
    return (
      <div className="daily-horoscope">
        <div className="lucky-number">{json.lucky_number}</div>
        <p className="p-lucky">Lucky number</p>
        <h3>
          {sign}
          <br />
          {json.date_range}
        </h3>
        <h2>Today`s Horoscope ({json.current_date})</h2>
        <p>{json.description}</p>
        <button type="button" onClick={setShowDaily}>
          Back
        </button>
        <button type="button">tomorrow ➡️</button>
      </div>
    );
  }
}

DailyHoroscope.propTypes = {
  sign: propTypes.string.isRequired,
  setShowDaily: propTypes.func.isRequired,
};

export default DailyHoroscope;
