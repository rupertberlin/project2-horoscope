import React from "react";
import { useParams, Link } from "react-router-dom";
import "@components/DetailSign.css";

function DetailSign() {
  const { sign } = useParams();

  const [json, setJson] = React.useState({
    data: [{ sign: "", description: "loading..." }],
  });

  const renderInfo = () => {
    try {
      const URL = `http://localhost:5000/api/zodiac-signs?sign=${sign}`;
      fetch(URL, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setJson(data);
        });
    } catch (err) {
      setJson({ data: [{ sign: "ERR", description: err }] });
    }
  };

  React.useEffect(() => {
    renderInfo();
  }, []);

  return (
    <div className="detail-container">
      <h3 className="detail-sign">{json.data[0].sign}</h3>
      <p className="detail-description">{json.data[0].description}</p>
      <Link to="/zodiac-signs/information">Back</Link>
    </div>
  );
}

export default DetailSign;
