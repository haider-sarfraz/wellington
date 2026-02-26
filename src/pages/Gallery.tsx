import { CollageBasic1 } from "../components/collages/CollageBasic1";
import { Description } from "../components/design-system/description";
import { Heading } from "../components/design-system/heading";
import { SubSectionHeading } from "../components/design-system/sub-section-heading";
import { CollageBasic2 } from "../components/collages/CollageBasic2";
import { VideoThumbnail } from "@/components/video-thumbnail/root";
import allisonIshaanVideo from "../assets/videos/Allison-Ishaan-Sneak-Peak.webm";
import emilyBrettVideo from "../assets/videos/Emily-Brett-Sneak-Peak.webm";
import laurenEthanVideo from "../assets/videos/Lauren-Ethan-Sneak-Peak.webm";

const Gallery = () => {
  return (
    <>
    <div className="pb-10 md:pt-40 pt-[100px] md:px-4 px-6 sm:px-6 lg:px-8">
      <Heading className="md:ml-[13%] ml-0">
        Gallery
      </Heading>
      <div className="flex flex-col items-center mt-[62px] gap-4">
        <SubSectionHeading>
          Where Love Becomes Art.
        </SubSectionHeading>
        <div className="flex flex-col items-center text-center">
          <Description>
          Some moments can’t be held in a single frame. The way your vows sound, the subtle glances, the movement and energy of the day — these are the moments that live in motion. Our films are crafted to do more than document; they are cinematic experiences designed to transport you back into the feeling of your wedding day. Because the day itself moves quickly, often passing in a beautiful blur, film becomes the place where time slows down. Through thoughtful pacing, intentional storytelling, and a refined cinematic style, your story unfolds in a way that can be felt again and again — preserving not just what happened, but how it lived and breathed.
          </Description>
        </div>
      </div>
    </div>
    
    <div className="w-full flex flex-col justify-center mb-12 px-[13%]">
      <div className="grid grid-cols-12 gap-6 auto-rows-[200px]">
        <CollageBasic1 />
        <CollageBasic2 />
        {/* </div> */}
        {/* pictures with play icon
        <div className="md:row-span-3 row-span-1 col-span-12 overflow-hidden relative">
          <img
            src={collagePic7}
            alt="Bride and Groom Dancing"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black opacity-65"></div>
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <img
              src={playIcon}
              alt="Play"
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>
        </div>

        <div className="md:col-span-4 md:row-span-2 row-span-1 col-span-6 overflow-hidden relative">
          <img
            src={collagePic8}
            alt="Bride and Groom in Dress Code"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black opacity-65"></div>
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <img
              src={playIcon}
              alt="Play"
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>
        </div>

        <div className="md:col-span-8 md:row-span-2 row-span-1 col-span-6 overflow-hidden relative">
          <img
            src={collagePic13}
            alt="Bride and Groom in Dress Code"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black opacity-65"></div>
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <img
              src={playIcon}
              alt="Play"
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>
        </div> */}
      </div>

      {/* Divider */}
      <div className="w-full flex justify-center md:mt-20 mt-12 px-[13%]">
        <div className="w-full border-t border-brand-charcoal/20" />
      </div>

      {/* Films Section */}
      <div className="w-full flex flex-col items-center md:mt-10 mt-6 md:gap-10 gap-6">
        {/* <Heading>
          Films
        </Heading> */}
        <div className="flex flex-col items-center gap-4">
          <SubSectionHeading className="text-center">
            Your Story in Motion.
          </SubSectionHeading>
          <div className="flex flex-col gap-8 items-center text-center px-6 md:px-0">
            <Description className="text-center">
              Every love story deserves to be heard — the laughter, the vows, the music, the quiet whispers. Our cinematic films preserve the emotion and energy of your day in a way that still photographs simply cannot.
            </Description>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-full">
            <div className="grid grid-cols-12 md:gap-6 gap-4 auto-rows-[250px] md:auto-rows-[350px]">
              <VideoThumbnail
                src={allisonIshaanVideo}
                alt="Allison & Ishaan Wedding Film"
                className="col-span-12 md:col-span-8 row-span-1 md:row-span-2"
              />
              <VideoThumbnail
                src={emilyBrettVideo}
                alt="Emily & Brett Wedding Film"
                className="col-span-12 md:col-span-4 row-span-1"
              />
              <VideoThumbnail
                src={laurenEthanVideo}
                alt="Lauren & Ethan Wedding Film"
                className="col-span-12 md:col-span-4 row-span-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Gallery;
