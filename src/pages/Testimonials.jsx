import React from 'react'
import SectionTitle from '../components/common/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { FaStar } from 'react-icons/fa'

// Placeholder data
const mainTestimonials = [
  {
    name: 'Sarah & Michael',
    service: 'Wedding Photography',
    quote: "HiruD Studio captured our wedding day perfectly! Every moment, every emotion was beautifully documented. We couldn't be happier with the results.",
    img: 'https://placehold.co/100x100/111/444?text=S+&+M'
  },
  {
    name: 'David Chen',
    service: 'Corporate Event',
    quote: "Professional, creative, and efficient. The team delivered exceptional coverage of our annual conference. Highly recommended.",
    img: 'https://placehold.co/100x100/111/444?text=David'
  },
];

const gridTestimonials = [
  {
    name: 'Emma Rodriguez',
    service: 'Studio Portraits',
    quote: "The studio session was so comfortable and fun. The final portraits exceeded my expectations. Truly talented photographers!",
    img: 'https://placehold.co/80x80/111/444?text=Emma'
  },
  {
    name: 'James Wilson',
    service: 'Commercial Shoot',
    quote: "Our branding shots were on-point. The photography was high-quality and significantly improved our marketing materials.",
    img: 'https://placehold.co/80x80/111/444?text=James'
  },
  ...mainTestimonials // Re-using the main ones for the grid
];

const Stars = () => (
  <div className="flex justify-center space-x-1 text-brand-yellow my-4">
    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
  </div>
);

const Testimonials = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="py-40 bg-testimonials-bg bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold text-white">
            Client <span className="text-brand-yellow">Testimonials</span>
          </h1>
        </div>
      </section>

      {/* Main Slider */}
      <section className="py-24 bg-zinc-900">
        <div className="container mx-auto max-w-4xl px-4">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
            className="pb-12" // Add padding-bottom for pagination dots
          >
            {mainTestimonials.map((item) => (
              <SwiperSlide key={item.name}>
                <div className="text-center p-8">
                  <img src={item.img} alt={item.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-brand-yellow" />
                  <Stars />
                  <blockquote className="text-xl italic text-white max-w-2xl mx-auto mb-4">
                    "{item.quote}"
                  </blockquote>
                  <h4 className="text-lg font-semibold text-white">{item.name}</h4>
                  <p className="text-brand-yellow">{item.service}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Grid Testimonials */}
      <section className="py-24 bg-black">
        <div className="container mx-auto max-w-7xl px-4">
          <SectionTitle>What Our Clients Say</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gridTestimonials.map((item) => (
              <div key={item.name} className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
                <div className="flex items-center mb-4">
                  <img src={item.img} alt={item.name} className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">{item.name}</h4>
                    <p className="text-sm text-brand-yellow">{item.service}</p>
                  </div>
                </div>
                <Stars />
                <p className="text-gray-300 italic">"{item.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials