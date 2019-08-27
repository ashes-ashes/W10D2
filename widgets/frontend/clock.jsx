import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    let date = new Date();
    this.state = {
      date: date.toTimeString().slice(0, 8)
    };
  }

  tick() {
    let date = new Date();
    this.setState({
      date: date.toTimeString().slice(0, 8)
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
      <div>
        <h1>this is a clock</h1>
        <div>{this.state.date}</div>
      </div>
    )
  }
}