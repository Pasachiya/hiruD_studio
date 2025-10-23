import React, { useState } from 'react'

// Placeholder data
const allImages = [
  { id: 1, category: 'weddings', img: 'https://placehold.co/600x400/111/444?text=Wedding+1' },
  { id: 2, category: 'portraits', img: 'https://placehold.co/600x400/111/444?text=Portrait+1' },
  { id: 3, category: 'events', img: 'https://placehold.co/600x400/111/444?text=Event+1' },
  { id: 4, category: 'weddings', img: 'https://placehold.co/600x400/111/444?text=Wedding+2' },
  { id: 5, category: 'commercial', img: 'https://placehold.co/600x400/111/444?text=Commercial+1' },
  { id: 6, category: 'events', img: 'https://placehold.co/600x400/111/444?text=Event+2' },
  { id: 7, category: 'portraits', img: 'https://placehold.co/600x400/111/444?text=Portrait+2' },
  { id: 8, category: 'commercial', img: 'https://placehold.co/600x400/111/444?text=Commercial+2' },
  { id: 9, category: 'weddings', img: 'https://placehold.co/600x400/111/444?text=Wedding+3' },
];

const categories = ['All', 'Weddings', 'Events', 'Portraits', 'Commercial'];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const filteredImages = filter === 'All' 
    ? allImages 
    : allImages.filter(img => img.category === filter.toLowerCase());

  return (
    <div>
      {/* Page Header */}
      <section className="py-40 bg-portfolio-bg bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold text-white">
            Our <span className="text-brand-yellow">Portfolio</span>
          </h1>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="py-24 bg-black">
        <div className="container mx-auto max-w-7xl px-4">
          {/* Filter Tabs */}
          <div className="flex justify-center space-x-2 md:space-x-4 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 md:px-6 md:py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
                  filter === cat 
                    ? 'bg-brand-yellow text-black' 
                    : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredImages.map(image => (
              <div key={image.id} className="group relative overflow-hidden rounded-lg">
                <img src={image.img} alt={image.category} className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio