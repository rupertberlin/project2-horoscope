import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import propTypes from "prop-types";

// pass props from parent to child

function ParentListOFSigns() {
  return (
    <div>
      <h3>I am a list of signs:</h3>
      <ChildSign
        name="Aries"
        description="blablaARIESbla"
        image=""
        info="some Aries info"
      />
      <ChildSign
        name="Leo"
        description="blablaLEOblabla"
        image=""
        info="some Leo info"
      />
      <ChildSign
        name="Libra"
        description="blablaLIBRAblabla"
        image=""
        info="some Libra info"
      />
      <ChildSign
        name="Fish"
        description="blablaFISHblabla"
        image=""
        info="some Fish info"
      />
    </div>
  );
}

function ChildSign(props) {
  const sendInfo = (info) => alert(info);

  const { image, name, description, info } = props;

  return (
    <Card
      className="Card"
      sx={{ maxWidth: 345 }}
      style={{ backgroundColor: "blue" }}
    >
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
        src={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => sendInfo(info)} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

ChildSign.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  info: propTypes.string.isRequired,
};

export default ParentListOFSigns;
