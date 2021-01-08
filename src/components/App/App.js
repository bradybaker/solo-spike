import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

class App extends Component {

  state = {
    logo: ''
  }

  handleChange = (event) => {
    this.setState({
      logo: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('WEEE', this.state.logo)
  }

  render() {
    return (
      <div className="App">
        <header className='header'>
          Brady Baker Solo Spike
        </header>
        <h1>Generate a Logo!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Enter a Brand: </label>
          <input onChange={this.handleChange} placeholder='Brand' type='text' />
          <button type='submit'>Get Logo!</button>
        </form>
      </div>
    );
  }
}

export default connect()(App);
