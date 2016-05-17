import React from 'react';
import SearchBar from './search_bar';
import WeatherList from '../components/weather_list';

export default () => {
  return (
    <div>
      <SearchBar />
      <WeatherList />
    </div>
  );
}
