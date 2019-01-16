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

    render() { 
        return( 
        <React.Fragment>
            {this.state.tags.length === 0 && 'Please create a new tag!'}
            {this.renderTags()}
        </React.Fragment>
        );
    }
}

export default Counter; // makes available for import into another component