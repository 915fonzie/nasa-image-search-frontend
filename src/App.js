import React from 'react';
import './App.css';
import './uikit.css'
import { BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from './NavBar'
import Search from './Search'
import SignUp from './SignUp'


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route path='/search' render={() => <Search />} />
        <Route path='/sign-up' render={() => <SignUp />} />
      </Router>
    </div>
  );
}

export default App;
