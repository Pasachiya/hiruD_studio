import { Routes, Route } from 'react-router-dom'
import Layout from './components/common/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Videography from './pages/Videography'
import Services from './pages/Services'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Packages from './pages/Packages' // From image_7fee3b.jpg

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="videography" element={<Videography />} />
        <Route path="services" element={<Services />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact" element={<Contact />} />
        <Route path="packages" element={<Packages />} />
        {/* Add other pages as needed */}
      </Route>
    </Routes>
  )
}

export default App