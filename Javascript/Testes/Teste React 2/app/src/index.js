import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cliques: 0,
    }
  }

  counter() {
    this.setState(prevState => ({
      cliques: prevState.cliques + 1,
    }), () => {
      console.log(this.state.cliques);
    });
  }

  render() {
    return (
      <>
        <p>Número de cliques: {this.state.cliques}</p>
        <button onClick={() => this.counter()}>Click me</button>
      </>
    );
  }
} 

ReactDOM.render(<App/>, document.querySelector('#root'))