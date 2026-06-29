// import React, { Component } from "react";

// export default class App extends Component {
//   // 1. Initialize state properly inside the class
//   state = {
//     name: "veeresh",
//   };

//   // 2. Use an arrow function to preserve 'this' context
//   changeName = () => {
//     // 3. Pass an object to setState
//     this.setState({ name: "kiran" });
//   };

//   render() {
//     return (
//       <>
//         {/* 4. Access the specific state property */}
//         <h1>{this.state.name}</h1>
//         <button onClick={this.changeName}>Change Name</button>
//       </>
//     );
//   }
// }


// counter 


import React , {Component } from 'react';

export default class App extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
} 
