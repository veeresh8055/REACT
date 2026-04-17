import Background from './components/Background'

const App = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
       <Background />
       <div className=' fixed left-0 z-3 w-full h-full  '>

       </div>
    </div>
  )
}

export default App