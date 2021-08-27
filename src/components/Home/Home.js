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
                <WeatherCard title="Current Weather" weatherInfo={props.weatherInfo}/>
                <WeatherCard title="Tomorrow's Weather" weatherInfo={props.weatherInfo.tomorrowsWeather}/>
            </div>          
            <br/>
            <br/>
            <TopNews/>
        </main>
    );
}

export default Home;