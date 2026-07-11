import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Men from './components/Men'
import Women from './components/Women'
import Electronics from './components/Electronics'
import Home from './components/Home'

const App = (  ) => {    
   return (
    <div className='main'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/men' element={<Men />} />
        <Route path='/women' element={<Women />} />
        <Route path='/electronics' element={<Electronics />} />
      </Routes>
    </div>
  )
}

export default App