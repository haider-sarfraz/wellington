import ExperienceImage from '../../../assets/images/experience.png';
import { Description } from '../../../components/design-system/description';
import { Heading } from '../../../components/design-system/heading';
import { useNavigate } from 'react-router-dom';

export const Experience = () => {
  const navigate = useNavigate();

  const handleExperienceClick = () => {
    navigate('/experience');
  };

  return (
    <div className='md:pt-[15rem] pt-[8rem] md:pb-40 pb-10 flex md:flex-row flex-col-reverse'>
      <section className="w-1/2 mt-5 mx-auto md:mx-0 md:mt-0 md:h-[750px] h-[326px] md:pb-20 md:w-9/12 md:max-w-[105rem] relative"
      style={{
        justifyContent: "center",
      }}
      >
        <div
          className="absolute md:top-[50px] top-4 md:right-[20px] right-2.5 md:w-full w-[215px] md:h-[750px] h-[326px]"
          style={{
            borderRight: "4px solid rgba(242, 201, 110, 1)",
            borderBottom: "4px solid rgba(242, 201, 110, 1)",
            zIndex: 1,
          }}
        />
        <div
          className="absolute md:w-[100%] w-[215px] md:h-[770px] h-[326px]"
          style={{
            zIndex: 3,
            background: "linear-gradient(90deg, rgba(175, 196, 192, 0.00) -22.41%, rgba(175, 196, 192, 0.30) 14.68%, #AFC4C0 100%)",
          }}
        />
        <img
          alt="Bride shoes with beads"
          // className="absolute h-full object-cover w-full"
          className="md:h-[770px] h-[326px] object-cover w-[215px] md:w-full"
          src={ExperienceImage}
          loading="lazy"
          style={{
            zIndex: 2,
          }}
        />
      </section>

      <section className='flex flex-col md:gap-[80px] gap-10 md:w-3/12 w-full md:relative'>
        <div
          className="md:absolute md:w-[500px] w-full md:top-[-29px] md:left-[-280px] md:space-y-[60px] space-y-6 flex flex-col"
          style={{
            zIndex: 4,
          }}>
          <Heading className='md:text-right text-center'>
            The Experience
          </Heading>
          <Description className="md:w-[500px] px-6 md:px-0 w-full md:text-right text-center font-public-sans md:text-[28px] text-[16px] tracking-tighter">
            How your story is told matters just as much as what is captured. From the very beginning, your experience is guided with intention, care, and an uncommon attention to detail. We take the time to understand what matters most to you — not just the vision for your day, but the feeling you want to carry through it. What follows is an experience that feels considered, calm, and quietly elevated. One where you feel present, supported, and fully immersed — trusting that every detail is being handled with purpose. It’s an experience designed to be felt in the moment, and remembered long after.
          </Description>

          <button type="button" onClick={handleExperienceClick} className="bg-brand-charcoal text-brand-super-white md:px-[52px] px-8 py-2 md:text-lg text-sm md:py-[15px] rounded-full font-public-sans font-normal self-center">
            Experience
          </button>
        </div>
      </section>
    </div>
  );
};

