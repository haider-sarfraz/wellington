import { useNavigate } from "react-router-dom";
import { Description } from "../../../components/design-system/description"
import { Heading } from "../../../components/design-system/heading"
import { SubSectionHeading } from "../../../components/design-system/sub-section-heading"
import collagePic7 from "../../../assets/images/gallery-pictures/collage-pic-7.jpg";
import collagePic8 from "../../../assets/images/gallery-pictures/collage-pic-8.jpg";
import playIcon from "../../../assets/images/play-icon.png";
import { CollageBasic1 } from "../../../components/collages/CollageBasic1";

export const Gallery = () => {
  const navigate = useNavigate();

  const handleGalleryClick = () => {
    navigate('/gallery');
  };

  return (
    <section id="gallery-section" className="md:pt-20 md:pb-40 pt-10 pb-20 flex flex-col md:items-start items-center gap-10">
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

      {/* TODO: Center text vertically */}
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

      <div className="w-full flex justify-center md:mt-12 mt-6 px-[13%]">
        <div className="w-full">
          <div className="grid grid-cols-12 md:gap-6 gap-4 auto-rows-[200px]">
            
            <CollageBasic1 />
            
            {/* pictures with play icon*/}
            <div className="row-span-1 md:row-span-2 md:col-span-8 col-span-12 overflow-hidden relative">
              <img
                src={collagePic7}
                alt="Bride and Groom Dancing"
                className="w-full h-full object-cover"
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

            <div className="md:col-span-4 col-span-12 row-span-1 md:row-span-2 overflow-hidden relative">
              <img
                src={collagePic8}
                alt="Bride and Groom in Dress Code"
                className="w-full h-full object-cover"
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
          </div>
        </div>
      </div>
    </section>
  )
}