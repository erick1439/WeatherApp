import React, { useState, useEffect } from 'react';
import { Navbar, FormControl, Button, Container} from 'react-bootstrap'
import "./Navegation.css"

function Navegation(props) {

    console.log(props);

    const [city, setCity] = useState('');
    const [region, setRegion] = useState('');
    const [temp, setTemp] = useState('');
    const [icon, setIcon] = useState('');

    const getWeather = (city) => {

        fetch ("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=3adf9dfabe4e331cfafdbd65868b459e").then(res => res.json()).then((result) => {

            setTemp(Math.round(result.main.temp).toString());
            setIcon("https://openweathermap.org/img/wn/" + result.weather[0].icon + "@2x.png");
        });
    }

    const getCity = () => {

        fetch('https://extreme-ip-lookup.com/json/?key=CwKhs51hn10LK8Q6Lae0')
            .then( res => res.json())
            .then(response => {

                setCity(response.city);
                setRegion(response.region);
                
                getWeather(response.city);

            })
            .catch((data, status) => {
                alert("Location Service Error")
            })
    }

    useEffect(() => {
        getCity();
    }, []);

    return(
        <Container fluid>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand>Weather Website</Navbar.Brand>
                <Navbar.Text className="item">
                    <p className="info">{city}, {region} {temp} &deg;F</p>
                    <img alt="weather icon" heigth="50px" width="40px" src={icon}/>
                </Navbar.Text>
                <div id="navbarSearch">
                    <FormControl
                        type="search"
                        placeholder="Search City"
                        className="mr-2"
                        aria-label="Search" 
                    />
                    <Button className="search" value={props.searchedCity} variant="outline-success" onClick={ (event) => {props.handler(event.target.previousSibling.value);}}>Search</Button>
                </div>
            </Navbar>
        </Container>
    );
}

export default Navegation;