import React from 'react';
import { Carousel, Card } from 'react-bootstrap'
import "./TopNews.css"


class TopNews extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            length : 0,
            news : [0, 0, 0]
        }
    }

    getNews() {

        fetch ('https://newsapi.org/v2/top-headlines?country=us&apiKey=d960dcc8aae0413c9aba0c5ad0c717d4').then(res => res.json()).then((result) => { 

            for (let i = 0; i < result.articles.length; i++) {
                if (result.articles[i].urlToImage === null)
                    result.articles.splice(i, 1);
            }
            
            this.setState({
                length : result.articles.length,
                news : result.articles
            });
        });
    }

    componentDidMount() {

        this.getNews();
    }

    render() {
        return(
            <div>
                <Card.Header className="text-center">Trending News</Card.Header>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={this.state.news[0].urlToImage}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <div className="background">
                            <h3>{this.state.news[0].title}</h3>
                            <p>{this.state.news[0].description}</p>
                        </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={this.state.news[1].urlToImage}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <div className="background">
                            <h3>{this.state.news[1].title}</h3>
                            <p>{this.state.news[1].description}</p>
                        </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={this.state.news[2].urlToImage}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <div className="background">
                            <h3>{this.state.news[2].title}</h3>
                            <p>{this.state.news[2].description}</p>
                        </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default TopNews;