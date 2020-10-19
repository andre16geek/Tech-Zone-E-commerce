import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login></Login>
            <h2>login page</h2>
          </Route>
          <Route path="/checkout">
            <Header />
            {/* checkout */}
            <Checkout />
          </Route>
          <Route path="/">
            {/* Header */}
            <Header></Header>

            {/* Home */}
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
