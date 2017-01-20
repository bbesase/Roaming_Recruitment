import React, { Component } from 'react';
import logo from './logo.svg';

import {FormGroup, ControlLabel, Col} from 'react-bootstrap';

import InputBox from './Components/Inputbox.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Col md={2} />
        <Col md={8}>
          <form>
          
          
            <FormGroup
              
              controlId="testForm"
            >
              <InputBox type="text" label="First name" placeholder="Enter First Name"/>
            </FormGroup>
          
              
              {/*<ControlLabel>Testing the new Bootstrap!</ControlLabel>*/}
              
              
              <br />
            <FormGroup>
              <InputBox type="text" label="Last Name" placeholder="Enter Last Name"/>
            </FormGroup>
              <br />
            <FormGroup>
              <InputBox type="email" label="Email" placeholder="Enter Email"/>
            </FormGroup>
              <br />
            <FormGroup>
              <InputBox type="text" label="Username" placeholder="Enter Desired Username"/>
            </FormGroup>
              <br />
            <FormGroup>
              <InputBox type="password" label="Password" placeholder="Enter Desired Password"/>
            </FormGroup>
          
          

          </form>
        </Col>
        <Col md={2} />
        

      </div>
    );
  }
}

export default App;
