import React from 'react';
import './uikit.css'
import { BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from './NavBar'
import Search from './Search'
import SignUp from './SignUp'
import Logout from './Logout'
import Login from './Login'


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false,
      users: []
    };
  }

  handleIsLoggedIn = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  };

  fetchUsers = async () => {
    await fetch("https://nasa-file-search-backend.herokuapp.com/users")
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          users: json.users
        });
      });
    return this.state.users;
  };

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar isLoggedIn={this.state.isLoggedIn} />
          <Route
            path="/search"
            render={() => <Search handleLoggedIn={this.handleIsLoggedIn} />}
          />
          <Route
            path="/sign-up"
            render={() => (
              <SignUp
                handleLoggedIn={this.handleIsLoggedIn}
                handleFetchUsers={this.fetchUsers}
                users={this.state.users}
              />
            )}
          />
          <Route
            path="/logout"
            render={() => <Logout handleLoggedIn={this.handleIsLoggedIn} />}
          />
          <Route path="/login" render={() => <Login />} />
        </Router>
      </div>
    );
  }
}

export default App;
