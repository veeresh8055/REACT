import  { useState, useEffect } from 'react'
import "./App.css"

const App = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const progressBar = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(progressBar)
          return 100
        }
        return prev + 1
      })
    }, 50) 

    return () => clearInterval(progressBar)
  }, [])

  return (
    <div className='main'>
      <div className="progress">
        <div className="outer">
          <div 
            className="inner" 
            style={{ width: `${count}%` }}
          ></div>
        </div>

        <div className="content">
          <h1 className='download'>
            {count === 100 ? "Downloaded" : "Downloading..."}
          </h1>
          <h4 className='progressDisplay'>
            {count}%
          </h4>
        </div>
      </div>
    </div>
  )
}

export default App