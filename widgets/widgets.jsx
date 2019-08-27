import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './frontend/clock';
import Tabs from './frontend/tabs';

document.addEventListener('DOMContentLoaded', (e) => {
  let main = document.querySelector("#main");
  ReactDOM.render(<Root />, main);
});

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.tabs = [
      {
        title: "one",
        content: "your first tab",
      }, 
      {
        title: "two",
        content: "another tab"
      },
      {
        title: "three",
        content: "whoa there pal"
      }
    ];
  }

  render() {
    return (
      <div className="root">
        <Clock />
        <Tabs tabs={this.tabs} />
      </div>
    )
  }
}