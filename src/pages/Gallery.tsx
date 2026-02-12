import { CollageBasic1 } from "../components/collages/CollageBasic1";
import { Description } from "../components/design-system/description";
import { Heading } from "../components/design-system/heading";
import { SubSectionHeading } from "../components/design-system/sub-section-heading";
import { CollageBasic2 } from "../components/collages/CollageBasic2";
import collagePic7 from "../assets/images/gallery-pictures/collage-pic-7.jpg";
import collagePic8 from "../assets/images/gallery-pictures/collage-pic-8.jpg";
import collagePic13 from "../assets/images/gallery-pictures/collage-pic-13.png";
import playIcon from "../assets/images/play-icon.png";

const Gallery = () => {
  return (
    <>
    <div className="pb-10 pt-40 px-4 sm:px-6 lg:px-8">
      <Heading className="ml-[13%]">
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
     <div className="w-full flex justify-center mb-12 px-[13%]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[200px]">
        <CollageBasic1 />
        <CollageBasic2 />
         
         {/* pictures with play icon*/}
         <div className="row-span-3 col-span-12 overflow-hidden relative">
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

         <div className="col-span-4 row-span-2 overflow-hidden relative">
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

         <div className="col-span-8 row-span-2 overflow-hidden relative">
           <img
             src={collagePic13}
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
   </>
  );
};

export default Gallery;
