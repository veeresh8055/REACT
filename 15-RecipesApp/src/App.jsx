import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='text-white font-thin w-screen h-screen
      bg-gray-800 py-10 px-[10%] '>
        <Navbar />
      <Mainroutes />
    </div>
  )
}

export default App