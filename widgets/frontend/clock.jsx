import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    let date = new Date();
    this.state = {
      time: date.toLocaleTimeString(undefined, {timeStyle: 'long', hour12: false}),
      date: date.toDateString()
    };
  }

  tick() {
    let date = new Date();
    this.setState({
      time: date.toLocaleTimeString(undefined, { timeStyle: 'long', hour12: false}),
      date: date.toDateString()
    });
  }

  componentDidMount() {
    this.ticking = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.ticking);
  }

  render() {
    return (
      <div class="clock">
        <h1>this is a clock.</h1>
        <div class="clockface">
          <p><span>Time:</span> <span>{this.state.time}</span></p>
          <p><span>Date:</span> <span>{this.state.date}</span></p>
        </div>
      </div>
    )
  }
}