import React from "react";

class Birthdayselector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      day: 1,
      month: "january",
    };
    this.monthArr = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "november",
      "december",
    ];

    this.monthPlus = this.monthPlus.bind(this);
  }

  monthPlus(actM) {
    const actIndex = this.monthArr.indexOf(actM);
    if (actIndex < 12) {
      this.setState({
        month: this.monthArr[actIndex],
      });
    }
  }

  render() {
    const { day, month } = this.state;

    return (
      <div>
        BIRTHDAYSELECTOR
        <p>
          {day}
          {month}
        </p>
      </div>
    );
  }
}

export default Birthdayselector;
