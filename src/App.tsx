import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import './App.scss';

const Routes = () => routes.map(route => <Route key={route.path} {...route} />);

const App: React.FC = () => {
  return(
    <Router>
      <Switch>{Routes()}</Switch>
    </Router>
  );
}

export default App;
