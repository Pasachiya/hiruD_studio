import React, { useState } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import BookNowModal from '../modals/BookNowModal'
import QuoteModal from '../modals/QuoteModal'

// Set app element for react-modal accessibility
import Modal from 'react-modal'
Modal.setAppElement('#root');

const Layout = () => {
  const [isBookNowOpen, setIsBookNowOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const openBookNowModal = () => setIsBookNowOpen(true);
  const closeBookNowModal = () => setIsBookNowOpen(false);
  
  const openQuoteModal = () => setIsQuoteOpen(true);
  const closeQuoteModal = () => setIsQuoteOpen(false);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header onBookNowClick={openBookNowModal} />
      <main className="flex-grow">
        {/* Pass modal triggers down to all pages via context */}
        <Outlet context={{ openBookNowModal, openQuoteModal }} />
      </main>
      <Footer />
      
      <BookNowModal
        isOpen={isBookNowOpen}
        onRequestClose={closeBookNowModal}
      />
      <QuoteModal
        isOpen={isQuoteOpen}
        onRequestClose={closeQuoteModal}
      />
    </div>
  )
}

export default Layout

// Custom hook for pages to easily access modal triggers
export function useModal() {
  return useOutletContext();
}