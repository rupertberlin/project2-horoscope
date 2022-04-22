import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import Birthdaysign from "./Birthdaysign";
import "@components/Birthdayselector.css";

class Birthdayselector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      day: 1,
      month: "January",
      dropDownMonth: false,
      dropDownDay: false,
    };
    this.monthArr = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    this.dayArr = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ];

    this.pullDropDownMonth = this.pullDropDownMonth.bind(this);
    this.pullDropDownDay = this.pullDropDownDay.bind(this);
    this.chooseDropDownMonth = this.chooseDropDownMonth.bind(this);
    this.chooseDropDownDay = this.chooseDropDownDay.bind(this);
    this.monthPlus = this.monthPlus.bind(this);
    this.monthMinus = this.monthMinus.bind(this);
    this.dayPlus = this.dayPlus.bind(this);
    this.dayMinus = this.dayMinus.bind(this);
  }

  pullDropDownMonth() {
    this.setState({ dropDownMonth: true });
  }

  pullDropDownDay() {
    this.setState({ dropDownDay: true });
  }

  chooseDropDownMonth(month) {
    this.setState({
      month,
      dropDownMonth: false,
    });
  }

  chooseDropDownDay(day) {
    this.setState({
      day,
      dropDownDay: false,
    });
  }

  monthPlus(actM) {
    const actIndex = this.monthArr.indexOf(actM.month);
    if (actIndex < 11) {
      this.setState({
        month: this.monthArr[actIndex + 1],
      });
    }
  }

  monthMinus(actM) {
    if (actM.month !== "January") {
      const actIndex = this.monthArr.indexOf(actM.month);
      this.setState({
        month: this.monthArr[actIndex - 1],
      });
    }
  }

  dayPlus() {
    const { day, month } = this.state;

    if (Date.parse(`${month} ${day + 1}, 2000`)) {
      this.setState({
        day: day + 1,
      });
    }
  }

  dayMinus() {
    const { day } = this.state;
    if (day !== 1) {
      this.setState({
        day: day - 1,
      });
    }
  }

  render() {
    const { day, month, dropDownMonth, dropDownDay } = this.state;
    const { sign, setSign } = this.props;

    return (
      <div>
        <h2>Your Birthday</h2>
        <div className="birthday-selector">
          <div className="flex-column">
            <span className="month-selector">
              <div
                className="month-minus plus-minus"
                onClick={() => this.monthMinus({ month })}
                onKeyDown={() => this.monthMinus({ month })}
                role="button"
                tabIndex={0}
              >
                -
              </div>
              <div
                role="button"
                onClick={this.pullDropDownMonth}
                onKeyDown={this.pullDropDownMonth}
                tabIndex={0}
                className="month-value value"
              >
                {month}
              </div>
              <div
                className="month-plus plus-minus"
                onClick={() => this.monthPlus({ month })}
                onKeyDown={() => this.monthPlus({ month })}
                role="button"
                tabIndex={0}
              >
                +
              </div>
            </span>
            {dropDownMonth && (
              <div>
                <ul className="month-dropdown">
                  {this.monthArr.map((item) => {
                    return (
                      <li>
                        <div
                          role="button"
                          onClick={() => this.chooseDropDownMonth(item)}
                          onKeyDown={() => this.chooseDropDownMonth(item)}
                          tabIndex={0}
                        >
                          {item}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
          <div className="flex-column">
            <span className="day-selector">
              <div
                className="day-minus plus-minus"
                onClick={this.dayMinus}
                onKeyDown={this.dayMinus}
                role="button"
                tabIndex={0}
              >
                -
              </div>
              <div
                role="button"
                onClick={this.pullDropDownDay}
                onKeyDown={this.pullDropDownDay}
                tabIndex={0}
                className="day-value value"
              >
                {day}
              </div>
              <div
                className="day-plus plus-minus"
                onClick={this.dayPlus}
                onKeyDown={this.dayPlus}
                role="button"
                tabIndex={0}
              >
                +
              </div>
            </span>
            {dropDownDay && (
              <div>
                <ul className="day-dropdown">
                  <div>
                    {this.dayArr.map((item) => {
                      return (
                        <li>
                          <i
                            role="button"
                            onClick={() => this.chooseDropDownDay(item)}
                            onKeyDown={() => this.chooseDropDownDay(item)}
                            tabIndex={0}
                          >
                            {item}
                          </i>
                        </li>
                      );
                    })}
                  </div>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div>
          <Birthdaysign sign={sign} setSign={setSign} month={month} day={day} />
        </div>
        <Link to="./celebrity-lookup">
          You want to ask for a celebritys astro sign?
        </Link>
      </div>
    );
  }
}

Birthdayselector.propTypes = {
  sign: propTypes.string.isRequired,
  setSign: propTypes.func.isRequired,
};

export default Birthdayselector;
