import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "./layouts";
import { NavBar } from "./components/navBar";
import { Home } from "./pages";
export default function App() {
  return (
    <Router>
      <Layout>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">Hello</Route>
          <Route path="/dashboard">hee</Route>
        </Switch>
      </Layout>
    </Router>
  );
}
