import React, { useState } from 'react';
import { connect } from  'react-redux';

import { loginUser } from '../../redux/actions';

const Login = props => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const onLogin = () => {
        setMessage("");
        setUserName(userName.trim());
        setPassword(password.trim());

        if (userName.length > 0 && password.length > 0) {
            fetch(`https://swapi.co/api/people?search=${userName}`)
                .then(response => response.json())
                .then(response => {
                    const user = response.results[0];

                    if (user && user.birth_year === password) {
                        props.history.push('/dashboard');
                        props.loginUser(user);     
                    } else {
                        setMessage("Invalid credentials");
                    }
                });
        } else {
            setMessage("Invalid credentials");
        }
    }

    return (
        <div className="login-page">
            <div className="login-form">
                <h1>Login</h1>
                <input data-test="username" type="email" placeholder="Username" className="text-input" value={userName} onChange={e => setUserName(e.target.value)}/>
                <input data-test="password" type="password" placeholder="Password" className="text-input" value={password} onChange={e => setPassword(e.target.value)}/>
                <span className="error-message">{message}</span>
                <button className="login-button" onClick ={onLogin}>Login</button>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser(user) {
            dispatch(loginUser(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);