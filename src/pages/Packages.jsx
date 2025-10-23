import React from 'react'
import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/common/Button'
import { FaCheck } from 'react-icons/fa'
import { useModal } from '../components/common/Layout'

// Placeholder data
const packagesData = [
  {
    title: 'Graduation Photography',
    price: 'Rs. 6,000',
    duration: 'Per hour',
    popular: false,
    features: ['On-location Shoot', 'Unlimited Photos', '20 Edited Photos', 'Online Gallery Access', '10 4R Prints'],
  },
  {
    title: 'Birthday Package',
    price: 'Rs. 20,000',
    duration: '3-4 hours',
    popular: true,
    features: ['Event Coverage (3-4hrs)', 'Unlimited Photos', '100-150 Edited Photos', 'Online Gallery Access', 'Candid Moments', 'Group Photos', 'Mini Album (20 Pages)'],
  },
  {
    title: 'Baby Photoshoot',
    price: 'Rs. 20,000',
    duration: '2-3 hours',
    popular: true,
    features: ['Studio or Home Session', 'Unlimited Photos', '2-3 Themed Setups', 'Props & Outfits Included', 'Family Portraits Included', '50 Edited Photos', 'Mini Album'],
  },
  {
    title: 'Model Shoot',
    price: 'Rs. 15,000',
    duration: 'Per 2 hours',
    popular: false,
    features: ['Studio or Outdoor', 'Unlimited Photos', '3-4 Outfit Changes', 'Professional Lighting', '30 High-end Retouched Photos', 'Online Gallery', 'Posing Guidance'],
  },
];

const PackageCard = ({ pkg, onBookClick }) => (
  <div className={`bg-zinc-900 p-8 rounded-lg border-2 ${pkg.popular ? 'border-brand-yellow' : 'border-zinc-800'} relative flex flex-col`}>
    {pkg.popular && (
      <span className="absolute -top-4 right-6 bg-brand-yellow text-black text-xs font-bold px-3 py-1 rounded-full">Popular</span>
    )}
    <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
    <p className="text-4xl font-bold text-brand-yellow mb-1">{pkg.price}</p>
    <p className="text-gray-400 text-sm mb-6">{pkg.duration}</p>
    
    <ul className="space-y-3 mb-8 flex-grow">
      {pkg.features.map(feature => (
        <li key={feature} className="flex items-center text-gray-300">
          <FaCheck className="text-brand-yellow mr-3 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>

    <Button onClick={onBookClick} variant={pkg.popular ? 'primary' : 'outline'} className="w-full">
      Book This Package
    </Button>
  </div>
);

const Packages = () => {
  const { openBookNowModal, openQuoteModal } = useModal();

  return (
    <div>
      {/* Page Header */}
      <section className="py-40 bg-packages-bg bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold text-white">
            Our <span className="text-brand-yellow">Packages</span>
          </h1>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Affordable pricing for every special moment.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-24 bg-black">
        <div className="container mx-auto max-w-7xl px-4">
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Choose from our carefully crafted packages designed to capture your special moments perfectly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packagesData.map(pkg => (
              <PackageCard key={pkg.title} pkg={pkg} onBookClick={openBookNowModal} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom CTA */}
      <section className="py-24 bg-zinc-900 text-center">
        <div className="container mx-auto max-w-7xl px-4">
           <h2 className="text-4xl md:text-5xl font-bold text-white">
            Need a Custom <span className="text-brand-yellow">Package?</span>
          </h2>
          <p className="text-gray-400 mt-4 mb-8 text-lg">
            Don't see exactly what you're looking for? We can create a custom package tailored to your specific needs and budget.
          </p>
          <Button onClick={openQuoteModal} variant="primary">
            Request Custom Quote
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Packages