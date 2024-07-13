import React, { Component } from 'react'

export default class NewsItem extends Component {
    
    // we have to extract some props so we are destructuring here 

    render() {
        let {title, description,imageUrl} = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href="/newdetails" className="btn btn-primary">Read More..</a>
                        </div>
                </div>      
            </div>
        )
    }
}
