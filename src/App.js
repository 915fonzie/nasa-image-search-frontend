import React from 'react';
import './App.css';
import './uikit.css'
import { BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from './NavBar'
import Search from './Search'


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route path='/search' render={() => <Search />} />
      </Router>
    </div>
  );
}

export default App;
