import React from "react";
import "@components/DailyHoroscope.css";
import { useParams, Link } from "react-router-dom";

function DailyHoroscope() {
  const [json, setJson] = React.useState("");
  const { date, sign } = useParams();

  React.useEffect(() => {
    const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=${date}`;
    fetch(URL, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        setJson(data);
      });
  }, [date]);

  return (
    <div className="daily-horoscope">
      <div className="lucky-number">{json.lucky_number}</div>
      <p className="p-lucky">Lucky number</p>
      <h3 className="daily-title">
        {sign}
        <br />
        {json.date_range}
      </h3>
      <h2>
        {date === "today" ? "Today`s" : "Tomorrow`s"} Horoscope (
        {json.current_date})
      </h2>
      <p>{json.description}</p>
      <Link to="/">
        <button type="button">Back</button>
      </Link>
      <Link
        to={`../daily-horoscope/${
          date === "today" ? "tomorrow" : "today"
        }/${sign}`}
      >
        <button type="button">
          {date === "today" ? "tomorrow ➡️" : "⬅️ today"}
        </button>
      </Link>
    </div>
  );
}

export default DailyHoroscope;
