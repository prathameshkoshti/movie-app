import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <span id="logo">
                    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo"></img>
                </span>
                {localStorage.getItem('username') ? <span className="welcome">Welcome, {localStorage.getItem('firstName')} {localStorage.getItem('lastName')}</span> : ''}

                {localStorage.getItem('username') ? <button onClick={this.props.logout}>Logout</button> : ''}
            </nav>
        )
    }
}

export default Navbar;