
import './App.css';
import Navbar from './components/Navegation';
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
      wind_speed : ""
    }

    this.handler = this.handler.bind(this);
  }

  handler(value) {
    this.setState({searchedCity : value});
    this.getWeather(value);
  }

  getDefaultLocation() {
    
    fetch('https://extreme-ip-lookup.com/json/')
    .then( res => res.json())
    .then(response => {
        
        this.setState({
            searchedCity : response.city,
        });

    })
    .catch((data, status) => {
        alert("Location Service Error")
    });

    console.log(this.state.searchedCity);
    this.getWeather("orlando");
  }

  getWeather(city) {
    fetch ('http://api.openweathermap.org/data/2.5/forecast?q=' + city +'&cnt=5&units=imperial&appid=3adf9dfabe4e331cfafdbd65868b459e')
    .then(res => res.json())
    .then((result) => {

        this.setState({
            time : new Date(result.list[0].dt * 1000).toString(),  
            temp : result.list[0].main.temp.toString(),
            feelsLike : result.list[0].main.feels_like.toString(),
            weather_description : result.list[0].weather[0].description,
            icon : "http://openweathermap.org/img/wn/" + result.list[0].weather[0].icon + "@2x.png",
            temp_min : result.list[0].main.temp_min.toString(), 
            temp_max : result.list[0].main.temp_max.toString(), 
            humidity : result.list[0].main.humidity.toString(), 
            wind_speed : result.list[0].wind.speed.toString()
        });
    }).catch((data, status) => {

      alert("Please insert valid location");
  });;  
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
