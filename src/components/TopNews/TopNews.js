import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap'
import MoreNews from '../MoreNews/MoreNews.js';
import "./TopNews.css"


class TopNews extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            length : 0,
            news : [0, 0, 0],
            moreNews : [0]
        }
    }

    getNews() {

        fetch ('https://newsapi.org/v2/top-headlines?country=us&apiKey=d960dcc8aae0413c9aba0c5ad0c717d4').then(res => res.json()).then((result) => { 

            for (let i = 0; i < result.articles.length; i++) {
                if (result.articles[i].urlToImage === null)
                    result.articles.splice(i, 1);
            }

            let moreNews = result.articles.splice(3, result.articles.length / 3);
            let news = result.articles

            
            this.setState({
                length : result.articles.length,
                news : news,
                moreNews : moreNews
            });
            
        });
    }

    componentDidMount() {
        this.getNews();
    }

    render() {
        return(
            <div className="news">
                <Card.Header className="text-center">Trending News</Card.Header>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={this.state.news[0].urlToImage}
                        alt="First slide"
                        />
                        <Carousel.Caption className="background">
                            <h3>{this.state.news[0].title}</h3>
                            <p>{this.state.news[0].description}</p>
                            <Button className="button" variant="light" onClick={() => { window.open(this.state.news[0].url, "_blank");}}>Read more...</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={this.state.news[1].urlToImage}
                        alt="Second slide"
                        />

                        <Carousel.Caption className="background">
                            <h3>{this.state.news[1].title}</h3>
                            <p>{this.state.news[1].description}</p>
                            <Button className="button" variant="light" onClick={() => { window.open(this.state.news[1].url, "_blank");}}>Read more...</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={this.state.news[2].urlToImage}
                        alt="Third slide"
                        />

                        <Carousel.Caption className="background">
                            <h3>{this.state.news[2].title}</h3>
                            <p>{this.state.news[2].description}</p>
                            <Button className="button" variant="light" onClick={() => { window.open(this.state.news[2].url, "_blank");}}>Read more...</Button>
                        </Carousel.Caption>         
                    </Carousel.Item>
                </Carousel> 
                <Card.Header className=" moreNewsBar text-center">More News</Card.Header>
                <div className="cardsContainer">    
                    { 
                        this.state.moreNews.map((story, index) => {
                            return(
                                <MoreNews key={index} title={story.title} urlToImage={story.urlToImage} url={story.url}/>
                            );
                        })
                    }
                </div>
            </div>
        
        
        );
    }
}

export default TopNews;