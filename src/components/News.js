import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles = [
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": null,
            "title": "England vs West Indies LIVE: First Test, day three, Lord's – cricket score, radio commentary, video highlights and text updates",
            "description": "England host West Indies in the first Test at Lord's – follow text updates, radio commentary and video highlights.",
            "url": "http://www.bbc.co.uk/sport/cricket/live/c988yr44n07t",
            "urlToImage": "https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png",
            "publishedAt": "2024-07-12T09:37:16.9280891Z",
            "content": "Welcome to day three, likely to be the final day, of England's first Test of the summer. West Indies' dismal batting has meant that our goodbye to Jimmy Anderson has come a little prematurely - they … [+445 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
    // if you want to call constructor so call from super class otherwise it will throw error
    // constructor will be called when object is created for this class
    constructor() {
        super();
        console.log('constructor')
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    // async is used for making asynchronous function and then wait for promise resolve  here we are using await keyword for promise resolve wait
    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=56cc343931e64a9780ab91c9a5ef193a"
        let data= await fetch(url);
        let parsedData= await data.json();
        this.setState({articles: parsedData.articles})
    }
    render() {
        return (
            // my-3 is for margin-top and col-md-4 is for taking 3 4 column in single row which contain 12 parts of grid
            <div className='container my-3'>
                <h2>NewsJungle - Top Headlines</h2>
                <div className='row'>
                    {this.state.articles.map((element) => {
                        // we are giving key which is unique so all div have unique key
                        return <div className='col-md-4' key={element.url}>
                            {/* If title is null then show empty otherwise use slice method  */}
                            <NewsItem  title={element.title ? element.title.slice(0,44) : " "} description={element.description ? element.description.slice(0,88) : " "} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>
                    })}

                </div>
            </div>
        )
    
    }
}

// first constructor will run then render method then componentDidMount will be called
