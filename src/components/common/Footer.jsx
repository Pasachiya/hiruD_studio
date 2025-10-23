import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo & Slogan */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              HiruD <span className="text-brand-yellow">Studio</span>
            </h3>
            <p className="text-gray-400 mt-2 text-sm">
              Capturing emotions through every frame.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-brand-yellow text-sm">About</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-brand-yellow text-sm">Portfolio</Link></li>
              <li><Link to="/videography" className="text-gray-400 hover:text-brand-yellow text-sm">Videography</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-brand-yellow text-sm">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-brand-yellow text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact (from Contact page) */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
             <ul className="space-y-2 text-sm text-gray-400">
                <li>123 Studio Street, Colombo 07</li>
                <li>Sri Lanka</li>
                <li className="pt-2">+94 77 123 4567</li>
                <li>hello@hirudstudio.com</li>
             </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-yellow"><FaInstagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-yellow"><FaFacebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-yellow"><FaYoutube size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-700 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} HiruD Studio. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-1">
            Designed by Nethmi Siriwardana
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer