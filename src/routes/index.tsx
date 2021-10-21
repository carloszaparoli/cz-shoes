import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from '../pages/Cart';
import CompletedPurchase from '../pages/CompletedPurchase';
import Products from '../pages/Products';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/success" component={CompletedPurchase} />
      <Route exact path="/" component={Products} />
    </Switch>
  );
}
