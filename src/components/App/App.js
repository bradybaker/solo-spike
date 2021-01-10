import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapStoreToProps from '../../redux/mapStateToProps';
import AddBrandForm from '../AddBrandForm/AddBrandForm';

import './App.css';




class App extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_BRANDS' })
  }

  render() {

    return (
      <div className="App">
        {JSON.stringify(this.state)}
        <header className='header'>
          Brady Baker Solo Spike
        </header>
        <h1>Generate a Logo!</h1>
        <AddBrandForm />
        <div>
          {this.props.reduxState.logoReducer.map(item => {
            return (
              <div key={item.id}>
                <h3>{item.name}</h3>
                <img alt={item.name} src={item.logo} />
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}



export default connect(mapStoreToProps)(App);

