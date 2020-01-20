import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './Components/Navbar'
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Logout from './Components/Logout';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Router>
        <Navbar/>
        <Route path="/home" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/logout" exact component={Logout} />
      </Router>
    );
  }
}