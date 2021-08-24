import React from 'react';
import WeatherCard from '../WeatherCard/WeatherCard.js';
import TopNews from '../TopNews/TopNews.js'
import "./Home.css"

function Home() {
    return(
        <main>
            <br/>
            <br/>
            <div className="Container">
                <WeatherCard title="Current Weather"/>
                <WeatherCard title="Tomorrow's Weather"/>
            </div>          
            <br/>
            <br/>
            <TopNews/>
        </main>
    );
}

export default Home;