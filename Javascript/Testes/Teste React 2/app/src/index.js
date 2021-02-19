import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 1,
      texto: 'Texto',
    }
  }

  clickHandler() {
    const cliques = ++this.state.number;
    this.state.texto = `Número de cliques: ${cliques}`;
    ReactDOM.render(<App/>, document.getElementById('root'));
  }

  render() {
    return (
      <>
        <p>{this.state.texto}</p>
        <button onClick={() => this.clickHandler()}>Click me</button>
      </>
    );
  }
} 

ReactDOM.render(<App/>, document.querySelector('#root'))