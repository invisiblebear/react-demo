import React, { Component } from 'react';

class Counter extends Component {

    state = { // contains elements to be used in the component
        count: 0,
        imageUrl: 'https://picsum.photos/200'
    };

    render() { 
        return( 
        <React.Fragment>
            {/* <img src={this.state.imageUrl} alt='200px image'/><br /> */}
            <span style={{fontSize: 30}} className='badge badge-primary m-2'>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
        </React.Fragment>
        );
    }

    formatCount() {
        const { count } = this.state;
        const x = 'Zero';
        return count === 0 ? x : count;
    };
}

export default Counter; // makes available for import into another component