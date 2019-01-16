import React, { Component } from 'react';

class Counter extends Component {

    state = { // contains elements to be used in the component
        count: 0
    };

    render() { 
        return( 
        <React.Fragment>
            <span>{this.formatCount()}</span>
            <button>Increment</button>
        </React.Fragment>
        );
    }

    formatCount() {
        const { count } = this.state;
        const x = <h1>Zero</h1>
        return count === 0 ? x : count;
    };
}

export default Counter; // makes available for import into another component