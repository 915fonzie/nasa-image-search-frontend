import React from 'react'

const Logout = (props) => {
    props.handleLoggedIn();
    return (
        <div className="uk-card uk-card-default uk-card-body">
            <h3 className="uk-card-title">Logged Out</h3>
            <p>you have now been logged out</p>
        </div>

    );
}

export default Logout;