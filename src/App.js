import React from "react";
import "./App.css";


import HomePage from "./components/Homepage";
import LoginSignupPage from "./components/LoginSignupPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";

import ErrorPage from "./components/ErrorPage";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LoginSignupPage} />
          <ProtectedRoute path="/homepage" component={HomePage} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
