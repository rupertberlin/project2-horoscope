import React from "react";
import { signData } from "@assets/signsData";
import propTypes from "prop-types";

class Birthdaysign extends React.Component {
  constructor(props) {
    super(props);

    /* A year is needed to get a comparable Date.parse timestamp */
    this.year = 2001;
  }

  componentDidUpdate(prevProps) {
    const { day, month, setSign } = this.props;

    if (prevProps.day !== day || prevProps.month !== month) {
      /* change year for Date.parse so that is is one year upper
        for capricorn" till pisces */
      if (Date.parse(`${month} ${day}, 2000`) > Date.parse("March 20, 2000"))
        this.year = "2000";
      else this.year = "2001";

      const parsePicker = Date.parse(`${month} ${day}, ${this.year}`);

      for (let i = 0; i < signData.length; i += 1) {
        const parseStart = Date.parse(signData[i].start);
        const parseEnd = Date.parse(signData[i].end);

        if (parsePicker >= parseStart && parsePicker <= parseEnd) {
          setSign(signData[i].sign);
        }
      }
    }
  }

  render() {
    const { sign } = this.props;

    return (
      <div>
        <img
          src={`../src/assets/signs-small/${sign}.png`}
          alt={`Astro Sign ${sign}`}
        />
      </div>
    );
  }
}

Birthdaysign.propTypes = {
  day: propTypes.number.isRequired,
  month: propTypes.string.isRequired,
  sign: propTypes.string.isRequired,
  setSign: propTypes.func.isRequired,
};

export default Birthdaysign;
