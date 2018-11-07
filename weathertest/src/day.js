import React, { Component } from 'react';


export default class Day extends Component {

  constructor(props) {
    super(props);
  }

  convertDate = () => {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let date = new Date(this.props.date)
    let month = date.getMonth() + 1 ;
    let dayNum = date.getDate() ;
    let year = date.getFullYear() ;
    return days[date.getDay()] + ", " + month + '/' + dayNum + '/' + year
  }

  render() {
    return (
        <div>
        <div><strong>{this.convertDate()}</strong></div>
        <div>Minimum Temp {this.props.minF}</div>
        <div> Maximum Temp {this.props.maxF} </div>

        </div>
    )
  }
}
