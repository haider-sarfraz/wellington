import { Link, useLocation } from 'react-router-dom';
import logoWhite from '../assets/images/Transparent name 1 1.png';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './icon-components';

const Header = () => {
  const location = useLocation();

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

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/experience', label: 'Experience' },
    { path: '/plans', label: 'Plans' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-black-overlay backdrop-blur-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Left Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-public-sans font-normal text-base tracking-tight transition-colors ${
                  isActive(link.path)
                    ? 'text-brand-super-white-v2 border-b-2 border-brand-gold pb-1'
                    : 'text-brand-super-white-v2/80 hover:text-brand-super-white-v2'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden text-brand-super-white-v2 p-2"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Center Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logoWhite}
              alt="Wellington Jade Studio - Where Moments Become Memories"
              className="h-6 sm:h-7 md:h-8 w-auto object-contain"
            />
          </Link>

          {/* Right Side - Social & CTA */}
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Social Icons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <FacebookIcon
                width={40}
                height={40}
                className="rounded-full transition-colors"
                onClick={() => handleSocialClick('https://facebook.com')}
              />
              <InstagramIcon
                width={40}
                height={40}
                className="rounded-full transition-colors"
                onClick={() => handleSocialClick('https://instagram.com')}
              />
              <TwitterIcon
                width={40}
                height={40}
                className="rounded-full transition-colors"
                onClick={() => handleSocialClick('https://twitter.com')}
              />
            </div>
            
            {/* Let's Talk Button */}
            <button type="button" className="hidden sm:flex bg-brand-super-white-v2 hover:bg-brand-super-white-v2/90 text-brand-charcoal font-public-sans font-medium px-6 py-3 rounded-full text-base tracking-tight transition-colors">
              Let's Talk
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Hidden by default, would need state management for toggle */}
      <div className="lg:hidden hidden border-t border-brand-super-white-v2/20">
        <nav className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block font-public-sans font-medium text-base tracking-tight py-2 ${
                isActive(link.path)
                  ? 'text-brand-super-white-v2 border-l-2 border-brand-gold pl-3'
                  : 'text-brand-super-white-v2/80'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

