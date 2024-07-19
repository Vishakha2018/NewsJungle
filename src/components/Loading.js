import React, { Component } from 'react'
import spinner from './spinner.gif';

export default class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img  src={spinner} alt='loading'></img>
      </div>
    )
  }
}
