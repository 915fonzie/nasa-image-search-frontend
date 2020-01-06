import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = (props) => {

    // const activeClass = route => {
    //     return props.location.pathname === route ? "uk-active" : "uk-parent";
    // };

    const changeStatusOfLogin = () => {
        if (props.isLoggedIn) {
            return <Link to='/logout'>Log Out</Link>
        }
        localStorage.removeItem("userId")
        return <Link to="/sign-up">Sign Up</Link>
    }

    return (
        <nav className="uk-navbar-container uk-navbar" data-uk-sticky>
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
                        {changeStatusOfLogin()}
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;