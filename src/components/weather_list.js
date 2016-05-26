import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from './chart';
import GoogleMap from './google_map';

class WeatherList extends Component {
  renderMap(){
    if(this.props.weather) {
      const {lat, lon} = this.props.weather.city.coord;

      return(
        <div className="map">S
          <GoogleMap lon={lon} lat={lat} />
        </div>

      );
    }
  }

  renderWeather() {
    if(this.props.weather) {
      const name = this.props.weather.city.name;
      const temps = this.props.weather.list.map(weather => weather.main.temp);
      const pressures = this.props.weather.list.map(weather => weather.main.pressure);
      const humidities = this.props.weather.list.map(weather => weather.main.humidity);

      return(
        <tr key={name}>
          <td>{name}</td>
          <td>
            <Chart data={temps} color="red" units="K"/>
          </td>
          <td>
            <Chart data={pressures} color="green" units="hPa"/>
          </td>
          <td>
            <Chart data={humidities} color="blue" units="%"/>
          </td>
        </tr>
      )
    }
  }

  render() {
    return (
      <div>
        <div>{this.renderMap()}</div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th></th>
              <th>Pressure</th>
              <th>Humidity</th>
              <th>Temperature</th>
            </tr>
          </thead>
          <tbody>
            {this.renderWeather()}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({weather}) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
