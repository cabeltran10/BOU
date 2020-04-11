import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import FormLogin from "./forms/FormLogin";
import FormRegister from "./forms/FormRegister";
import Logout from "./Logout";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import FormPayment from "./forms/FormPayment";
import Scan from "./Scan";
import AddToCart from "./AddToCart";

function App(props) {
  const [user, setUser] = useState({});
  const [shops, setShops] = useState([]);
  useEffect(() => {
    fetch("/getUser")
      .then((res) => res.json())
      .then((user) => setUser(user));
  }, [user]);

  useEffect(() => {
    fetchShops();
  }, []);
  const fetchShops = async () => {
    const url = "/shops";
    const res = await fetch(url);
    const shops = await res.json();
    console.log(shops);
    setShops(shops);
  };

  return (
    <Router>
      <div>
        <Navbar setUser={setUser} user={user}></Navbar>
        <div className="container">
          <Switch>
            <Route path="/" exact component={() => <Home user={user} shops={shops} setShops={setShops}/>} />
            <Route
              path="/login"
              component={() => <FormLogin user={user} setUser={setUser} />}
            />
            <Route
              path="/register"
              component={() => <FormRegister user={user} setUser={setUser} />}
            />
            <Route
              path="/logout"
              component={() => <Logout user={user} setUser={setUser} />}
            />
            <Route
              path="/payment"
              component={() => <FormPayment user={user} />}
            />
            <Route exact path="/:id/:productId" component={AddToCart} />
            <Route exact path="/:id" component={Scan} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
