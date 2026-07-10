import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="brand">
        <span className="brand-icon">X</span>
        <span className="brand-text">Xenova</span>
      </NavLink>

      <div className="nav-links">
        <NavLink to="/"  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Home
        </NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Dashboard
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          About
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Cart
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar