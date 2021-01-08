import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapStoreToProps from '../../redux/mapStateToProps';
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
    this.props.dispatch({ type: 'FETCH_LOGO', payload: this.state.logo })
  }

  render() {
    console.log('This is reduxState', this.props.reduxState)
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
          <img alt='Logo' src={this.props.reduxState.logoReducer.config?.url}></img>
        </form>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(App);
