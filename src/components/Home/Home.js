import React from 'react';
import WeatherCard from '../WeatherCard/WeatherCard.js';
import TopNews from '../TopNews/TopNews.js'
import "./Home.css"

function Home({weatherInfo}) {
    return(
        <main>
            <br/>
            <div className="Container">
                <WeatherCard title="Current Weather" city={weatherInfo.searchedCity} weatherInfo={weatherInfo.currentWeather}/>
                <WeatherCard title="Tomorrow's Weather" city={weatherInfo.searchedCity} weatherInfo={weatherInfo.tomorrowsWeather}/>
            </div>          
            <TopNews/>
        </main>
    );
}

export default Home;