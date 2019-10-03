import React from 'react';
import { connect } from  'react-redux';

import { logoutUser } from '../../redux/actions';

import Search from './Search';
import Header from '../header/Header';

const Dashboard = props => {

    const onLogout = () => {
        props.history.push('/');
        props.onLogoutUser();
    }

    return (
        <React.Fragment>
            <Header {...props} onLogout={onLogout}/>
            <Search {...props} />
        </React.Fragment>
    );
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