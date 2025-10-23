import React from 'react'
import SectionTitle from '../components/common/SectionTitle'
import { FaLightbulb, FaCheckCircle, FaAward } from 'react-icons/fa'

// Placeholder data
const teamMembers = [
  { name: 'Lahiru Deshan', role: 'Lead Photographer & Cinematographer', img: 'https://placehold.co/400x400/111/444?text=Lahiru' },
  { name: 'Nethmi Siriwardana', role: 'Lead Editor', img: 'https://placehold.co/400x400/111/444?text=Nethmi' },
  { name: 'Yasan Amarathunga', role: 'Drone Pilot & 2nd Shooter', img: 'https://placehold.co/400x400/111/444?text=Yasan' },
  { name: 'Shevan Savindu', role: 'Assistant Photographer', img: 'https://placehold.co/400x400/111/444?text=Shevan' },
];

const beliefs = [
  { title: 'Creativity', icon: <FaLightbulb size={32} />, text: 'We approach every project as a unique canvas, ready to paint a new story.' },
  { title: 'Quality', icon: <FaCheckCircle size={32} />, text: 'From high-end equipment to meticulous editing, we never compromise on quality.' },
  { title: 'Excellence', icon: <FaAward size={32} />, text: 'We strive for excellence in both our craft and our customer service experience.' },
];

const PageHeader = ({ title, bgClass, children }) => (
  <section className={`py-40 ${bgClass} bg-cover bg-center relative`}>
    <div className="absolute inset-0 bg-black opacity-70"></div>
    <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
      <h1 className="text-6xl font-bold text-white">
        About <span className="text-brand-yellow">Us</span>
      </h1>
      {children}
    </div>
  </section>
);

const About = () => {
  return (
    <div>
      {/* Page Header */}
      <PageHeader bgClass="bg-about-bg" />

      {/* Our Story Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle>Our Story</SectionTitle>
            <p className="text-gray-300 mb-4">
              HiruD Studio started with a passion for capturing life's most precious moments. We believe that every photo tells a story, every frame holds an emotion, and our mission is to preserve those memories with artistry and care.
            </p>
            <p className="text-gray-300 mb-4">
              With years of experience in wedding photography, event coverage, and commercial projects, our team brings a wealth of expertise and a fresh perspective to every shoot. We don't just take pictures; we create timeless heirlooms.
            </p>
            <p className="text-gray-300">
              From candid moments to grand celebrations, we approach each project with dedication, professionalism, and a genuine desire to exceed our clients' expectations.
            </p>
          </div>
          <div>
            <img src="https://placehold.co/600x400/111/444?text=Our+Story+Image" alt="Studio Interior" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* What We Believe Section */}
      <section className="py-24 bg-zinc-900">
        <div className="container mx-auto max-w-7xl px-4">
          <SectionTitle>What We Believe</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {beliefs.map((item) => (
              <div key={item.title} className="bg-zinc-800 p-8 rounded-lg">
                <span className="inline-block p-4 bg-brand-yellow rounded-full text-black mb-4">
                  {item.icon}
                </span>
                <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto max-w-7xl px-4">
          <SectionTitle>Meet Our Team</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <img src={member.img} alt={member.name} className="w-full h-auto object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-brand-yellow">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About