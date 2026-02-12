import logo from '../../assets/images/transparent-icon-2.png';

export const ContactForm = () => {
  return (
    /* Top Section - Contact Form (Light Grey, ~75% height) */
    <div className="block relative bg-brand-green-cyan-light py-20 px-6 md:px-12 lg:px-20" style={{ minHeight: '75vh' }}>
    
      {/* Background Watermark */}
      <div className="absolute right-10 top-[75%] -translate-y-1/2 pointer-events-none">
        <img
          src={logo}
          alt="Wellington Jade Studio Logo"
          className="w-[786px] h-[827px] object-contain"
        />
      </div>
    
      <div className="max-w-7xl mx-auto z-10 flex flex-col gap-[50px]">
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
              fontFamily: "PP Hatton",
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
              className="px-8 py-3 rounded-full h-[91px] w-[358px] font-public-sans font-normal bg-brand-cyan-blue text-brand-white"
              style={{
                fontSize: '22px',
              }}
            >
              Leave us a Message →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};