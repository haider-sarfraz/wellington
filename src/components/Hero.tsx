import React from 'react';
import homePageCover from '../assets/images/home-page-cover.png';
import logo from '../assets/images/logo.png';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Grayscale Filter */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${homePageCover})`,
          filter: 'grayscale(100%)',
        }}
      />
      
      {/* Semi-transparent Light Gray Arched Overlay with Golden Border */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 md:px-8">
        <div 
          className="relative bg-gray-200 bg-opacity-40 backdrop-blur-sm px-8 py-12 md:px-16 md:py-20 border-2 border-gold flex flex-col items-center justify-center"
          style={{
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            minWidth: 'min(90vw, 500px)',
            minHeight: 'min(70vh, 400px)',
          }}
        >
          {/* Logo */}
          <div className="mb-6">
            <img 
              src={logo} 
              alt="Wellington Jade Studio Logo" 
              className="w-32 h-32 object-contain"
            />
          </div>
          
          {/* Tagline */}
          <p className="text-white text-center text-lg md:text-xl font-carla leading-relaxed max-w-2xl uppercase tracking-wide">
            <span className="block">CRAFTING EXQUISITE WEDDING PHOTOGRAPHY</span>
            <span className="text-3xl md:text-4xl text-gold block my-2 font-radicalis">&</span>
            <span className="block">FILMS THAT BECOME TIMELESS KEEPSAKES.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

