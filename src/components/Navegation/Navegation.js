import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'
import "./Navegation.css"

class Navegation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city : "",
            region : "",
            temp : "",
            icon : ""
        }
    }

    getCity() {

        fetch('https://extreme-ip-lookup.com/json/')
            .then( res => res.json())
            .then(response => {
                
                this.setState({
                    city : response.city,
                    region : response.region
                });

                this.getWeather(response.city);

            })
            .catch((data, status) => {
                alert("Location Service Error")
            })
    }
    

    getWeather(city) {
        
        
        fetch ("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=3adf9dfabe4e331cfafdbd65868b459e").then(res => res.json()).then((result) => {

            this.setState({
                temp : Math.round(result.main.temp).toString(),
                icon : "http://openweathermap.org/img/wn/" + result.weather[0].icon + "@2x.png",
            });
        });
    }

    componentDidMount() {

        this.getCity();
    }

    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <h3 className="item">Weather Website</h3>
                    <div className="item">
                        <p className="info">{this.state.city}, {this.state.region} {this.state.temp} &deg;F</p>
                        <img alt="weather icon" heigth="50px" width="40px" src={this.state.icon}/>
                    </div>
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search City"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success" onClick={ (event) => {this.props.handler(event.target.previousSibling.value);}}>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navegation;