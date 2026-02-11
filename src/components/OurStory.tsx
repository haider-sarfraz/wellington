import React from 'react';
import ourStoryImage from '../assets/images/our-story.png';

const OurStory: React.FC = () => {
  return (
    <section className="bg-sage py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h2 className="text-6xl md:text-7xl font-radicalis text-gray-800 leading-none">
              Our Story
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed font-modern-sans">
              Some moments deserve more than documentation — they deserve to be felt again, long after the day has passed. Wellington Jade Studio creates cinematic wedding imagery for couples who want their story told with elegance, intention, and emotional depth. Every photo and every frame is crafted to preserve not just the moment, but its meaning — creating a timeless keepsake that can be shared, revisited, and cherished by generations to come.
            </p>
          </div>

          {/* Right Side - Image with Golden Border */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <img 
                src={ourStoryImage} 
                alt="Bride with elegant wedding dress" 
                className="w-full max-w-md rounded-lg shadow-2xl border-2 border-gold p-2 bg-white"
                style={{
                  borderStyle: 'solid',
                  borderWidth: '2px',
                  borderColor: '#d4af37',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;

