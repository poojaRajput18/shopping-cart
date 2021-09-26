import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import AddToCart from "./components/AddToCart";
import CartContextProvider from "./components/CartContextProvider";
import ViewCart from "./components/ViewCart";

const App = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <CartContextProvider> <AddToCart/></CartContextProvider>}/>
          <Route path="/viewCart" render={() => <CartContextProvider> <ViewCart/> </CartContextProvider>} />
        </Switch>
      </Router>
  );
};

export default App;