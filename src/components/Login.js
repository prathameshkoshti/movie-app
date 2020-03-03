import React, { Component } from 'react'

export default class Login extends Component {

    handleChange() {
        let usernameTextField = document.querySelector('#username');
        usernameTextField.classList.remove('error')
    }

    handleLogin() {
        let flag = false;
        let usernameTextField = document.querySelector('#username');
        let username = usernameTextField.value.trim();
        if(username !== '') {
            let url = 'https://raw.githubusercontent.com/prathameshkoshti/users/master/db.json';
            fetch(url)
                .then(data => data.json())
                .then(result => {
                    result.forEach(user => {
                        if (user.userName === username) {
                            localStorage.setItem('username', username);
                            localStorage.setItem('firstName', user.firstName);
                            localStorage.setItem('lastName', user.lastName);
                            flag = true;
                            window.location.reload();
                        }
                        else {
                            console.log('error while logging in!')
                            flag = false;
                        }
                    })
                    if(flag === false)
                        setTimeout(() => usernameTextField.classList.add('error'), 1500)
                })
        }
        else {
            usernameTextField.classList.add('error');
        }
    }

    render() {
        return (
            <div className="login_container">
                <div className="login_form">
                    <h3>Login</h3>
                    <p>Type your username to login</p>
                    <input type="text" onChange={this.handleChange} id="username" placeholder="username" />
                    <span className="error_message">Please ensure your username is proper!</span>
                    <button onClick={this.handleLogin.bind(this)}>Log In</button>
                </div>
            </div>
        )
    }
}
