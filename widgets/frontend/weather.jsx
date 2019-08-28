import React from 'react';

export default class Weather extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({ position: position });
      getWeather(position);
    });
  }

  getWeather(position) {
    let xml = new XMLHttpRequest();
    let that = this;
    xml.onreadystatechange = function () {

      if (this.readyState === 4) {
        if (this.status === 200) {
          const parsed = JSON.parse(this.responseText);
          that.setState({
            temp: parsed.main.temp,
            city: parsed.name
          });
        } else {
          console.log(`Error! \n ${this.response}`);
        }
      }
    };

    xml.open("GET", `http//:api.openweathermap.org/data/2.5/weather?lat=${ position.coords.latitude }&lon=${ position.coords.longditude }&APPID=e916b9c9e26b9120c1c88df15428040c`);
    xml.send();
  }

  render() {
    return (
      <div className="weather">
        <p>{this.state.temp}</p>
      </div>
    );
  }

}