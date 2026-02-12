import collagePic9 from "../../assets/images/gallery-pictures/collage-pic-9.png";
import collagePic10 from "../../assets/images/gallery-pictures/collage-pic-10.png";
import collagePic11 from "../../assets/images/gallery-pictures/collage-pic-11.png";
import collagePic12 from "../../assets/images/gallery-pictures/collage-pic-12.png";
import collagePic8 from "../../assets/images/gallery-pictures/collage-pic-8.jpg";
import collagePic7 from "../../assets/images/gallery-pictures/collage-pic-7.jpg";

export const CollageBasic2 = () => {
  return (
    <>
      {/* Bridesmaids - Large */}
      <div className="row-span-3 col-span-9 overflow-hidden">
        <img
          src={collagePic9}
          alt="Bridesmaids"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bride Back Pose - Small */}
      <div className="row-span-2 col-span-3 overflow-hidden">
        <img
          src={collagePic10}
          alt="Bride Back"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Walking Couple - Medium */}
      <div className="row-span-3 col-span-3 overflow-hidden">
        <img
          src={collagePic12}
          alt="Walking Couple"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Flower Close Portrait - Large */}
      <div className="row-span-2 col-span-9 overflow-hidden">
        <img
          src={collagePic11}
          alt="Portrait"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bride Outdoor - Small */}
      <div className="row-span-2 col-span-3 overflow-hidden">
        <img
          src={collagePic8}
          alt="Outdoor Bride"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Piano Group - Large */}
      <div className="row-span-2 col-span-9 overflow-hidden">
        <img
          src={collagePic7}
          alt="Piano Group"
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
};