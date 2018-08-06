import React, { Component } from 'react';
import Layout from '../Layout'
import './App.css';
import WeatherForm from '../WeatherForm'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Layout>
          <WeatherForm />
      </Layout>  
      </div>
    );
  }
}

export default App;
