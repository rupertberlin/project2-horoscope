import React from "react";

class Birthdayselector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      day: 1,
      month: [
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
      ],
    };
  }

  render() {
    const { day, month } = this.state;
    return (
      <div>
        BIRTHDAYSELECTOR
        <p>
          {day}
          {month[1]}
        </p>
      </div>
    );
  }
}

export default Birthdayselector;
