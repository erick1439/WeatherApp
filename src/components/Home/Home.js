import React from 'react';
import WeatherCard from '../WeatherCard/WeatherCard.js';
import TopNews from '../TopNews/TopNews.js'
import "./Home.css"

function Home(props) {
    return(
        <main>
            <br/>
            <br/>
            <div className="Container">
                <WeatherCard title="Current Weather" city={props.weatherInfo.searchedCity} weatherInfo={props.weatherInfo.currentWeather}/>
                <WeatherCard title="Tomorrow's Weather" city={props.weatherInfo.searchedCity} weatherInfo={props.weatherInfo.tomorrowsWeather}/>
            </div>          
            <br/>
            <br/>
            <TopNews/>
        </main>
    );
}

export default Home;