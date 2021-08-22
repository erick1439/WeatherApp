import React from 'react';
import WeatherCard from './WeatherCard';
import TopNews from './TopNews'

function Home() {
    return(
        <main>
            <WeatherCard/>
            <TopNews/>
        </main>
    );
}

export default Home;