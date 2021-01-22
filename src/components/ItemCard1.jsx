import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ItemHoverImage from './ItemHoverImage';

const useStyles = makeStyles({
  root: {
    maxWidth: 640,
  },
});

const ItemCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Typography color="textSecondary" gutterBottom variant="h6" component="h2">
          Collar & Bow Tie
        </Typography>

        <ItemHoverImage />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Martingale collar with a stylish Snap-on Bow Tie.
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          See more
        </Button>
      </CardActions> */}
    </Card>
  );
}

export default ItemCard;