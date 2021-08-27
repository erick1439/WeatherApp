
import './App.css';
import Navbar from './components/Navegation/Navegation.js';
import Home from './components/Home/Home.js'
import Footer from './components/Footer/Footer.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedCity : "",
      time : "",  
      temp : "",
      feelsLike : "",
      weather_description : "",
      icon : "",
      temp_min : "", 
      temp_max : "", 
      humidity : "", 
      wind_speed : "",
      tomorrowsWeather : {
        time : "",
        temp : "",
        feelsLike : "",
        weather_description : "",
        icon : "",
        temp_min : "", 
        temp_max : "", 
        humidity : "", 
        wind_speed : ""
      }
    }

    this.handler = this.handler.bind(this);
  }

  handler(value) {

    value = value.charAt(0).toUpperCase() + value.slice(1);
    this.getWeather(value);
    this.getTomorrowsWeather(value);
  }

  getDefaultLocation() {
    
    fetch('https://extreme-ip-lookup.com/json/')
    .then(res => res.json())
    .then(response => {
        
        this.setState({
            searchedCity : response.city.charAt(0).toUpperCase() + response.city.slice(1),
        });

        this.getWeather(this.state.searchedCity);
        this.getTomorrowsWeather(this.state.searchedCity);

    })
    .catch((data, status) => {
        alert("Location Service Error")
    });
  }

  getTomorrowsWeather(city) {

    fetch ("http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&cnt=2&units=imperial&appid=3adf9dfabe4e331cfafdbd65868b459e")
    .then(res => res.json())
    .then((result) => {

          let date = new Date();
          let localTime = date.getTime();
          let localOffset = date.getTimezoneOffset() * 60000;
          let utc = localTime + localOffset;
          let cityTime = utc + (1000 * result.timezone);
          let newTime = new Date(cityTime);

          let tomorrowsWeather = {
            time : newTime.toString(),  
            temp : result.list[1].main.temp.toString(),
            feelsLike : result.list[1].main.feels_like.toString(),
            weather_description : result.list[1].weather[0].description,
            icon : "http://openweathermap.org/img/wn/" + result.list[1].weather[0].icon + "@2x.png",
            temp_min : result.list[1].main.temp_min.toString(), 
            temp_max : result.list[1].main.temp_max.toString(), 
            humidity : result.list[1].main.humidity.toString(), 
            wind_speed : result.list[1].wind.speed.toString()
          }

        this.setState({
          tomorrowsWeather : tomorrowsWeather       
        });
    })
    .catch((data, status) => {

      alert("Unavailable to fetch tomorrow's weather");
  });

  }

  getWeather(city) {

    fetch ("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=3adf9dfabe4e331cfafdbd65868b459e")
    .then(res => res.json())
    .then((result) => {

          let date = new Date();
          let localTime = date.getTime();
          let localOffset = date.getTimezoneOffset() * 60000;
          let utc = localTime + localOffset;
          let cityTime = utc + (1000 * result.timezone);
          let newTime = new Date(cityTime);

        this.setState({
            searchedCity : city,
            time : newTime.toString(),  
            temp : result.main.temp.toString(),
            feelsLike : result.main.feels_like.toString(),
            weather_description : result.weather[0].description,
            icon : "http://openweathermap.org/img/wn/" + result.weather[0].icon + "@2x.png",
            temp_min : result.main.temp_min.toString(), 
            temp_max : result.main.temp_max.toString(), 
            humidity : result.main.humidity.toString(), 
            wind_speed : result.wind.speed.toString()
        });
    })
    .catch((data, status) => {

      alert("Please insert valid location");

  });  
}

  componentDidMount() {

    this.getDefaultLocation();

  }

  render() {
    return (
      <div>
        <Navbar handler={this.handler} />
        <Home weatherInfo={this.state}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
