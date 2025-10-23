import React from 'react'
import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/common/Button'
import { useModal } from '../components/common/Layout'
import { FaCheck, FaCamera, FaVideo, FaUser, FaBuilding, FaFighterJet } from 'react-icons/fa'

// Placeholder data
const servicesData = [
  {
    icon: <FaCamera size={32} />,
    title: 'Wedding Photography & Videography',
    desc: 'Capturing the magic of your special day, from candid moments to cinematic highlights.',
    includes: ['Full-day Coverage', 'Cinematic Highlight Film', 'High-res Digital Gallery', 'Couple Portraits'],
  },
  {
    icon: <FaVideo size={32} />,
    title: 'Event Coverage',
    desc: 'Professional coverage of corporate events, parties, conferences, and live performances.',
    includes: ['Multi-camera Setup', 'Event Highlight Video', 'Full-length Recording', 'Candid Photos'],
  },
  {
    icon: <FaUser size={32} />,
    title: 'Studio Portraits',
    desc: 'Professional headshots and creative portraits in our fully-equipped studio.',
    includes: ['Multiple Backdrops', 'Professional Lighting', 'Outfit Changes', 'Expert Retouching'],
  },
  {
    icon: <FaBuilding size={32} />,
    title: 'Commercial Shoots',
    desc: 'High-quality product, fashion, and brand photography for businesses.',
    includes: ['Product Packshots', 'Lifestyle/Brand Imagery', 'Corporate Headshots', 'Studio or On-location'],
  },
  {
    icon: <FaFighterJet size={32} />,
    title: 'Drone Cinematography',
    desc: 'Stunning 4K aerial footage and photography for a unique perspective.',
    includes: ['Licensed Drone Pilot', '4K Aerial Video', 'High-res Aerial Photos', 'Full Editing'],
  },
];

const ServiceItem = ({ icon, title, desc, includes, onQuoteClick }) => (
  <div className="bg-zinc-900 p-8 rounded-lg flex flex-col md:flex-row gap-8 items-center border border-zinc-800">
    <div className="flex-shrink-0 text-center">
      <span className="inline-block p-5 bg-brand-yellow rounded-full text-black">
        {icon}
      </span>
    </div>
    <div className="flex-grow">
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{desc}</p>
      <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
        {includes.map(item => (
          <div key={item} className="flex items-center text-gray-300">
            <FaCheck className="text-brand-yellow mr-2 flex-shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="flex-shrink-0 mt-4 md:mt-0">
      <Button onClick={onQuoteClick} variant="outline">
        Request a Quote
      </Button>
    </div>
  </div>
);

const Services = () => {
  const { openQuoteModal } = useModal();

  return (
    <div>
      {/* Page Header */}
      <section className="py-40 bg-services-bg bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold text-white">
            Our <span className="text-brand-yellow">Services</span>
          </h1>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            We offer a comprehensive range of photography and videography services tailored to your unique needs.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-black">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="space-y-8">
            {servicesData.map((service) => (
              <ServiceItem 
                key={service.title} 
                {...service} 
                onQuoteClick={openQuoteModal} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Packages CTA */}
      <section className="py-24 bg-zinc-900 text-center">
        <div className="container mx-auto max-w-7xl px-4">
           <h2 className="text-4xl md:text-5xl font-bold text-white">
            Custom Packages <span className="text-brand-yellow">Available</span>
          </h2>
          <p className="text-gray-400 mt-4 mb-8 text-lg">
            Every project is unique. Let's discuss your specific needs and create a package that works perfectly for you.
          </p>
          <Button onClick={openQuoteModal} variant="primary">
            Get Custom Quote
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Services