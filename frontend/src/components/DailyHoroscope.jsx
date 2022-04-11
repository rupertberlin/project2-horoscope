import propTypes from "prop-types";
import React from "react";
import "@components/DailyHoroscope.css";

class DailyHoroscope extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      json: {},
      targetDay: "today",
    };

    this.setTargetDay = this.setTargetDay.bind(this);
  }

  componentDidMount() {
    const { sign } = this.props;
    const { targetDay } = this.state;
    const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=${targetDay}`;
    fetch(URL, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ json });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { targetDay } = this.state;
    if (prevState.targetDay !== targetDay) {
      const { sign } = this.props;
      const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=${targetDay}`;
      fetch(URL, {
        method: "POST",
      })
        .then((response) => response.json())
        .then((json) => {
          this.setState({ json });
        });
    }
  }

  setTargetDay() {
    const { targetDay } = this.state;

    if (targetDay === "today") this.setState({ targetDay: "tomorrow" });
    else this.setState({ targetDay: "today" });
  }

  render() {
    const { sign, setShowDaily } = this.props;
    const { json, targetDay } = this.state;
    return (
      <div className="daily-horoscope">
        <div className="lucky-number">{json.lucky_number}</div>
        <p className="p-lucky">Lucky number</p>
        <h3>
          {sign}
          <br />
          {json.date_range}
        </h3>
        <h2>
          {targetDay === "today" ? "Today`s" : "Tomorrow`s"} Horoscope (
          {json.current_date})
        </h2>
        <p>{json.description}</p>
        <button type="button" onClick={setShowDaily}>
          Back
        </button>
        <button type="button" onClick={this.setTargetDay}>
          {targetDay === "today" ? "tomorrow ➡️" : "⬅️ today"}
        </button>
      </div>
    );
  }
}

DailyHoroscope.propTypes = {
  sign: propTypes.string.isRequired,
  setShowDaily: propTypes.func.isRequired,
};

export default DailyHoroscope;
