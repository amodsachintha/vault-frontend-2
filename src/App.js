import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Container} from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login';
import About from './pages/About';
import Home from './pages/Home';
import MenuBar from "./MenuBar";
import DiskHealth from './pages/DiskHealth';

class App extends Component {
  componentDidMount(){
    console.log('mounted!');
  }

  render() {
    return (
      <Container>
        <ToastContainer/>
        <Router>
          <MenuBar/>
          <div>
            <Route path="/" exact component={Home}/>
            <Route path="/diskhealth/" component={DiskHealth} />
            <Route path="/about/" component={About} />
            <Route path="/login/" component={Login} />
          </div>
        </Router>
      </Container>
    );
  }
}

export default App;
