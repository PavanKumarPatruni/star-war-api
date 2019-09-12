import React from 'react';
import { connect } from  'react-redux';

import { loginUser } from '../redux/actions';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            password: "",
            message: ""
        }

    }

    onLogin = () => {
        this.setState({
            message: ""
        });

        let { userName, password } = this.state;

        fetch(`https://swapi.co/api/people?search=${userName}`)
            .then(response => response.json())
            .then(response => {
                let user = response.results[0];

                if (user && user.birth_year === password) {
                    this.props.history.push('/dashboard');
                    this.props.loginUser(user);     
                } else {

                    console.log("sddas");

                    this.setState({
                        message: "Invalid credentials"
                    });
                }
            });
    }

    onUserNameChange = event => {
        this.setState({
            userName: event.target.value
        });
    }

    onPasswordChange = event => {
        this.setState({
            password: event.target.value
        });
    }

    render() {
        return (
            <div className="login-page">
                <div className="login-form">
                    <h1>Login</h1>
                    <input type="email" placeholder="Username" className="text-input" value={this.state.userName} onChange={this.onUserNameChange}/>
                    <input type="password" placeholder="Password" className="text-input" value={this.state.password} onChange={this.onPasswordChange}/>

                    <span className="error-message">{this.state.message}</span>

                    <button className="login-button" onClick ={this.onLogin}>Login</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser(user) {
            dispatch(loginUser(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);