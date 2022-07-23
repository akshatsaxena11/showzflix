import React from 'react'
import './App.scss'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Header from './Components/Header'
import Tvshows from './Components/Tvshows'
import Movie from './Components/Movie'
import Recentlyadded from './Components/Recentlyadded'
import Recommendations from './Components/Recommendations'
import Search from './Components/Search '
import Footer from './Components/Footer'
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/Tvshows" element={<Tvshows />}/>
        <Route path="/Movies" element={<Movie />}/>
        <Route path="/Recent" element={<Recentlyadded />}/>
        <Route path="/recommend" element={<Recommendations/>}/>
        <Route path="/Search" element={<Search />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
