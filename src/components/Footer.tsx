import React from 'react';
import { InstagramIcon } from './icon-components/InstagramIcon';
import { FacebookIcon } from './icon-components';

const HOURS_OF_OPERATION: { day: string; open?: string; close?: string }[] = [
  { day: 'Monday' },
  { day: 'Tuesday', open: '9am', close: '5pm' },
  { day: 'Wednesday', open: '9am', close: '5pm' },
  { day: 'Thursday', open: '9am', close: '5pm' },
  { day: 'Friday', open: '9am', close: '5pm' },
  { day: 'Saturday' },
  { day: 'Sunday' },
];

export const Footer = () => {
  return (
    <footer className="w-full bg-[#556d70] text-white pt-10 pb-6 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-center text-2xl md:text-5xl font-hatton mb-6 text-brand-super-white">
          Where your most cherished<br />moments begin.
        </h2>
        
        {/* Description */}
        <p className="font-public-sans font-light opacity-80 text-center text-sm md:text-base max-w-3xl mx-auto mb-12 leading-relaxed text-brand-super-white">
          We lead with a commitment to excellence, artistic creativity, uncompromising professionalism, a
          client-first approach, and unwavering integrity in everything we do.
        </p>
        
        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center md:text-left md:pl-[10rem]">
          {/* Address */}
          <div>
            <h3 className="opacity-90 text-sm font-public-sans font-normal mb-2">Address</h3>
            <p className="opacity-80 text-sm font-public-sans font-extralight">
              1 Mid America Plaza<br />
              3rd Floor<br />
              Oakbrook Terrace, Illinois 60181
            </p>
          </div>
          
          {/* Phone */}
          <div>
            <h3 className="opacity-90 text-sm font-public-sans font-normal mb-2">Phone Number</h3>
            <p className="opacity-80 text-sm font-public-sans font-extralight">(630) 277-9162</p>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="opacity-90 text-sm font-public-sans font-normal mb-2">Hours of Operation</h3>
            <div className="grid grid-cols-3 gap-x-4 gap-y-1 text-left opacity-80 text-sm font-public-sans font-extralight">
              <span className="font-semibold mb-2">Day</span>
              <span className="font-semibold mb-2 text-center">Opens at</span>
              <span className="font-semibold mb-2 text-right">Closes at</span>
              {HOURS_OF_OPERATION.map(({ day, open, close }) => {
                const isClosed = !open;
                return (
                  <React.Fragment key={day}>
                    <span>{day}</span>
                    {isClosed ? (
                      <>
                        <span className="col-span-2 text-right">Closed</span>
                        <span className="hidden" />
                      </>
                    ) : (
                      <>
                        <span className='text-center'>{open}</span>
                        <span className="text-right">{close}</span>
                      </>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-white/30 mb-8" />
        
        {/* Footer Bottom - Copyright and Social Icons */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <p className="text-sm font-public-sans font-normal text-center md:w-3/4 w-full md:ml-[25%] ml-0">All Rights Reserved.</p>
          
          {/* Social Media Icons */}
          <div className="flex gap-4 w-1/4 items-center justify-center md:justify-end">
            <InstagramIcon
              width={40}
              height={40}
              className="hover:opacity-80 transition-opacity cursor-pointer"
              onClick={() => window.open('https://www.instagram.com/wellington_jade_studio?igsh=MTdkaWRmczRmYmZiaw==', '_blank')}
            />
            <FacebookIcon
              width={40}
              height={40}
              className="hover:opacity-80 transition-opacity cursor-pointer"
              onClick={() => window.open('https://www.facebook.com/share/1C5s8m4FvH/?mibextid=wwXIfr', '_blank')}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};