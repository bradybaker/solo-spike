import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapStoreToProps from '../../redux/mapStateToProps';
import AddBrandForm from '../AddBrandForm/AddBrandForm';
import { Grid } from '@material-ui/core';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_BRANDS' })
  }

  render() {

    return (
      <div className="App">
        <header className='header'>
          Brady Baker Solo Spike
        </header>
        <h1>Generate a Logo!</h1>
        <AddBrandForm />
        <Grid container spacing={2} justify='center'>
          {this.props.reduxState.logoReducer.map(item => {
            return (
              <Grid item lg='1' key={item.id}>
                <h3>{item.name}</h3>
                <img alt={item.name} src={item.logo} />
              </Grid>
            )
          })}
        </Grid>
      </div>
    );
  }
}



export default connect(mapStoreToProps)(App);

