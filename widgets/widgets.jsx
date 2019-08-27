import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './frontend/clock';

document.addEventListener('DOMContentLoaded', (e) => {
  let main = document.querySelector("#main");
  ReactDOM.render(<Root />, main);
});

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div><Clock /></div>
    )
  }
}