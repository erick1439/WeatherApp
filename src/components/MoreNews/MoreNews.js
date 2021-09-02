import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './MoreNews.css'

function MoreNews(props) {
    return (
        <Card className="bg-dark cardMore dark"style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.urlToImage} />
            <Card.Body className="cardMoreBody ">
                <Card.Title>{props.title}</Card.Title>
                <Button className="cardMoreButton" variant="light" onClick={() => { window.open(props.url, "_blank"); }}>Read More...</Button>
            </Card.Body>
        </Card> 
    );
}

export default MoreNews;