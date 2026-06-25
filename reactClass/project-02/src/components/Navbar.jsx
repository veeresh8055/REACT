import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className="logo">X</div>
        <div className="links">
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
            <p>Projects</p>
        </div>
        <div className="button">
            <button className='login'>Login</button>
            <button className='signup'>Signup</button>
        </div>
      </div>
    )
  }
}
