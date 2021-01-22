import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from '@material-ui/core';
import ItemCard from "./ItemCard1";

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


const HomeModels = () => {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <Typography align="center" variant="h4" color="textSecondary">
          Our Products
        </Typography>

        <Grid container
          justify="flex-start"
          spacing={4}
          className={classes.grid}>
          <Grid item xs={12} sm={6} md={4} lg={3} >
            <ItemCard />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} >
            <ItemCard />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} >
            <ItemCard />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} >
            <ItemCard />
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}


export default HomeModels