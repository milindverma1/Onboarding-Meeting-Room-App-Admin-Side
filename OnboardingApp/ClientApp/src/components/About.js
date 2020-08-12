import React, { Component } from 'react';

export class About extends Component {
    static displayName = About.name;

    render() {
        return (
            <div>
                <p> This is an about page </p>
            </div>
            );
    }

}
//export class Counter extends Component {
//  static displayName = Counter.name;

//  constructor(props) {
//    super(props);
//    this.state = { currentCount: 0 };
//    this.incrementCounter = this.incrementCounter.bind(this);
//  }

//  incrementCounter() {
//    this.setState({
//      currentCount: this.state.currentCount + 1
//    });
//  }

//  render() {
//    return (
//      <div>
//        <h1>Counter</h1>

//        <p>This is a simple example of a React component.</p>

//        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

//        <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
//      </div>
//    );
//  }
//}
