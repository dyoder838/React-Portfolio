import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import SexyBeast from "../../assets/imagetux.jpeg";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
  },
  media: {
    height: "30vw",
    
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={SexyBeast}
          title="tuxedo dan"
        />
      </CardActionArea>
    </Card>
  );
}