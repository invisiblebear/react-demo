import React, { Component } from 'react';

class Counter extends Component {

    state = { // contains elements to be used in the component
        count: 0,
        imageUrl: 'https://picsum.photos/200',
        tags: ['tag1', 'tag2', 'tag3','tag4']
    };

    renderTags() {
        if (this.state.tags.length === 0) {
            return <p>There are no tags!</p>
        } else {
            return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
        }
    }

    handleIncrement = () => { //uses an arrow function to be able to bind event handlers the 'this' or the Counter object
        console.log('Increment Clicked', this);
    }

    render() {
        return( 
        <React.Fragment>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button> 
            {/* does not call this method handleIncrement, just passing a referance to it */}
            {this.state.tags.length === 0 && 'Please create a new tag!'}<br />
            {this.renderTags()}
        </React.Fragment>
        );
    }

    getBadgeClasses () {
        let classes = 'badge m-1 badge-';
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        const x = 'Zero';
        return count === 0 ? x : count;
    };
}

export default Counter; // makes available for import into another component