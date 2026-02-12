import logo from '../assets/images/transparent-icon-2.png';
import footerPicture from '../assets/images/footer-pic.png';

export const Footer = () => {

  return (
    <footer className="w-full">
      {/* Top Section - Contact Form (Light Grey, ~75% height) */}
      <div className="relative bg-brand-cyan-green py-20 px-6 md:px-12 lg:px-20" style={{ minHeight: '75vh' }}>
        {/* Background Watermark */}
        <div className="absolute right-10 top-[75%] -translate-y-1/2 pointer-events-none">
          <img
            src={logo}
            alt="Wellington Jade Studio Logo"
            className="w-[786px] h-[827px] object-contain"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-[50px]">
          {/* Header Section */}
          <div className="mb-12 mt-8 flex flex-col gap-[80px]">
            <h2
              className="text-left mb-4 w-[280px] h-[64px]"
              style={{
                fontFamily: '"Brittany Signature"',
                fontSize: '64px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '100%',
                letterSpacing: '-3%',
                color: 'rgba(84, 84, 84, 1)',
              }}
            >
              Contact Us
            </h2>
            <p
              className="text-left w-[671px] h-[56px]"
              style={{
                fontFamily: '"PP Hatton"',
                fontSize: '28px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '28px',
                letterSpacing: '-3%',
                color: 'rgba(84, 84, 84, 1)',
              }}
            >
              Begin creating the heirloom your family will cherish.
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            {/* Row 1: Your Name and Email Address */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="col-span-7 mb-12">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-0 border-b-2 border-brand-charcoal focus:outline-none focus:border-brand-charcoal pb-8 placeholder:text-brand-charcoal"
                  style={{
                    fontFamily: '"Inter"',
                    fontSize: '24px',
                    fontWeight: 400,
                    lineHeight: '36px',
                    color: 'rgba(84, 84, 84, 1)',
                  }}
                />
              </div>
              <div className="col-span-5">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border-0 border-b-2 border-brand-charcoal focus:outline-none focus:border-brand-charcoal pb-8 placeholder:text-brand-charcoal"
                  style={{
                    fontFamily: '"Inter"',
                    fontSize: '24px',
                    fontWeight: 400,
                    lineHeight: '36px',
                    color: 'rgba(84, 84, 84, 1)',
                  }}
                />
              </div>
            </div>

            {/* Row 2: Your Fiance's Name and Wedding date */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="col-span-7 mb-10">
                <input
                  type="text"
                  placeholder="Your Fiance's Name"
                  className="w-full bg-transparent border-0 border-b-2 border-brand-charcoal focus:outline-none focus:border-brand-charcoal pb-8 placeholder:text-brand-charcoal"
                  style={{
                    fontFamily: '"Inter"',
                    fontSize: '24px',
                    fontWeight: 400,
                    lineHeight: '36px',
                    color: 'rgba(84, 84, 84, 1)',
                  }}
                />
              </div>
              <div className="col-span-5">
                <input
                  type="text"
                  placeholder="Wedding date"
                  className="w-full bg-transparent border-0 border-b-2 border-brand-charcoal focus:outline-none focus:border-brand-charcoal pb-8 placeholder:text-brand-charcoal"
                  style={{
                    fontFamily: '"Inter"',
                    fontSize: '24px',
                    fontWeight: 400,
                    lineHeight: '36px',
                    color: 'rgba(84, 84, 84, 1)',
                  }}
                />
              </div>
            </div>

            {/* Row 3: Message (full width) */}
            <div>
              <textarea
                placeholder="Message"
                className="w-full bg-transparent border-0 border-b-2 border-brand-charcoal focus:outline-none focus:border-brand-charcoal pb-8 placeholder:text-brand-charcoal"
                style={{
                  fontFamily: '"Inter"',
                    fontSize: '24px',
                    fontWeight: 400,
                    lineHeight: '36px',
                  color: 'rgba(84, 84, 84, 1)',
                }}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-10">
              <button
                type="button"
                className="px-8 py-3 rounded-full h-[91px] w-[358px]"
                style={{
                  backgroundColor: 'rgba(85, 109, 112, 1)',
                  color: '#FFFFFF',
                  fontFamily: '"Public Sans"',
                  fontSize: '22px',
                  fontWeight: 600,
                }}
              >
                Leave us a Message →
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Section - Footer Information (Dark Teal/Grey, ~25% height) */}
        {/* <div className="max-w-6xl mx-auto">
          <p
            className="text-center mb-8"
            style={{
              fontFamily: '"PP Hatton"',
              fontSize: '28px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '28px',
              letterSpacing: '-0.84px',
              color: '#FFFFFF',
            }}
          >
            Where your most cherished moments begin.
          </p>

          
          <div className="w-full mb-12" style={{ borderTop: '1px solid #D0D0D0' }}></div>

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <p
                className="mb-2"
                style={{
                  fontFamily: '"Public Sans"',
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#B0B0B0',
                }}
              >
                Email Address
              </p>
              <p
                style={{
                  fontFamily: '"Public Sans"',
                  fontSize: '16px',
                  fontWeight: 300,
                  color: '#FFFFFF',
                }}
              >
                help@info.com
              </p>
            </div>
            <div>
              <p
                className="mb-2"
                style={{
                  fontFamily: '"Public Sans"',
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#B0B0B0',
                }}
              >
                Phone Number
              </p>
              <p
                style={{
                  fontFamily: '"Public Sans"',
                  fontSize: '16px',
                  fontWeight: 300,
                  color: '#FFFFFF',
                }}
              >
                +1800 099403 33
              </p>
            </div>
            <div>
              <p
                className="mb-2"
                style={{
                  fontFamily: '"Public Sans"',
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#B0B0B0',
                }}
              >
                Assistance hours:
              </p>
              <p
                style={{
                  fontFamily: '"Public Sans"',
                  fontSize: '16px',
                  fontWeight: 300,
                  color: '#FFFFFF',
                }}
              >
                Monday - Friday 6 am to 8 pm EST
              </p>
            </div>
          </div>

          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            <p
              className="text-center md:text-left"
              style={{
                fontFamily: '"Public Sans"',
                fontSize: '14px',
                fontWeight: 300,
                color: '#FFFFFF',
              }}
            >
              All Rights Reserved.
            </p>

            
            <div className="flex items-center gap-3">
              <div className="rounded-full p-2" style={{ backgroundColor: '#E0E0E0' }}>
                <FacebookIcon
                  width={24}
                  height={24}
                  className="cursor-pointer"
                  onClick={() => handleSocialClick('https://facebook.com')}
                />
              </div>
              <div className="rounded-full p-2" style={{ backgroundColor: '#E0E0E0' }}>
                <LinkedInIcon
                  width={24}
                  height={24}
                  className="cursor-pointer"
                  onClick={() => handleSocialClick('https://linkedin.com')}
                />
              </div>
              <div className="rounded-full p-2" style={{ backgroundColor: '#E0E0E0' }}>
                <TwitterIcon
                  width={24}
                  height={24}
                  className="cursor-pointer"
                  onClick={() => handleSocialClick('https://twitter.com')}
                />
              </div>
            </div>
          </div>
        </div> */}
      <div className="w-full h-full">
        <img
          src={footerPicture}
          alt="Footer Picture"
          className="w-full h-full object-cover"
        />
      </div>
    </footer>
  );
};