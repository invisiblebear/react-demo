import React, { Component } from 'react';

class Counter extends Component {

    state = { // contains elements to be used in the component and is PRIVITE to this componet
        value: this.props.counter.value, // this.props includes all attributes we set in coutners componet and includes data we give to this component. Props are read only
        id: this.props.counter.id
    };

    renderTags() {
        if (this.state.tags.length === 0) {
            return <p>There are no tags!</p>
        } else {
            return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
        }
    }

    handleIncrement = () => { //uses an arrow function to be able to bind event handlers the 'this' or the Counter object
        this.setState({value: this.state.value + 1}) // updates the state to update the view. you have to tell react explicitly what has changed. it compares the DOM and virtual DOM and updates only the things that need to be updated.
    }

    render() {
        return( 
        <div className="m-2">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

            <button onClick={ this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>
            {/* use an arrow function inline to pass an argument into a method for eventhandlers */}

            <button onClick={() => this.props.onDelete(this.state.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
        );
    }

    getBadgeClasses () {
        let classes = 'badge m-1 badge-';
        classes += this.state.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { value: count } = this.state;
        const x = 'Zero';
        return count === 0 ? x : count;
    };
}

export default Counter; // makes available for import into another component