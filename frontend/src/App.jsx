import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Pages
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Success from './Pages/Success';
import MenuPage from './Pages/MenuPage';

// Components
import OverlayBlocker from './components/OverlayBlocker';
import Reservation from './components/Reservation';

import './App.css'

const App = () => {
  return (
    <>
      <Router>
        <OverlayBlocker />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/reservation' element={<Reservation/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='/menu' element={<MenuPage/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Toaster/>
      </Router>
    </>
  )
}

export default App