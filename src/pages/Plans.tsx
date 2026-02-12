import { Description } from "../components/design-system/description";
import { FramedImage } from "../components/design-system/framed-image";
import { Heading } from "../components/design-system/heading";
import brideOutdoor from "../assets/images/gallery-pictures/collage-pic-5.jpg";
import coupleOutdoor from "../assets/images/gallery-pictures/collage-pic-3.jpg";
import bouqueHolderIndoor from "../assets/images/gallery-pictures/collage-pic-2.jpg";
import heirloom from "../assets/images/gallery-pictures/collage-pic-12.png";
import brideWithRosesPhoto from "../assets/images/gallery-pictures/bride-with-rose-front-photo.png";

const Plans = () => {
  return (
    <div className="min-h-screen pt-[186px]">
      <div className="flex flex-col items-center justify-center gap-[43px]">
        <Heading>
        Our Plans
        </Heading>
        <Description className="font-hatton text-center font-medium">
        Thoughtfully Designed, Effortlessly Refined
        </Description>
      </div>

      <div className="mt-[44px] flex items-center justify-between pl-[126px] pr-[214px] pb-[110px]">
        {/* Left section */}
        <div className="flex flex-col w-[60%]">
          <span className="font-brittany text-brand-charcoal text-[96px] leading-[137px]">
            1.
          </span>
          <Description className="font-hatton text-center font-medium text-left">
          The Signature Collection
          </Description>
          <div className="flex flex-col gap-[20px]">
            <Description>
            For couples who value timeless imagery and effortless confidence
            </Description>
            <Description>
            The Signature Collection pairs refined artistry with thoughtful coverage, ensuring every meaningful moment is preserved with elegance and care. Guided by an experienced lead photographer and supported seamlessly throughout the day, this experience is designed to feel calm, intentional, and complete. 
            </Description>
            <Description>
            Within days of your wedding, you’ll receive a first look at your imagery — a preview that allows you to relive the emotion while the memories are still warm. Your full photographic collection follows shortly after, beautifully finished and curated to stand the test of time
            </Description>
          </div>
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
          The Cinematic Edition
          </Description>

          <div className="flex flex-col gap-[20px] items-end">
          <Description className="text-right">
          For couples who want to feel their wedding day again, not just remember it. 
          </Description>
          <Description className="text-right">
          The Cinematic Edition is a fully immersive film experience, crafted with the pacing, depth, and emotional weight of cinema. Led by a directing cinematographer and supported by a dedicated production team, your story unfolds through movement, sound, and atmosphere — capturing moments as they are lived, not staged. Your wedding day moves quickly. Film is where it slows down. From the quiet anticipation to the energy of celebration, your story is shaped into a cinematic heirloom designed to transport you back — again and again.
          </Description>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pl-[126px] pr-[214px] pt-[20px] pb-[50px]">
        {/* Left section */}
        <div className="flex flex-col w-[60%]">
          <span className="font-brittany text-brand-charcoal text-[96px] leading-[137px]">
            3.
          </span>
          <Description className="font-hatton font-medium text-left">
          The Grand Estate Experience
          </Description>
          <div className="flex flex-col gap-[20px]">
          <Description>
          For couples who want their entire celebration preserved with intention and presence.
          </Description>
          <Description>
          The Grand Estate Experience unites still photography and cinematic film into one seamless narrative. Every meaningful detail, emotion, and interaction is captured with cohesion and artistry, allowing your story to live fully — in both frame and motion. 
          </Description>
          <Description> 
          As a gift to you and your guests, this experience also includes an elevated photo booth, adding a layer of joy and spontaneity to the evening while creating keepsakes that feel playful, personal, and unforgettable.
          </Description>
          </div>
        </div>
        
        {/* Right Side - Image with Golden Border */}
        <div>
          <FramedImage 
            src={bouqueHolderIndoor}
            alt="Bride holding a bouque indoor"
            direction="left"
          />
        </div>
      </div>

      <div className="flex items-center bg-brand-green-cyan-light pl-[126px] pr-[214px] py-[60px]">
        <div className="w-[40%] flex items-start">
          <FramedImage 
            src={brideWithRosesPhoto}
            alt="Bride with roses photo"
            direction="left"
          />
        </div>

        <div className="flex flex-col items-end w-[60%]">
          <span className="font-brittany text-brand-charcoal text-[96px] leading-[137px]">
            4.
          </span>
          <Description className="font-hatton text-right font-medium leading-[82px]">
          The Legacy Experience
          </Description>
          <div className="flex flex-col gap-[20px] items-end">
          <Description className="text-right">
          For couples who want everything — beautifully, intentionally, without compromise. 
          </Description>
          <Description className="text-right">
          The Legacy Experience is our most comprehensive offering, designed for couples who want to be fully present while every layer of their celebration is preserved. Alongside photography and cinematic film, a dedicated content creator captures candid, behind-the-scenes moments as they naturally unfold, while a virtual guest book preserves voices, laughter, and well-wishes from the people who matter most.
          </Description>
          <Description className="text-right">
          This is more than coverage. It’s a living record of your wedding day — crafted to be revisited, shared, and passed down as part of your family’s story. 
          </Description>
          </div>
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

export default Plans;
