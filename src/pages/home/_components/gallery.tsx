import { useNavigate } from "react-router-dom";
import { Description } from "../../../components/design-system/description"
import { Heading } from "../../../components/design-system/heading"
import { SubSectionHeading } from "../../../components/design-system/sub-section-heading"
import { CollageBasic1 } from "../../../components/collages/CollageBasic1";
import allisonIshaanVideo from "../../../assets/videos/Allison-Ishaan-Sneak-Peak.webm";
import emilyBrettVideo from "../../../assets/videos/Emily-Brett-Sneak-Peak.webm";
import laurenEthanVideo from "../../../assets/videos/Lauren-Ethan-Sneak-Peak.webm";
import { VideoThumbnail } from "@/components/video-thumbnail/root";


export const Gallery = () => {
  const navigate = useNavigate();

  const handleGalleryClick = () => {
    navigate('/gallery');
  };

  return (
    <section id="gallery-section" className="md:pt-20 pt-10 flex flex-col md:items-start items-center gap-10">
      <Heading className="md:ml-[13%]">
        Gallery
      </Heading>
      <div className="flex flex-col items-center md:mt-[62px] gap-4">
        <SubSectionHeading>
          Where Love Becomes Art.
        </SubSectionHeading>
        <div className="flex flex-col gap-8 items-center text-center px-6 md:px-0">
          <Description>
            Our portfolio is a curated collection of stories—each one distinct, intimate, and deeply personal. Every frame reflects our commitment to timeless beauty, emotional depth, and refined storytelling.
          </Description>
          <Description>
            We capture more than moments. We capture glances, stillness, laughter, anticipation, movement, and meaning. The quiet in-between seconds that often become the most powerful memories.
          </Description>
        </div>
      </div>

      <button
        type="button"
        className="w-[100px] h-[30px] md:w-[204px] md:h-[52px] bg-brand-charcoal
        text-brand-super-white font-public-sans md:text-lg text-[15px] font-normal
          rounded-full self-center
          md:tracking-[-0.6px] tracking-[-0.45px]
          leading-[100%]"
        onClick={handleGalleryClick}
      >
        Gallery
      </button>

      {/* Photo Gallery */}
      <div className="w-full flex justify-center md:mt-12 mt-6 px-[13%]">
        <div className="w-full">
          <div className="grid grid-cols-12 md:gap-6 gap-4 auto-rows-[200px]">
            <CollageBasic1 />
          </div>
        </div>
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

        <div className="w-full flex justify-center px-[13%]">
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

      <div className="md:pb-40 pb-20" />
    </section>
  )
}