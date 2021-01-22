import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import myImage from "../assets/img/bg.jpg";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: '100%',
    margin: '10px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: theme.palette.success.light
  }
}));

function HomeBanner() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container
        justify="flex-start"
        spacing={4}
        className={classes.grid}>
        <Grid item xs={12} >

          <CardMedia
            component="img"
            alt="banner"
            height="240"
            image={myImage}
            title="c4k banner 2021"
          />

        </Grid>
      </Grid>
    </Container>
  );
}

export default HomeBanner;