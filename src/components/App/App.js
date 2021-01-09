import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapStoreToProps from '../../redux/mapStateToProps';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './App.css';

class App extends Component {

  state = {
    logo: ''
  }

  handleChange = (event) => {
    this.props.dispatch({ type: 'FETCH_SEARCH', payload: this.state.logo })
    this.setState({
      logo: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.dispatch({ type: 'FETCH_LOGO', payload: this.state.logo })
  }

  render() {
    return (
      <div className="App">
        {JSON.stringify(this.props.reduxState.autocompleteReducer)}
        <header className='header'>
          Brady Baker Solo Spike
        </header>
        <h1>Generate a Logo!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Enter a Brand: </label>
          <Autocomplete
            id="combo-box-demo"
            options={this.props.reduxState?.autocompleteReducer}
            getOptionLabel={(option) => option.domain}
            style={{ width: 300, justifyContent: 'center' }}
            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" onChange={this.handleChange} />}

          />
          <input placeholder='Brand' type='text' />
          <button type='submit'>Get Logo!</button>
          <img alt='Logo' src={this.props.reduxState?.autocompleteReducer[0].logo}></img>
        </form>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(App);

