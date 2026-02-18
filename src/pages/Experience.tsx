import { Description } from "../components/design-system/description";
import { FramedImage } from "../components/design-system/framed-image";
import { Heading } from "../components/design-system/heading";
import brideOutdoor from "../assets/images/gallery-pictures/collage-pic-5.jpg";
import coupleOutdoor from "../assets/images/gallery-pictures/collage-pic-3.jpg";
import bouqueHolderIndoor from "../assets/images/gallery-pictures/collage-pic-2.jpg";
import heirloom from "../assets/images/gallery-pictures/collage-pic-12.png";
import brideWithRosesPhoto from "../assets/images/gallery-pictures/bride-with-rose-front-photo.png";
import { useIsMobile } from "../hooks/useIsobile";
import { MobileFramedImage } from "../components/design-system/mobile-framed-image";

const Experience = () => {
  const isMobile = useIsMobile()
  return (
    <div className="min-h-screen md:pt-[186px] pt-[120px] mx-auto">
      {/* Heading and Description */}
      <div className="flex flex-col items-center justify-center gap-[43px]">
        <Heading>
          The Experience
        </Heading>
        <Description className="font-hatton text-center font-medium">
          An Elevated Journey, Designed Around You
        </Description>
      </div>

      {/* Experience 1 */}
      <div className="mt-[44px] flex flex-col md:flex-row md:items-start items-center md:justify-between justify-center md:pl-[126px] md:pr-[214px] pl-6 pr-6">
        {/* Left section */}
        <div className="flex flex-col md:w-[60%] w-[80%] pb-10 md:pb-0">
          <span className="font-brittany text-brand-charcoal md:text-[96px] text-[65px] text-center md:text-left md:leading-[137px]">
            1.
          </span>
          <Description className="font-hatton text-center font-medium md:text-left">
            A Thoughtfully Curated Beginning
          </Description>
          <Description className="md:text-left text-center">
            Every love story begins with a conversation. Our process starts with a private consultation where we take the time to understand your vision, your style, and the atmosphere you wish to create. This intentional approach allows us to design a bespoke photography experience that reflects not only how your wedding looks, but how it feels.
          </Description>
        </div>
        
        {/* Right Side - Image with Golden Border */}
        {isMobile ? (
          <MobileFramedImage 
            src={brideOutdoor}
            alt="Bride with elegant wedding dress"
            direction="left"
          />
        ) : (
          <FramedImage 
            src={brideOutdoor}
            alt="Bride with elegant wedding dress"
            direction="left"
          />
        )}
      </div>

      {/* Experience 2 */}
      <div className="md:-mt-[60px] flex flex-col-reverse gap-10 md:gap-0 md:flex-row md:items-start items-center bg-brand-green-cyan-light md:pl-[126px] md:pr-[214px] md:pt-[200px] pt-[50px] md:pb-[120px] pb-[50px]">
        <div className="md:w-[40%] w-full flex md:items-start items-center justify-center">
          
          {isMobile ? (
            <MobileFramedImage 
              src={coupleOutdoor}
              alt="Bride with elegant wedding dress"
              direction="left"
            />
          ) : (
            <FramedImage 
            src={coupleOutdoor}
            alt="Bride with elegant wedding dress"
            direction="left"
          />
          )}
        </div>

        <div className="flex flex-col md:items-end items-center md:w-[60%] w-[80%]">
          <span className="font-brittany text-brand-charcoal md:text-[96px] text-[65px] leading-[137px]">
            2.
          </span>
          <Description className="font-hatton md:text-right text-center font-medium md:leading-[82px]">
            Artistry with Purpose
          </Description>
          <Description className="md:text-right text-center">
            Our style blends documentary storytelling with editorial refinement. We capture authentic, unscripted moments as they unfold while thoughtfully directing portraits with elegance and ease. The result is imagery that feels natural yet elevated — timeless photographs that could live effortlessly in both a family album and the pages of a magazine.
          </Description>
        </div>
      </div>

      {/* Experience 3 */}
      <div className="flex flex-col md:flex-row md:items-start items-center md:justify-between justify-center md:pl-[126px] md:pr-[214px] pt-[20px] pb-[50px] md:pb-[200px] md:mb-[100px] md:relative">
        {/* Left section */}
        <div className="flex flex-col md:w-[60%] w-[80%] pb-10 md:pb-0">
          <span className="font-brittany text-brand-charcoal md:text-[96px] text-[65px] text-center md:text-left leading-[137px]">
            3.
          </span>
          <Description className="font-hatton font-medium md:text-left text-center">
          A Calm Presence on Your Wedding Day
          </Description>
          <Description className="md:text-left text-center">
          On your wedding day, we move with quiet confidence and refined discretion. Our presence is unobtrusive, allowing moments to unfold organically, while providing gentle guidance when needed. This balance ensures you feel relaxed, present, and free to fully experience your celebration.
          </Description>
        </div>
        
        {/* Right Side - Image with Golden Border */}
        {isMobile ? (
          <MobileFramedImage 
            src={bouqueHolderIndoor}
            alt="Bride holding a bouque indoor"
            direction="left"
          />
        ) : (
        <div className="md:absolute md:right-[214px]">
          <FramedImage 
            src={bouqueHolderIndoor}
            alt="Bride holding a bouque indoor"
            direction="left"
          />
        </div>
        )}
      </div>

      {/* Experience 4 */}
      <div className="md:-mt-[10px] flex flex-col-reverse md:flex-row md:items-start items-center bg-brand-green-cyan-light md:pl-[126px] md:pr-[214px] md:pt-[200px] pt-[50px] md:pb-[120px] pb-[50px]">
        <div className="md:w-[40%] w-full flex md:items-start items-center justify-center">
          {isMobile ? (
            <MobileFramedImage 
              src={brideWithRosesPhoto}
              alt="Bride with roses photo"
              direction="left"
            />
          ) : (
            <FramedImage 
              src={brideWithRosesPhoto}
              alt="Bride with roses photo"
              direction="left"
            />
          )}
        </div>

        <div className="flex flex-col md:items-end items-center md:w-[60%] w-[80%] pb-10 md:pb-0">
          <span className="font-brittany text-brand-charcoal md:text-[96px] text-[65px] text-center md:text-left leading-[137px]">
            4.
          </span>
          <Description className="font-hatton md:text-right text-center font-medium md:leading-[82px]">
            Meticulous Craftsmanship
          </Description>
          <Description className="md:text-right text-center">
            After the final moments are captured, each image is carefully curated and hand-edited with precision and care. We focus on refined tones, natural skin, and cohesive storytelling to create a gallery that feels timeless, elegant, and deeply personal.
          </Description>
        </div>
      </div>

      {/* Experience 5 */}
      <div className="flex flex-col md:flex-row md:items-start items-center md:justify-between justify-center md:pl-[126px] md:pr-[214px] md:pt-[80px] pt-[50px] md:pb-[160px] pb-[50px] md:relative">
        {/* Left section */}
        <div className="flex flex-col md:w-[60%] w-[80%] pb-10 md:pb-0">
          <span className="font-brittany text-brand-charcoal md:text-[96px] text-[65px] text-center md:text-left leading-[137px]">
            5.
          </span>
          <Description className="font-hatton font-medium md:text-left text-center">
          Heirlooms for a Lifetime
          </Description>
          <Description className="md:text-left text-center">
          Your wedding photographs are more than memories — they are heirlooms. Designed to be cherished, shared, and passed down for generations, your final collection tells your story with beauty, emotion, and enduring artistry.
          </Description>
        </div>
        
        {/* Right Side - Image with Golden Border */}
        {isMobile ? (
          <MobileFramedImage 
            src={heirloom}
            alt="Bride holding a bouque indoor"
            direction="left"
          />
        ) : (
        <div className="absolute right-[214px] -bottom-[20px]">
          <FramedImage 
            src={heirloom}
            alt="Bride holding a bouque indoor"
            direction="left"
          />
        </div>
        )}
      </div>

    </div>
  );
};

export default Experience;
