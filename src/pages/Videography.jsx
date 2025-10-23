import React, { useState } from 'react'
import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/common/Button'
import { FaPlay, FaVideo, FaCalendarAlt, FaStar, FaFilm } from 'react-icons/fa'
import { useModal } from '../components/common/Layout'

// Placeholder data
const allVideos = [
  { id: 1, category: 'weddings', title: 'Sarah & Michael Wedding', img: 'https://placehold.co/600x400/111/444?text=Wedding+Video+1' },
  { id: 2, category: 'events', title: 'Tech Conference 2025', img: 'https://placehold.co/600x400/111/444?text=Event+Video+1' },
  { id: 3, category: 'commercial', title: 'Cafe Aroma Ad', img: 'https://placehold.co/600x400/111/444?text=Commercial+Video+1' },
  { id: 4, category: 'weddings', title: 'Lakefront Vows', img: 'https://placehold.co/600x400/111/444?text=Wedding+Video+2' },
  { id: 5, category: 'drones', title: 'Coastal Drone Reel', img: 'https://placehold.co/600x400/111/444?text=Drone+Video+1' },
  { id: 6, category: 'events', title: 'Music Festival 2025', img: 'https://placehold.co/600x400/111/444?text=Event+Video+2' },
  { id: 7, category: 'commercial', title: 'Startup Profile', img: 'https://placehold.co/600x400/111/444?text=Commercial+Video+2' },
  { id: 8, category: 'drones', title: 'Mountain Fly-through', img: 'https://placehold.co/600x400/111/444?text=Drone+Video+2' },
];

const categories = ['All', 'Weddings', 'Events', 'Commercial', 'Drones'];

const stats = [
  { num: '500+', text: 'Videos Made', icon: <FaVideo /> },
  { num: '200+', text: 'Happy Clients', icon: <FaStar /> },
  { num: '50+', text: 'Awards Won', icon: <FaFilm /> },
  { num: '10+', text: 'Years Experience', icon: <FaCalendarAlt /> },
];

const videoServices = [
  { title: 'Wedding Films', desc: 'Cinematic storytelling of your big day.'},
  { title: 'Event Coverage', desc: 'Dynamic highlights and full event capture.'},
  { title: 'Commercial Videos', desc: 'Engaging content for your brand.'},
  { title: 'Drone Footage', desc: 'Breathtaking aerial perspectives.'},
];

const Videography = () => {
  const [filter, setFilter] = useState('All');
  const { openQuoteModal } = useModal();
  
  const filteredVideos = filter === 'All' 
    ? allVideos 
    : allVideos.filter(vid => vid.category === filter.toLowerCase());

  return (
    <div>
      {/* Page Header */}
      <section className="py-40 bg-video-bg bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold text-white">
            Our <span className="text-brand-yellow">Videography</span>
          </h1>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Bringing stories to life through cinematic and professional video production.
          </p>
          <Button variant="primary" className="mt-8">
            <FaPlay className="inline mr-2" /> Watch Showreel
          </Button>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="py-24 bg-black">
        <div className="container mx-auto max-w-7xl px-4">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {filteredVideos.map(video => (
              <div key={video.id} className="group relative overflow-hidden rounded-lg cursor-pointer">
                <img src={video.img} alt={video.title} className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                  <span className="p-4 bg-brand-yellow text-black rounded-full mb-4 opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all">
                    <FaPlay size={20} />
                  </span>
                  <h3 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map(stat => (
              <div key={stat.text}>
                <h3 className="text-5xl font-bold text-brand-yellow mb-2">{stat.num}</h3>
                <p className="text-lg text-gray-300">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Production Services */}
      <section className="py-24 bg-black">
        <div className="container mx-auto max-w-7xl px-4">
          <SectionTitle>Video Production Services</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {videoServices.map(service => (
              <div key={service.title} className="bg-zinc-900 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-900 text-center">
        <div className="container mx-auto max-w-7xl px-4">
           <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Create Your <span className="text-brand-yellow">Story ?</span>
          </h2>
          <p className="text-gray-400 mt-4 mb-8 text-lg">
            Let's discuss your project goals and bring your vision to life.
          </p>
          <Button onClick={openQuoteModal} variant="primary">
            Start Your Project
          </Button>
        </div>
      </section>

    </div>
  )
}

export default Videography