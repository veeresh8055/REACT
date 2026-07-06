import React, { useRef , useState  } from 'react'

const App = () => {
  
  // useRef hook
  let refValue = useRef(100);

  //useState
  const [render, setrender] = useState(true)


  return (
    <>
    <div>USE REF EXAMPLE </div>
       <hr />
       <h1>  refValue : {refValue.current}</h1>
       <p>the refValue update when the component will rerender </p>
       <button onClick={()=> {  
        refValue.current = refValue.current+1
         console.log(refValue.current)
      }
        
       }>REFVALUE CHANGE</button>

       <hr />
       <hr />
       <h1>USE STATE</h1>
       <hr />
       <h1> render :{render}</h1>
       <p>the render value when we click it cause the rerender of the component </p>
        <button onClick={()=> setrender(!render)}>RENDER</button>
       </>

  )
}

export default App


// import { useState, useRef, useEffect } from 'react';

// export default function App() {
//   const [seconds, setSeconds] = useState(0);
//   const timerId = useRef(null); // Holds the interval ID across renders

//   const startTimer = () => {
//     if (timerId.current !== null) return; // Prevent duplicate timers

//     timerId.current = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//       console.log(timerId.current)
//     }, 10);

//   };

//   const stopTimer = () => {
//     clearInterval(timerId.current);
//     timerId.current = null; // Reset the ref
//   };

//   // Cleanup on unmount to prevent memory leaks
//   useEffect(() => {
//     return () => clearInterval(timerId.current);
//   }, []);

//   return (
//     <div>
//       <h1>Time: {seconds}s</h1>
//       <p>{timerId.current}</p>
//       <button onClick={startTimer}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//     </div>
//   );
// }


// import { useRef, useEffect } from 'react';

// export default function App() {
//   const inputRef = useRef(null); // Initially points to nothing

//   useEffect(() => {
//     // inputRef.current now points directly to the real <input> DOM node
//     inputRef.current.focus(); 
//   }, []);

//   return (
//     <div>
//       <h2>Login</h2>
//       {/* Attach the ref to the element using the ref prop */}
//       <input ref={inputRef} type="text" placeholder="Username" />
//       <input type="password" placeholder="Password" />
//       <button>Submit</button>
//     </div>
//   );
// }

// import { useEffect, useRef, useState } from 'react';

// export default function App() {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null); // Ref attached to the container <div>

//   useEffect(() => {
//     function handleClickOutside(event) {
//       // Check if the clicked element is outside the <div>
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <div ref={dropdownRef} className="dropdown">
//       <button onClick={() => setIsOpen(!isOpen)}>Toggle Menu</button>
//       {isOpen && (
//         <ul>
//           <li>Profile</li>
//           <li>Settings</li>
//         </ul>
//       )}
//     </div>
//   );
// }
