import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import "./App.css"

import LandingPage from './pages/LandingPage'
import SearchCar from './pages/SearchCar'
import SearchResult from './pages/SearchResult'


function App() {

  // const [isSingle, setIsSingle] = useState(true)
  // const [showSidebar, setShowSidebar] = useState(false)

  // const handel = () => {
  //   setIsSingle(!isSingle)
  // }

  // const handelSidebar = () => {
  //   setShowSidebar(!showSidebar)
  // }

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element= {<LandingPage />} />
        <Route path='/SearchCar' element= {<SearchCar />} />
        <Route path='/Search/:id' element= {<SearchResult />} />
      </Routes>
    </Router>
     
      {/* {!isSingle ? <p>saya sigle</p> : <p>sudah menikah</p>} */}
      {/* {showSidebar && <p>Sidebar muncul</p>} */}
      {/* <button onClick={handel}> Rubah status </button> */}
      {/* <button onClick={handelSidebar}>{showSidebar } </button> */}
    </>
  )
}

export default App
