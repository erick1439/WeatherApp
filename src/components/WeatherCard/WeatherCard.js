import React from 'react';
import { Card } from 'react-bootstrap'

import "./WeatherCard.css"

class WeatherCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time : "",
            temp : "",
            feelsLike : "",
            weather_description: "",
            icon : "",
            temp_min : "", 
            temp_max : "", 
            humidity : "", 
            wind_speed : ""
        };
    }

    getWeather() {
        fetch ('http://api.openweathermap.org/data/2.5/forecast?q=orlando&cnt=5&units=imperial&appid=3adf9dfabe4e331cfafdbd65868b459e').then(res => res.json()).then((result) => {

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
        });
        
    }

    componentDidMount() {

        this.getWeather();

    }

    render() {
        return(
            <div>
                <Card className="card">
                    <Card.Body>
                        <Card.Title className="font-weight-bold">{this.props.title} : {this.props.city}</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <div className="weatherImage">
                            <Card.Img src={this.state.icon} />
                        </div>
                        <Card.Text>Time : {this.state.time}</Card.Text>
                        <Card.Text>Temp:  {this.state.temp}</Card.Text>
                        <Card.Text>Feels Like:  {this.state.feelsLike}</Card.Text>
                        <Card.Text>Weather description:  {this.state.weather_description}</Card.Text>
                        <Card.Text>Min Temp:  {this.state.temp_min}</Card.Text>
                        <Card.Text>Max Temp:  {this.state.temp_max}</Card.Text>
                        <Card.Text>Humidity:  {this.state.humidity}</Card.Text>
                        <Card.Text>Wind Speed:  {this.state.wind_speed}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}


export default WeatherCard;

