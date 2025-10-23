import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from './Button'

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `mx-3 py-2 text-sm font-medium transition-colors hover:text-brand-yellow ${
        isActive ? 'text-brand-yellow' : 'text-gray-300'
      }`
    }
  >
    {children}
  </NavLink>
);

const Header = ({ onBookNowClick }) => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 py-4">
      <div className="container mx-auto max-w-7xl px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          HiruD <span className="text-brand-yellow">Studio</span>
        </Link>
        <nav>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/portfolio">Portfolio</NavItem>
          <NavItem to="/videography">Videography</NavItem>
          <NavItem to="/services">Services</NavItem>
          <NavItem to="/testimonials">Testimonials</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <NavItem to="/packages">Packages</NavItem>
        </nav>
        <Button onClick={onBookNowClick} variant="primary">
          Book Now
        </Button>
      </div>
    </header>
  )
}

export default Header