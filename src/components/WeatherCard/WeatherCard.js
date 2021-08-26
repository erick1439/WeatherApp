import React from 'react';
import { Card } from 'react-bootstrap'

import "./WeatherCard.css"

class WeatherCard extends React.Component {   
    render() {
        console.log(this.props.weatherInfo);
        return(
            <div>
                <Card className="card">
                    <Card.Body>
                        <Card.Title className="font-weight-bold">{this.props.title} : {this.props.weatherInfo.searchCity}</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <div className="weatherImage">
                            <Card.Img src={this.props.weatherInfo.icon} />
                        </div>
                        <Card.Text>Time : {this.props.weatherInfo.time}</Card.Text>
                        <Card.Text>Temp:  {this.props.weatherInfo.temp}</Card.Text>
                        <Card.Text>Feels Like:  {this.props.weatherInfo.feelsLike}</Card.Text>
                        <Card.Text>Weather description:  {this.props.weatherInfo.weather_description}</Card.Text>
                        <Card.Text>Min Temp:  {this.props.weatherInfo.temp_min}</Card.Text>
                        <Card.Text>Max Temp:  {this.props.weatherInfo.temp_max}</Card.Text>
                        <Card.Text>Humidity:  {this.props.weatherInfo.humidity}</Card.Text>
                        <Card.Text>Wind Speed:  {this.props.weatherInfo.wind_speed}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}


export default WeatherCard;

