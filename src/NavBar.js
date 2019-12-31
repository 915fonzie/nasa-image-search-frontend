import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = (props) => {

    // const activeClass = route => {
    //     return props.location.pathname === route ? "uk-active" : "uk-parent";
    // };

    return (
        <nav className="uk-navbar-container uk-navbar">
            <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                    <li className="uk-parent">
                        <Link to='/'>Logo</Link>
                    </li>
                    <li className='uk-parent'>
                        <Link to='/search'>Search</Link>
                    </li>
                    <li className='uk-parent'>
                        <Link to='/account'>Account</Link>
                    </li>
                </ul>
            </div>
            <div className="uk-navbar-right">
                <ul className="uk-navbar-nav">
                    <li className="uk-parent">
                        <Link to='/sign-up'>Sign Up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;