import React from "react";
import Users from "./layouts/users";
import NavBar from "./components/navBar";
import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "./layouts/main";
import Login from "./layouts/login";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/users/:userId?" component={Users} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={MainPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
