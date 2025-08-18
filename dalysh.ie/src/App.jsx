import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link} from 'react-router-dom'

import Navbar from './components/Navbar.jsx';
import Welcome from './pages/Welcome.jsx';
import Projects from './pages/Projects.jsx'

import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <>
      <Navbar/>
      {/* <BrowserRouter> */}
        <Routes>
          <Route index element={<Welcome/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
