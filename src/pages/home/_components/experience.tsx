import ExperienceImage from '../../../assets/images/experience.png';
import { Description } from '../../../components/design-system/description';
import { Heading } from '../../../components/design-system/heading';

export const Experience = () => {
  return (
    <div className='pt-[15rem] pb-40 flex'>
      <section className="h-[750px] pb-20 w-9/12 relative">
        <div
          className="absolute w-full h-full"
          style={{
            borderRight: "4px solid rgba(242, 201, 110, 1)",
            borderBottom: "4px solid rgba(242, 201, 110, 1)",
            top: "50px",
            right: "20px",
            zIndex: 1,
            height: "750px"
          }}
        />
        <div
          style={{
            position: "absolute",
            zIndex: 3,
            width: "100%",
            height: "770px",
            background: "linear-gradient(90deg, rgba(175, 196, 192, 0.00) -22.41%, rgba(175, 196, 192, 0.30) 14.68%, #AFC4C0 100%)",
          }}
        />
        <img
          alt="Bride shoes with beads"
          // className="absolute h-full object-cover w-full"
          className="h-full object-cover w-full"
          src={ExperienceImage}
          style={{
            // zIndex: 2,
            height: "770px"
          }}
        />
      </section>

      <section className='flex flex-col gap-[80px] w-3/12 relative'>
        <div
          className="absolute top-[-29px] left-[-280px] space-y-[60px]"
          style={{
            zIndex: 4,
            width: "500px",
          }}>
          <Heading className='text-right'>
            The Experience
          </Heading>
          <Description className="w-[500px] text-right">
            How your story is told matters just as much as what is captured. From the very beginning, your experience is guided with intention, care, and an uncommon attention to detail. We take the time to understand what matters most to you — not just the vision for your day, but the feeling you want to carry through it. What follows is an experience that feels considered, calm, and quietly elevated. One where you feel present, supported, and fully immersed — trusting that every detail is being handled with purpose. It’s an experience designed to be felt in the moment, and remembered long after.
          </Description>
        </div>
      </section>
    </div>
  );
};

