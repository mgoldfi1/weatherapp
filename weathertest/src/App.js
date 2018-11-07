import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Day from './day'

class App extends Component {

  state = {
    word: "hello",
    query: '',
    days: []
  }

  handleChange = (event) => {
    this.setState({query: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch("https://api.aerisapi.com/forecasts/11362?client_id=KrGsqGnltb4UcurYZKjTm&client_secret=5XekSYdmY19G5V5hjNj10LVjdDfWDE1Aoy4y7eGK")
    .then(res => res.json())
    .then(json => {console.log(json.response[0].periods); this.setState({days: [...json.response[0].periods]}) })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >

          </a>
        </header>
        {this.state.query}
        <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} placeholder="name of city" name="city" />
        <input type="submit" value="Search" />
        </form>
        {this.state.days.map(
          day => <Day date={day.dateTimeISO} maxC={day.maxTempC} maxF={day.maxTempF} minF={day.minTempF} minC={day.minTempC}/>
        )}
      </div>
    );
  }
}

export default App;
