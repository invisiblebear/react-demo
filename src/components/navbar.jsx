import React, { Component } from 'react';

// Stateless Functional Component

const NavBar = ({totalCounters}) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="https://github.com/invisiblebear" target="_blank">
                NavBar
            </a>
            <span className="badge badge-pill badge-secondary">
                Total Number of Products: {totalCounters}
            </span>
        </nav>
     );
}

export default NavBar;