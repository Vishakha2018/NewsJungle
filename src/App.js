import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
          {/* exact is used for only match if the path matches the location.pathname exactly. */}
          {/* We have to give unique key id to every route so all time component will render otherwise only route path changes but component is render only once */}
            <Route exact path="/" element={<News key="general"  category='general' />} />
            <Route exact path="/entertainment" element={<News key="entertainment" category='entertainment' />} />
            <Route exact path="/science" element={<News key="science" category='science' />} />
            <Route exact path="/health" element={<News key="health" category='health' />} />
            <Route exact path="/general" element={<News key="general" category='general' />} />
            <Route exact path="/business" element={<News key="business" category='business' />} />
            <Route exact path="/sports" element={<News key="sports" category='sports' />} />
            <Route exact path="/technology" element={<News key="technology" category='technology' />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

