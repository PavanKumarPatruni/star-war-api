import React from 'react';
import { connect } from  'react-redux';

import { logoutUser } from '../redux/actions';

import Search from './Search';
import Header from './Header';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: ""
        };
    }

    onLogout = () => {
        this.props.history.push('/');
        this.props.onLogoutUser();
    }

    render() {
        return (
            <React.Fragment>
                <Header {...this.props} onLogout={this.onLogout}/>
                <Search {...this.props} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        isLogin: state.isLogin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogoutUser() {
            dispatch(logoutUser())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);