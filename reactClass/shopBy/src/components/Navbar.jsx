import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
     <div className="logo">
        <h1>Shop<span>By</span></h1>
     </div>
      <input type="text" placeholder=' &#128269; Search products'/>

      <div className="links">
        <button className="login">Login</button>
        <button className="sighup">Sighup</button>
      </div>
    </div>
  )
}

export default Navbar