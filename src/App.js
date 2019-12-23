import React from 'react';
import './App.css';
import './uikit.css'
import { BrowserRouter as Router} from "react-router-dom";
import NavBar from './NavBar'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
