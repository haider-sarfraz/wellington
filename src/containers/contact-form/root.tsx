import logo from '../../assets/images/transparent-icon-2.png';
import { Description } from '../../components/design-system/description';
import { Heading } from '../../components/design-system/heading';
import { cn } from '../../utils/cn';

export const ContactForm = ({
  className,
  variant= "home-page"
}: {
  variant?: 'contact-us' | "home-page";
  className?: string;
}) => {
  return (
    /* Top Section - Contact Form (Light Grey, ~75% height) */
    <div 
    className={cn(
      "block relative bg-brand-green-cyan-light py-20 px-6 md:px-12 lg:px-20",
      className,
    )} style={{ minHeight: '75vh' }}>
    
      {/* Background Watermark */}
      <div
        className="absolute right-10 top-[75%] -translate-y-1/2 pointer-events-none"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0.54) 100%), url(${logo}) lightgray 0px -0.254px / 100% 100.853% no-repeat`            
        }}
      >
        {/* <img
          src={logo}
          alt="Wellington Jade Studio Logo"
          className="w-[786px] h-[827px] object-contain"
        /> */}
      </div>
    
      <div className="max-w-7xl mx-auto z-10 flex flex-col gap-[50px]">
        {/* Header Section */}
        <div className={cn(
          "mb-12 mt-8 flex flex-col gap-[80px]", {
            "items-start": variant === "home-page",
            "items-center justify-center": variant === "contact-us",
          }
        )}>
          <Heading
            className={cn({
              "text-brand-charcoal": variant === "home-page",
              "text-brand-super-white": variant === "contact-us",
            })}
          >
            Contact Us
          </Heading>
          <Description
            className={cn({
              "text-brand-charcoal": variant === "home-page",
              "text-brand-super-white": variant === "contact-us",
            })}
          >
            Begin creating the heirloom your family will cherish.
          </Description>
        </div>
  
        {/* Contact Form */}
        <form className="space-y-6">
          {/* Row 1: Your Name and Email Address */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-7 mb-12">
              <input
                type="text"
                placeholder="Your Name"
                className={cn("w-full bg-transparent border-0 border-b-2 border-brand-charcoal focus:outline-none focus:border-brand-charcoal pb-8 placeholder:text-brand-charcoal font-inter text-2xl font-normal leading-9", variant === 'contact-us' ? 'text-brand-super-white placeholder:text-brand-super-white' : 'text-brand-charcoal')}
              />
            </div>
            <div className="col-span-5">
              <input
                type="email"
                placeholder="Email Address"
                className={cn("w-full bg-transparent border-0 border-b-2 border-brand-charcoal focus:outline-none focus:border-brand-charcoal pb-8 placeholder:text-brand-charcoal font-inter text-2xl font-normal leading-9", variant === 'contact-us' ? 'text-brand-super-white placeholder:text-brand-super-white' : 'text-brand-charcoal')}
              />
            </div>
          </div>
  
          {/* Row 2: Your Fiance's Name and Wedding date */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-7 mb-10">
              <input
                type="text"
                placeholder="Your Fiance's Name"
                className={cn("w-full bg-transparent border-0 border-b-2 border-brand-charcoal focus:outline-none focus:border-brand-charcoal pb-8 placeholder:text-brand-charcoal font-inter text-2xl font-normal leading-9", variant === 'contact-us' ? 'text-brand-super-white placeholder:text-brand-super-white' : 'text-brand-charcoal')}
              />
            </div>
            <div className="col-span-5">
              <input
                type="text"
                placeholder="Wedding date"
                className={cn("w-full bg-transparent border-0 border-b-2 border-brand-charcoal focus:outline-none focus:border-brand-charcoal pb-8 placeholder:text-brand-charcoal font-inter text-2xl font-normal leading-9", variant === 'contact-us' ? 'text-brand-super-white placeholder:text-brand-super-white' : 'text-brand-charcoal')}
              />
            </div>
          </div>
  
          {/* Row 3: Message (full width) */}
          <div>
            <textarea
              placeholder="Message"
              className={cn("w-full bg-transparent border-0 border-b-2 border-brand-charcoal focus:outline-none focus:border-brand-charcoal pb-8 placeholder:text-brand-charcoal font-inter text-2xl font-normal leading-9", variant === 'contact-us' ? 'text-brand-super-white placeholder:text-brand-super-white' : 'text-brand-charcoal')}
            />
          </div>
  
          {/* Submit Button */}
          <div className="flex justify-center pt-10">
            <button
              type="button"
              className={cn("px-8 py-3 rounded-full h-[91px] w-[358px] font-public-sans font-normal text-[22px]", variant === 'contact-us' ? 'bg-brand-green-cyan text-brand-charcoal' : 'bg-brand-cyan-blue text-brand-white')}
            >
              Leave us a Message →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};