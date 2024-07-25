import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


// export default class App extends Component {
  // state={
  //   progress: 0,
  // }
  // setProgress=(progress)=>{
  //   this.setState({progress:progress})
  // }
  const App =()=>{
  const [progress,setProgress]=useState(0)
    return (
      <div>
        <Router>
          
          <Navbar />
          <LoadingBar color="#f11946" height={3} progress={progress}/> {/* To show loading bar */}
          <Routes>
          {/* exact is used for only match if the path matches the location.pathname exactly. */}
          {/* We have to give unique key id to every route so all time component will render otherwise only route path changes but component is render only once */}
            <Route exact path="/" element={<News setProgress={setProgress} key="general"  category='general' />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" category='entertainment' />} />
            <Route exact path="/science" element={<News setProgress={setProgress} key="science" category='science' />} />
            <Route exact path="/health" element={<News setProgress={setProgress} key="health" category='health' />} />
            <Route exact path="/general" element={<News setProgress={setProgress} key="general" category='general' />} />
            <Route exact path="/business" element={<News setProgress={setProgress} key="business" category='business' />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" category='sports' />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" category='technology' />} />
          </Routes>
        </Router>
        
      </div>
    );
}
export default App;

