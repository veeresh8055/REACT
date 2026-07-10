import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Cart from './components/Cart'
import Navbar from './components/Navbar'

const App = () => {
  return (

    <>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App