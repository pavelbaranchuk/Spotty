import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const styles = {
  title: {
    textAlign: "center",
    padding: "1rem 0 1rem 0"
  },
  link: {
    textDecoration: "none"
  },
  imageWrapper: {
    position: "relative",
    paddingTop: "100%"
  },
  media: {
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    height: "auto"
  }
};

function AboutCard({ classes, person }) {
  return (
    <a className={classes.link} href={"https://github.com/" + person}>
      <Card>
        <CardActionArea>
          <CardContent>
            <div className={classes.imageWrapper}>
              <CardMedia
                className={classes.media}
                component="img"
                image={"https://github.com/" + person + ".png?size=400"}
              />
            </div>
            <Typography className={classes.title} component="h2" variant="h6">
              {person}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </a>
  );
}

AboutCard.propTypes = {
  classes: PropTypes.object.isRequired,
  person: PropTypes.string.isRequired
};

export default withStyles(styles)(AboutCard);
