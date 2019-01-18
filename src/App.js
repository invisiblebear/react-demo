import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

// LIFECYCLE:

// Mount { 
//    (in this order)
//     constructor
//     render
//     componentDidMount
// }

// Update {
//     render
//     componentDidUpdate
// }

// Unmount {
//     componentWillUnmount
// }

class App extends Component {
  state = { 
    counters : [
        {id: 1, value: 4},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
        {id: 5, value: 15},
        {id: 6, value: 0},
        {id: 7, value: 129},
        {id: 8, value: 0}
    ]
  };

  constructor() { // called only once when an instance of a class is created
    super();
    console.log("app - constructor");
  }

  componentDidMount () {
    // good places for AJAX calls
    console.log('app - mounted');
  }

  handleDelete = (counterId) => {
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({counters: counters}); // can be written as this.setState({counters});
  };

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
      });
      this.setState({counters});
  };

  handleIncrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({counters});
  };

  render() {
    console.log('app - rendered');
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c=>c.value > 0).length}/>
        <main className="container">
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
