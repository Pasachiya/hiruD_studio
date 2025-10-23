import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/common/Button'
import SectionTitle from '../components/common/SectionTitle'
import { useModal } from '../components/common/Layout' // Import the hook

// Placeholder data for services
const homeServices = [
  { title: 'Wedding Photography', img: 'https://placehold.co/600x400/111/444?text=Wedding' },
  { title: 'Event Coverage', img: 'https://placehold.co/600x400/111/444?text=Event' },
  { title: 'Studio Portraits', img: 'https://placehold.co/600x400/111/444?text=Portrait' },
];

const Home = () => {
  const { openQuoteModal } = useModal(); // Get the modal trigger

  return (
    <div>
      {/* Hero Section */}
      <section className="h-screen bg-hero-bg bg-cover bg-center flex items-center justify-center text-center relative">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
            Capturing Emotions Through Every Frame
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional photography and cinematography for your most precious moments
          </p>
          <Button variant="primary" className="text-lg px-8 py-3">
            <Link to="/portfolio">View Our Work</Link>
          </Button>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto max-w-7xl px-4">
          <SectionTitle>Our Services</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {homeServices.map((service) => (
              <div key={service.title} className="bg-zinc-900 group">
                <div className="overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-white p-6 text-center">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-900 text-center">
        <div className="container mx-auto max-w-7xl px-4">
           <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Create <span className="text-brand-yellow">Magic ?</span>
          </h2>
          <p className="text-gray-400 mt-4 mb-8 text-lg">
            Let's bring your vision to life with stunning visuals.
          </p>
          <Button onClick={openQuoteModal} variant="primary">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home