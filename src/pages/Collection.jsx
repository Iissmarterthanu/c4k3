import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper } from '@material-ui/core';

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

function Collection(props) {
  // console.log(props);
  const { filter } = props;
  const classes = useStyles();
  
  return (
    <Container>
      <Grid container
        justify="flex-start"
        spacing={4}
        className={classes.grid}>
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Paper className={classes.paper}>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Paper className={classes.paper}>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Paper className={classes.paper}>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Paper className={classes.paper}>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Paper className={classes.paper}>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Paper className={classes.paper}>1</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Collection;