import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="javascript: void(0);">
                    NavBar
                </a>
                <span className="badge badge-pill badge-secondary">
                    Total Number of Products: {this.props.totalCounters}
                </span>
            </nav>
         );
    }
}
 
export default NavBar;