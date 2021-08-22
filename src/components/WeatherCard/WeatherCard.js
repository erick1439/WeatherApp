import React from 'react';
import { Card } from 'react-bootstrap'

import "./WeatherCard.css"

function WeatherCard() {
    return(
        <div>
            <Card className="card">
                <Card.Body>
                    <Card.Title className="font-weight-bold">Current Weather</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default WeatherCard;

