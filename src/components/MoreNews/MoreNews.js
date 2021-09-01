import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './MoreNews.css'

function MoreNews(props) {
    return (
        <div className="storyCard">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.urlToImage} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Button variant="primary" onClick={() => { window.open(props.url, "_blank"); }}>Read More...</Button>
                </Card.Body>
            </Card> 
        </div>
    );
}

export default MoreNews;