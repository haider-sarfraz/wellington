import { FacebookIcon } from './icon-components/FacebookIcon';
import { LinkedInIcon } from './icon-components/LinkedInIcon';
import { TwitterIcon } from './icon-components/TwitterIcon';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#556d70] text-white pt-10 pb-6 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-hatton mb-6 text-brand-super-white">
          Where your most cherished<br />moments begin.
        </h2>
        
        {/* Description */}
        <p className="font-public-sans font-light opacity-80 text-center text-sm md:text-base max-w-3xl mx-auto mb-12 leading-relaxed text-brand-super-white">
          We lead with a commitment to excellence, artistic creativity, uncompromising professionalism, a
          client-first approach, and unwavering integrity in everything we do.
        </p>
        
        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center md:text-left md:pl-[10rem]">
          {/* Email */}
          <div>
            <h3 className="opacity-90 text-sm font-public-sans font-normal mb-2">Email Address</h3>
            <p className="opacity-80 text-sm font-public-sans font-extralight">help@info.com</p>
          </div>
          
          {/* Phone */}
          <div>
            <h3 className="opacity-90 text-sm font-public-sans font-normal mb-2">Phone Number</h3>
            <p className="opacity-80 text-sm font-public-sans font-extralight">+1800 099403 33</p>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="opacity-90 text-sm font-public-sans font-normal mb-2">Assistance hours:</h3>
            <p className="opacity-80 text-sm font-public-sans font-extralight">Monday - Friday 6 am to 8 pm EST</p>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-white/30 mb-8" />
        
        {/* Footer Bottom - Copyright and Social Icons */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <p className="text-sm font-public-sans font-normal text-center w-3/4 ml-[25%]">All Rights Reserved.</p>
          
          {/* Social Media Icons */}
          <div className="flex gap-4 w-1/4 flex items-center justify-end">
            <FacebookIcon 
              width={40} 
              height={40} 
              className="hover:opacity-80 transition-opacity cursor-pointer"
              onClick={() => window.open('https://facebook.com', '_blank')}
            />
            <LinkedInIcon 
              width={40} 
              height={40} 
              className="hover:opacity-80 transition-opacity cursor-pointer"
              onClick={() => window.open('https://linkedin.com', '_blank')}
            />
            <TwitterIcon 
              width={40} 
              height={40} 
              className="hover:opacity-80 transition-opacity cursor-pointer"
              onClick={() => window.open('https://twitter.com', '_blank')}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};