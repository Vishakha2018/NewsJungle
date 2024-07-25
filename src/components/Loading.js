import React from 'react'
import spinner from './spinner.gif';

// export default class Loading extends Component {
//   render() {
// for class based Component need to import { Component } from 'react';
const Spinner=()=>{
    return (
      <div className='text-center'>
        <img  src={spinner} alt='loading'></img>
      </div>
    )
  // }
}
export default Spinner;
