import React, { useEffect, useState } from 'react';
import { Carousel, Card, Button } from 'react-bootstrap'
import MoreNews from '../MoreNews/MoreNews.js';
import "./TopNews.css"

function TopNews() {
    const [news, setNews] = useState([0,0,0]);
    const [moreNews, setMoreNews] = useState([0]);

    useEffect(() => {

        fetch ('https://gnews.io/api/v4/top-headlines?&lan=en&country=us&token=f75a581225abd89ba66b2dd68cd4652b')
            .then(res => res.json())
            .then((result) => { 

            for (let i = 0; i < result.articles.length; i++) {
                if (result.articles[i].urlToImage === null)
                    result.articles.splice(i, 1);
            }

            result.articles.splice(result.articles.length - 1, 1);

            let fetchedMoreNews = result.articles.splice(3, result.articles.length);
            let fetchedNews = result.articles

            
            setNews(fetchedNews)
            setMoreNews(fetchedMoreNews)          
        });

    }, []);

    return(
        <div className="news">
            <Card.Header className="text-center">Trending News</Card.Header>
            <Carousel>
                {
                    news.map((story, index) => {
                        return(
                            <Carousel.Item key={index}>
                                <img
                                className="news-img d-block w-100"
                                src={story.image}
                                alt="First slide"
                                />
                                <Carousel.Caption className="background">
                                    <h3>{story.title}</h3>
                                    <p>{story.description}</p>
                                    <Button className="button" variant="light" onClick={() => { window.open(story.url, "_blank");}}>Read more...</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        );
                    })

                }
            </Carousel> 
            <Card.Header className=" moreNewsBar text-center">More News</Card.Header>
            <div className="cardsContainer">    
                { 
                    moreNews.map((story, index) => {
                        return(
                            <MoreNews key={index} title={story.title} urlToImage={story.image} url={story.url}/>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default TopNews;