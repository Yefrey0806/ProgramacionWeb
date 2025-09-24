import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import guacamaya from "../../assets/img/guacamaya.jpg";
import "./CardSection.css";

const CardSection = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="Guacamaya" image={guacamaya} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title ? data.title : "No hay titulo"}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {data.content ? data.content : "No hay datos"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CardSection;
