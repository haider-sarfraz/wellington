import { Description } from "../components/design-system/description";
import { FramedImage } from "../components/design-system/framed-image";
import { Heading } from "../components/design-system/heading";
import brideOutdoor from "../assets/images/gallery-pictures/collage-pic-5.jpg";
import coupleOutdoor from "../assets/images/gallery-pictures/collage-pic-3.jpg";
import bouqueHolderIndoor from "../assets/images/gallery-pictures/collage-pic-2.jpg";
import heirloom from "../assets/images/gallery-pictures/collage-pic-12.png";
import brideWithRosesPhoto from "../assets/images/gallery-pictures/bride-with-rose-front-photo.png";

const Experience = () => {
  return (
    <div className="min-h-screen pt-[186px]">
      <div className="flex flex-col items-center justify-center gap-[43px]">
        <Heading>
          The Experience
        </Heading>
        <Description className="font-hatton text-center font-medium">
          An Elevated Journey, Designed Around You
        </Description>
      </div>

      <div className="mt-[44px] flex items-start justify-between pl-[126px] pr-[214px]">
        {/* Left section */}
        <div className="flex flex-col w-[60%]">
          <span className="font-brittany text-brand-charcoal text-[96px] leading-[137px]">
            1.
          </span>
          <Description className="font-hatton text-center font-medium text-left">
            A Thoughtfully Curated Beginning
          </Description>
          <Description>
            Every love story begins with a conversation. Our process starts with a private consultation where we take the time to understand your vision, your style, and the atmosphere you wish to create. This intentional approach allows us to design a bespoke photography experience that reflects not only how your wedding looks, but how it feels.
          </Description>
        </div>
        
        {/* Right Side - Image with Golden Border */}
        <FramedImage 
          src={brideOutdoor}
          alt="Bride with elegant wedding dress"
          direction="left"
        />
      </div>

      <div className="-mt-[60px] flex items-start bg-brand-green-cyan-light pl-[126px] pr-[214px] pt-[200px] pb-[120px]">
        <div className="w-[40%] flex items-start">
          <FramedImage 
            src={coupleOutdoor}
            alt="Bride with elegant wedding dress"
            direction="left"
          />
        </div>

        <div className="flex flex-col items-end w-[60%]">
          <span className="font-brittany text-brand-charcoal text-[96px] leading-[137px]">
            2.
          </span>
          <Description className="font-hatton text-right font-medium leading-[82px]">
            Artistry with Purpose
          </Description>
          <Description className="text-right">
            Our style blends documentary storytelling with editorial refinement. We capture authentic, unscripted moments as they unfold while thoughtfully directing portraits with elegance and ease. The result is imagery that feels natural yet elevated — timeless photographs that could live effortlessly in both a family album and the pages of a magazine.
          </Description>
        </div>
      </div>

      <div className="flex items-center justify-between pl-[126px] pr-[214px] pt-[20px] pb-[50px] relative">
        {/* Left section */}
        <div className="flex flex-col w-[60%]">
          <span className="font-brittany text-brand-charcoal text-[96px] leading-[137px]">
            3.
          </span>
          <Description className="font-hatton font-medium text-left">
          A Calm Presence on Your Wedding Day
          </Description>
          <Description>
          On your wedding day, we move with quiet confidence and refined discretion. Our presence is unobtrusive, allowing moments to unfold organically, while providing gentle guidance when needed. This balance ensures you feel relaxed, present, and free to fully experience your celebration.
          </Description>
        </div>
        
        {/* Right Side - Image with Golden Border */}
        <div className="absolute right-[214px]">
          <FramedImage 
            src={bouqueHolderIndoor}
            alt="Bride holding a bouque indoor"
            direction="left"
          />
        </div>
      </div>

      <div className="-mt-[10px] flex items-start bg-brand-green-cyan-light pl-[126px] pr-[214px] pt-[200px]">
        <div className="w-[40%] flex items-start">
          <FramedImage 
            src={brideWithRosesPhoto}
            alt="Bride with roses photo"
            direction="left"
          />
        </div>

        <div className="flex flex-col items-end w-[60%] mt-[40px]">
          <span className="font-brittany text-brand-charcoal text-[96px] leading-[137px]">
            4.
          </span>
          <Description className="font-hatton text-right font-medium leading-[82px]">
            Meticulous Craftsmanship
          </Description>
          <Description className="text-right">
            After the final moments are captured, each image is carefully curated and hand-edited with precision and care. We focus on refined tones, natural skin, and cohesive storytelling to create a gallery that feels timeless, elegant, and deeply personal.
          </Description>
        </div>
      </div>

      <div className="flex items-center justify-between pl-[126px] pr-[214px] pt-[80px] pb-[160px] relative">
        {/* Left section */}
        <div className="flex flex-col w-[60%]">
          <span className="font-brittany text-brand-charcoal text-[96px] leading-[137px]">
            5.
          </span>
          <Description className="font-hatton font-medium text-left">
          Heirlooms for a Lifetime
          </Description>
          <Description>
          Your wedding photographs are more than memories — they are heirlooms. Designed to be cherished, shared, and passed down for generations, your final collection tells your story with beauty, emotion, and enduring artistry.
          </Description>
        </div>
        
        {/* Right Side - Image with Golden Border */}
        <div className="absolute right-[214px] -bottom-[20px]">
          <FramedImage 
            src={heirloom}
            alt="Bride holding a bouque indoor"
            direction="left"
          />
        </div>
      </div>

    </div>
  );
};

export default Experience;
