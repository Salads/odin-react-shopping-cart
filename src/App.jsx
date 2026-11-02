import { useState } from 'react'
import { Outlet  } from 'react-router';
import './App.css'

import Navbar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
