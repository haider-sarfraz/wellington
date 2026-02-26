import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoWhite from '../assets/images/Transparent name 1 1.png';
import { FacebookIcon, InstagramIcon } from './icon-components';
import { useIsMobile } from '../hooks/useIsobile';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetHeader,
} from '@/components/ui/sheet';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [sheetOpen, setSheetOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const handleSocialClick = (url: string) => {
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const handleLetsTalkClick = () => {
    setSheetOpen(false);
    navigate('/contact-us');
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/experience', label: 'Experience' },
    { path: '/plans', label: 'Plans' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-black-overlay w-[]">
        <div className="flex items-center justify-between px-3 sm:px-6 lg:px-8 py-4 w-full">
          {/* Left Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-public-sans font-normal text-base tracking-tight transition-colors pb-1 ${
                  isActive(link.path)
                    ? 'text-brand-super-white border-b-2 border-brand-gold'
                    : 'text-brand-super-white/80 hover:text-brand-super-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="lg:hidden text-brand-super-white p-2"
                aria-label="Menu"
              >
                <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-brand-black-overlay backdrop-blur-md border-brand-super-white/10 w-[280px] p-0">
              <SheetHeader className='px-6 pt-4'>
                <SheetTitle className='text-brand-super-white font-bold flex items-center justify-between'>
                  <span className='text-md'>Wellington Jade Studio</span>
                  <InstagramIcon
                    width={28}
                    height={28}
                    className="rounded-full transition-colors"
                    onClick={() => handleSocialClick('https://www.instagram.com/wellington_jade_studio?igsh=MTdkaWRmczRmYmZiaw==')}
                  />
                  <FacebookIcon
                    width={28}
                    height={28}
                    className="hover:opacity-80 transition-opacity cursor-pointer"
                    onClick={() => window.open('https://www.facebook.com/share/1C5s8m4FvH/?mibextid=wwXIfr', '_blank')}
                  />
                </SheetTitle>
              </SheetHeader>
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col justify-between h-full pt-4 px-6 pb-6">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setSheetOpen(false)}
                      className={`font-public-sans font-medium text-base tracking-tight py-3 px-3 rounded-md transition-colors ${
                        isActive(link.path)
                          ? 'text-brand-super-white bg-brand-super-white/10 border-l-2 border-brand-gold'
                          : 'text-brand-super-white/80 hover:text-brand-super-white hover:bg-brand-super-white/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="flex flex-col gap-4 pb-10">
                  <button
                    type="button"
                    className="bg-brand-super-white hover:bg-brand-super-white/90 text-brand-charcoal font-public-sans font-medium px-6 py-3 rounded-full text-base tracking-tight transition-colors"
                    onClick={handleLetsTalkClick}
                  >
                    Let's Talk
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Center Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logoWhite}
              alt="Wellington Jade Studio - Where Moments Become Memories"
              className="h-5 sm:h-7 md:h-8 w-auto object-contain"
            />
          </Link>

          {/* Right Side - Social & CTA */}
          <div className="flex items-center md:gap-4 gap-2 sm:gap-5">
            {/* Social Icons */}
            <div className="flex items-center md:gap-2 gap-1 sm:gap-3">
              <InstagramIcon
                width={isMobile ? 20 : 40}
                height={isMobile ? 20 : 40}
                className="rounded-full transition-colors"
                onClick={() => handleSocialClick('https://www.instagram.com/wellington_jade_studio?igsh=MTdkaWRmczRmYmZiaw==')}
              />
              <FacebookIcon
                width={isMobile ? 20 : 40}
                height={isMobile ? 20 : 40}
                className="rounded-full transition-colors"
                onClick={() => handleSocialClick('https://www.facebook.com/share/1C5s8m4FvH/?mibextid=wwXIfr')}
              />
            </div>

            {/* Let's Talk Button */}
            <button type="button" className="hidden sm:flex bg-brand-super-white hover:bg-brand-super-white/90 text-brand-charcoal font-public-sans font-medium px-6 py-3 rounded-full text-base tracking-tight transition-colors" onClick={handleLetsTalkClick}>
              Let's Talk
            </button>
          </div>
        </div>
    </header>
  );
};

export default Header;
