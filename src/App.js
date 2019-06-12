import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState(res))
      .catch(console.error);
  }

  callApi = async () => {
    const resp = await fetch('http://ec2-54-193-57-34.us-west-1.compute.amazonaws.com:8080/api');

    window._resp = resp;

    let text = await resp.text();

    let data = null;
    try {
      data = JSON.parse(text); // cannot call both .json and .text - await resp.json();
    } catch (e) {
      console.err(`Invalid json\n${e}`);
    }

    if (resp.status !== 200) {
      throw Error(data ? data.message : 'No data');
    }

    return data;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Boring App</h1>
          <h2>It's so boring it's mildly interesting</h2>
        </header>
        <p>{this.state.message || 'No message'}</p>
      </div>
    );
  }
}

export default App;
