import React from 'react';

const Header = props  => {

    return (
        <header data-test="header-component">
            <h1 data-test="header-title">Star Wars</h1>
            { 
                props.isLogin ?
                (<div className="options">
                    <span data-test="username" className="username">{props.user.name}</span>
                    <button data-test="logout-button" className="option-button" onClick={props.onLogout}>Logout</button>
                </div>) : null
            }
        </header>
    )
}

export default Header;