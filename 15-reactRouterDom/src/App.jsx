import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Navbar  from './components/Navbar'
const App = () => {
  return (
    <div className="main w-screen h-screen bg-gray-500 text-amber-100 p-10 ">

     <Navbar />
   <Routes >
      <Route path='/' element={<Home />} />   
      <Route path='/home' element={<Home />} />   
      <Route path='/about' element={<About />} />   
      <Route path='/service' element={<Service />} />   
  </Routes>
    </div>
  )
}

export default App