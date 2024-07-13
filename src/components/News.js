import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    // if you want to call constructor so call from super class otherwise it will throw error
    // constructor will be called when object is created for this class
    constructor() {
        super();
        console.log('constructor')
    }
    render() {
        return (
            // my-3 is for margin-top and col-md-4 is for taking 3 4 column in single row which contain 12 parts of grid
            <div className='container my-3'>
                <h2>NewsJungle - Top Headlines</h2>
                <div className='row'>
                    <div className='col-md-4'><NewsItem title="title" description="description" imageUrl="https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png"/>
                    </div>
                    <div className='col-md-4'><NewsItem />
                    </div>
                    <div className='col-md-4'><NewsItem />
                    </div>


                </div>
            </div>
        )
    }
}
