import homePageCover from '../assets/images/home-page-cover.png';
import { Description } from "../components/design-system/description";
import { Heading } from "../components/design-system/heading";
import { ContactForm } from "../containers/contact-form/root";

export const ContactUs = () => {
  return (
    <div className="flex flex-col gap-10 items-center relative">
      {/* Background Image with Grayscale Filter */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${homePageCover})`,
          filter: 'grayscale(100%)',
        }}
      />
      <Heading>Contact Us</Heading>
      <Description>
        Begin creating the heirloom your family will cherish
      </Description>
      <ContactForm variant="contact-us" className='bg-transparent' />
    </div>
  );
};