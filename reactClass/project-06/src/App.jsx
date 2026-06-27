import React from 'react'

const App = () => {
  // events in react 

  // no agruments 
  function display(){
    console.log('No arguments ')
  }

  function displayUser(user){
  console.log('with Arguments -->' + user)
  }
  return (
    <>
    <div>Events In React </div>
<hr />
     pass only the reference of the function <br />
   <button onClick={display}>no args</button>
<hr />
     pass the function with arguments inside on function <br />
   <button onClick={()=>displayUser('veeresh')}>with args</button>
    </>
  )
}

export default App