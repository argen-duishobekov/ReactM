import React from "react";
import './App.css';
import {ModalSwitch} from './modalSwitch/ModalSwitch'
import {
  BrowserRouter as Router
} from "react-router-dom";

function App() {
  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}

export default App;
