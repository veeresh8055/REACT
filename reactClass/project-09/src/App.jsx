import React from 'react'
import Home from './components/Home'

const App = () => {
  // accessing the props from Home.jsx
  let array = ["one", "two", "three", "four", "five"];

  return (
    <div>
      <Home productData="mobile phone"  user ="Veeresh " /> 
    </div>
  )
}

export default App