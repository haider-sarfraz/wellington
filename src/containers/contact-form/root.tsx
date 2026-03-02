import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import logo from '../../assets/images/transparent-icon-2.png';
import { Description } from '../../components/design-system/description';
import { Heading } from '../../components/design-system/heading';
import { cn } from '../../utils/cn';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export const ContactForm = ({
  className,
  variant= "home-page"
}: {
  variant?: 'contact-us' | "home-page";
  className?: string;
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        formRef.current?.reset();
      })
      .catch(() => {
        setStatus('error');
      });
  };

  const textColor = variant === 'contact-us' ? 'text-brand-super-white placeholder:text-brand-super-white' : 'text-brand-charcoal';
  const inputClass = cn(
    "w-full bg-transparent border-0 md:border-b-2 border-b-[1.5px] border-brand-charcoal focus:outline-none focus:border-brand-charcoal pb-1 md:pb-8 font-inter md:text-2xl text-xl font-normal leading-9",
    variant === 'contact-us'
      ? 'text-brand-super-white placeholder:text-brand-super-white border-brand-super-white'
      : 'text-brand-charcoal placeholder:text-brand-charcoal'
  );

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
          "md:mb-12 md:mt-8 flex flex-col md:gap-[80px] gap-10", {
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
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1: Your Name and Email Address */}
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-7 col-span-12 md:mb-12">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className={inputClass}
              />
            </div>
            <div className="md:col-span-5 col-span-12 pt-7 md:pt-0">
              <input
                type="email"
                name="reply_to"
                placeholder="Email Address"
                required
                className={inputClass}
              />
            </div>
          </div>

          {/* Row 2: Your Fiance's Name and Wedding date */}
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-7 col-span-12 md:mb-10">
              <input
                type="text"
                name="fiance_name"
                placeholder="Your Fiance's Name"
                className={inputClass}
              />
            </div>
            <div className="md:col-span-5 col-span-12 pt-7 md:pt-0">
              <input
                type="text"
                name="wedding_date"
                placeholder="Wedding date"
                className={inputClass}
              />
            </div>
          </div>

          {/* Row 3: Message (full width) */}
          <div>
            <textarea
              name="message"
              placeholder="Message"
              className={cn(inputClass, "leading-[1rem]")}
            />
          </div>

          {/* Status messages */}
          {status === 'success' && (
            <p className={cn("text-center font-inter text-lg", textColor)}>
              Thank you! We'll be in touch soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-center font-inter text-lg text-red-500">
              Something went wrong. Please try again or email us directly.
            </p>
          )}

          {/* Submit Button */}
          <div className="flex justify-center md:pt-10">
            <button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className={cn(
                "px-8 md:py-3 rounded-full md:h-[91px] h-[50px] md:w-[358px] w-[250px] font-public-sans font-normal md:text-[22px] text-[16px] disabled:opacity-60 disabled:cursor-not-allowed",
                variant === 'contact-us' ? 'bg-brand-green-cyan text-brand-charcoal' : 'bg-brand-cyan-blue text-brand-white'
              )}
            >
              {status === 'sending' ? 'Sending…' : status === 'success' ? 'Message Sent ✓' : 'Leave us a Message →'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
