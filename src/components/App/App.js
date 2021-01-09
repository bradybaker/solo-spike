import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapStoreToProps from '../../redux/mapStateToProps';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './App.css';

class App extends Component {

  state = {
    newBrand: {
      brandName: '',
      brandLogo: ''
    }
  }

  handleChange = (event) => {
    this.props.dispatch({ type: 'FETCH_SEARCH', payload: event.target.value })
    this.setState({
      newBrand: {
        brandName: event.target.value,
        brandLogo: this.props.reduxState.autocompleteReducer[0]?.logo
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.dispatch({ type: 'ADD_BRANDS', payload: this.state.newBrand })
  }

  render() {
    return (
      <div className="App">
        {JSON.stringify(this.state)}
        <header className='header'>
          Brady Baker Solo Spike
        </header>
        <h1>Generate a Logo!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Enter a Brand: </label>
          <Autocomplete
            id="combo-box-demo"
            options={this.props.reduxState?.autocompleteReducer}
            getOptionLabel={(option) => option.name}
            style={{ width: 300, justifyContent: 'center' }}
            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" onChange={(event) => this.handleChange(event, 'brandName')} />}

          />
          <input placeholder='Brand' type='text' />
          <button type='submit'>Get Logo!</button>
        </form>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(App);

