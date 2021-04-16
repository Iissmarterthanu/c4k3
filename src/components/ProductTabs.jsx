import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { productGroups, productData, itemData } from '../assets/shop.data';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  withRouter
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));


const ProductTabs = (props) => {
  // console.log(props);
  const { groups } = props;
  const { history } = props;
  console.log(history);

  const [anchorEl, setAnchorEl] = React.useState(null);


  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleMenuClick = pageURL => {
    console.log(pageURL);
    // history.push(pageURL);
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let { path, url } = useRouteMatch();
  // console.log(path, url);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          {groups.map( item => { 
            return (
                <Tab 
                  label={item.name} 
                  onClick={() => {console.log(`/shop/${item.name}`);
                    history.push(`/shop/${item.name}`)
                  }}
                />
            )
          })}

        </Tabs>
      </AppBar>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic path={`${path}/:topicId`} />
        </Route>
      </Switch>

      <Box p={3}>
        <Typography>menu {value} group {productGroups[value].group} </Typography>

      </Box>

    </div>
  );
}

function Topic(props) {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  console.log('topic ',props);
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}


export default withRouter(ProductTabs);