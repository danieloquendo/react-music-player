import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
import { Header } from "./shared/components";
import "./App.scss";

const Routes = () =>
  routes.map((route) => <Route key={route.path} {...route} />);

const App: React.FC = () => {
  return (
    <Fragment>
      <Header lefTitle="Prueba" rightTitle="Lista De Artistas" />
      <Router>
        <Switch>{Routes()}</Switch>
      </Router>
    </Fragment>
  );
};

export default App;
