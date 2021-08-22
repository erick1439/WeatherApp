import React from 'react';
import WeatherCard from './WeatherCard/WeatherCard.js';
import TopNews from './TopNews'

function Home() {
    return(
        <main>
            <br/>
            <br/>
            <WeatherCard/>
            <br/>
            <br/>
            <TopNews/>
        </main>
    );
}

export default Home;