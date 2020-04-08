import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.js";
import FormLogin from "./FormLogin";
import Logout from "./Logout";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(props) {
  const [user, setUser] = useState(null);

  

  return (
    <Router>
      <div>
        <Navbar setUser={setUser} user={user}></Navbar>
        <Switch> {/* I can just access one component of these */}
          <Route path="/" exact component={() => <Home user={user} />} />
          <Route path="/login" component={FormLogin} />{" "}
          {/* Displaying a component in base of a route */}
          <Route path="/register" component={FormLogin} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
