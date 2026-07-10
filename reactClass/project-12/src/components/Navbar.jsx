import React from 'react'
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <div className="navbar__logo-mark">S</div>
        <div className="navbar__brand-text">
          <span className="navbar__title">ShopBy</span>
          <span className="navbar__subtitle">Modern commerce UI</span>
        </div>
      </div>

      <div className="navbar__search">
        <span className="navbar__search-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
            <path d="M10.5 4a6.5 6.5 0 1 0 4.13 11.53l4.42 4.42 1.42-1.42-4.42-4.42A6.5 6.5 0 0 0 10.5 4Zm0 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z" />
          </svg>
        </span>
        <input type="text" placeholder="Search products" aria-label="Search products" />
      </div>

      <nav className="navbar__links" aria-label="Primary navigation">
        <NavLink
          to="/"
          end
          className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/men"
          className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}
        >
          Men
        </NavLink>
        <NavLink
          to="/women"
          className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}
        >
          Women
        </NavLink>
        <NavLink
          to="/electronics"
          className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}
        >
          Electronics
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
