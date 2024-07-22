import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
    // propTypes as a static property in a class, it means that propTypes is a static attribute of that class and can be accessed directly through the class name.
    // Define defaultProps for default values if value is not defined with component call
    // we have created .env.local file for hide api key with environment variable name REACT_APP_NEWS_API_KEY and use here
    static defaultProps = {
        country: 'in',
        pageSize: 15,
        category: 'Science',
        apiKey: process.env.REACT_APP_NEWS_API_KEY,
    }

    // Define propTypes for type checking
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        apiKey: PropTypes.string.isRequired,
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // if you want to call constructor so call from super class otherwise it will throw error
    // constructor will be called when object is created for this class
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }

        document.title = `NewsJungle - ${this.capitalizeFirstLetter(this.props.category)}`
    }
    // async is used for making asynchronous function and then wait for promise resolve  here we are using await keyword for promise resolve wait
    async updateNews() {
        this.props.setProgress(10)
        // lets create pagesize variable and use ar props from news so that we can categorize all news with props 
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100)


    }
    async componentDidMount() {
        this.updateNews()
    }
    // handleNextClick = async () => {
    //     this.updateNews();
    //     this.setState({ page: this.state.page + 1 })

    // }
    // handlePreviousClick = async () => {
    //     this.updateNews();
    //     this.setState({ page: this.state.page - 1 })
    // }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`
        // this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            // loading: false
        })

    };

    render() {
        return (
            <>
                {/* my-3 is for margin-top and col-md-4 is for taking 3 4 column in single row which contain 12 parts of grid */}
                {/* <div className='container my-3'> */}
                <h1 className='text-center' style={{ margin: '35px' }}>NewsJungle - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading && <Loading />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Loading />}
                >
                    <div className='container'>
                        <div className='row'>

                            {this.state.articles.map((element) => {
                                // new Date is used to extrat date, time from iso format and then bring date in date-month-year format using toISOString
                                const formattedData = new Date(element.publishedAt).toISOString().split('T')[0]
                                // we are giving key which is unique so all div have unique key
                                return <div className='col-md-4' key={element.url}>
                                    {/* If title is null then show empty otherwise use slice method  */}
                                    <NewsItem title={element.title ? element.title.slice(0, 44) : " "} description={element.description ? element.description.slice(0, 88) : " "} imageUrl={element.urlToImage}
                                        newsUrl={element.url} author={element.author} date={formattedData} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* we are using InfiniteScroll so commenting next and previous button */}
                {/* we are using d-flex justify-content-between bootstrap flex classes */}
                    {/* <div className='container d-flex justify-content-between'> */}
                    {/* &larr; &rarr; is used for left and right arrow */}
                {/* <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button> */}
                {/* math.ceil is used for taking larger number ex: 4.5 --> 5 */}
                {/* <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> 
                 </div> */}
            </>
        )

    }
}

// first constructor will run then render method then componentDidMount will be called
