import React from 'react'

const SectionTitle = ({ children, subtitle }) => {
  // Logic to split the title by the last space for the yellow accent
  const words = children.split(' ');
  const lastWord = words.pop();
  const firstPart = words.join(' ');

  return (
    <div className="text-center mb-12">
      {subtitle && <p className="text-sm text-brand-yellow font-medium uppercase tracking-wider mb-2">{subtitle}</p>}
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        {firstPart} <span className="text-brand-yellow">{lastWord}</span>
      </h2>
    </div>
  )
}

export default SectionTitle