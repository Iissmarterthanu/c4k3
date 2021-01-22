import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CollectionTab from './components/ProductTabs';
import Footer from './components/Footer';

// load product data
import { productGroups, productData, itemData } from './assets/shop.data';
import ProductTabs from './components/ProductTabs';

const useStyles = makeStyles({});
console.log(productGroups);


function App() {
  const classes = useStyles();
  
  return (
    <div className={classes.container}>
      <Header />
      <ProductTabs groups={productGroups} ></ProductTabs>
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact from="/Shop" render={props => <CollectionTab {...props} />} />
        <Route exact path="/contact" render={props => <Contact {...props} />} />
        <Route exact path="/about" render={props => <About {...props} />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
