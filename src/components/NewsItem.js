import React, { Component } from 'react'

export default class NewsItem extends Component {

    // we have to extract some props so we are destructuring here 

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        console.log(description === null ? description : title)
        return (
            <div className='my-3'>

                <div className="card" style={{height:'450px'}}>
                    <div style={{
                        right: '0',
                        justifyContent: 'flex-end',
                        display: 'flex',
                        position: 'absolute'}}>
                    {/* If multiple elements overlap, the element with the highest 
                    z-index will appear on top. so image zindex is 0 and span zindex is 1 so span will overlap */}
                    <span className="badge rounded-pill text-bg-danger"
                    // style={{ zIndex: '3', left: '89%' }}
                    >{source}
                    </span>
                </div>
                <img src={imageUrl ? imageUrl : "https://www.communicationstoday.co.in/wp-content/uploads/2024/07/SpaceX-launches-direct-to-cell-Starlink-satellites-from-California.jpg"}
                 className="card-img-top" alt="..." style={{height:'200px'}}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description === null ? description : title}</p>
                    <p className="card-text"><small className="text-danger">By {!author ? "unknown" : author} on {date}</small></p>
                    {/* newsUrl s javascript element so we have to use in curly bracket {} */}
                    <a href={newsUrl} className="btn btn-dark">Read More..</a>

                </div>
            </div>
            </div >
        )
    }
}
