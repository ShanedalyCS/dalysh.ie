import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar.jsx';
import Welcome from './pages/Welcome.jsx';

import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
