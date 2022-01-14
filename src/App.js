import React, { useEffect, useState } from 'react';
import Navbar from './components/Navegation/Navegation.js';
import Home from './components/Home/Home.js'
import Footer from './components/Footer/Footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [searchedCity, setSearchedCity] = useState('');
  const [currentWeather, setCurrentWeather] = useState( {
    time : "",  
    temp : "",
    feelsLike : "",
    weather_description : "",
    icon : "",
    temp_min : "", 
    temp_max : "", 
    humidity : "", 
    wind_speed : "",
  });

  const [tomorrowsWeather, setTomorrowsWeather] = useState({
    time : "",
    temp : "",
    feelsLike : "",
    weather_description : "",
    icon : "",
    temp_min : "", 
    temp_max : "", 
    humidity : "", 
    wind_speed : ""
  });

  const handler = (city) => {
    if (city !== ""){
      city = city.charAt(0).toUpperCase() + city.slice(1);
      getWeather(city);
      getTomorrowsWeather(city);
    } 
  }

  const getTomorrowsWeather = (city) => {

    fetch ("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&cnt=2&units=imperial&appid=3adf9dfabe4e331cfafdbd65868b459e")
    .then(res => res.json())
    .then((result) => {

      const tomorrow = new Date(currentWeather.time);
      tomorrow.setDate(tomorrow.getDate() + 1);

      let tomorrowsWeather = {
        time : tomorrow.toString(),  
        temp : result.list[1].main.temp.toString(),
        feelsLike : result.list[1].main.feels_like.toString(),
        weather_description : result.list[1].weather[0].description,
        icon : "https://openweathermap.org/img/wn/" + result.list[1].weather[0].icon + "@2x.png",
        temp_min : result.list[1].main.temp_min.toString(), 
        temp_max : result.list[1].main.temp_max.toString(), 
        humidity : result.list[1].main.humidity.toString(), 
        wind_speed : result.list[1].wind.speed.toString()
      }

      setTomorrowsWeather(tomorrowsWeather);

    })
    .catch((data, status) => {
      console.log("Unavailble to fetch tomorros weather");
    });
  }

  const getWeather = (city) => {

    fetch ("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=3adf9dfabe4e331cfafdbd65868b459e")
    .then(res => res.json())
    .then((result) => {
      
      let date = new Date();
      let localTime = date.getTime();
      let localOffset = date.getTimezoneOffset() * 60000;
      let utc = localTime + localOffset;
      let cityTime = utc + (1000 * result.timezone);
      let newTime = new Date(cityTime);

      let currentWeather = {
        time : newTime.toString(),  
        temp : result.main.temp.toString(),
        feelsLike : result.main.feels_like.toString(),
        weather_description : result.weather[0].description,
        icon : "https://openweathermap.org/img/wn/" + result.weather[0].icon + "@2x.png",
        temp_min : result.main.temp_min.toString(), 
        temp_max : result.main.temp_max.toString(), 
        humidity : result.main.humidity.toString(), 
        wind_speed : result.wind.speed.toString()
      }

      setCurrentWeather(currentWeather);
      getTomorrowsWeather(city);

    })
    .catch((data, status) => {

      alert("Please insert valid location");
    });  
  }

  const getDefaultLocation = () => {
    
    fetch('https://extreme-ip-lookup.com/json/?key=CwKhs51hn10LK8Q6Lae0')
    .then(res => res.json())
    .then(response => {

      let city = response.city.charAt(0).toUpperCase() + response.city.slice(1);

      setSearchedCity(city);
      getWeather(city);

    })
    .catch((data, status) => {
        alert("Location Service Error. Enable your location services")
    });
  }

  useEffect( () => {
    getDefaultLocation();

  }, []);

  return(
    <div>
      <Navbar handler={handler}/>
      <Home searchedCity={searchedCity} currentWeather={currentWeather} tomorrowsWeather={tomorrowsWeather}/>
      <Footer/>
    </div>
  );
}

export default App;
