import { useState } from 'react'
import { Outlet  } from 'react-router';
import './App.css'

import Navbar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <div className='flex flex-col w-full min-h-dvh bg-zinc-200 px-8'>
      <Navbar></Navbar>
      <div className='flex flex-col flex-1 bg-purple-50'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
