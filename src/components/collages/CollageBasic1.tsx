import collagePic1 from "../../assets/images/gallery-pictures/collage-pic-1.jpg";
import collagePic2 from "../../assets/images/gallery-pictures/collage-pic-2.jpg";
import collagePic3 from "../../assets/images/gallery-pictures/collage-pic-3.jpg";
import collagePic4 from "../../assets/images/gallery-pictures/collage-pic-4.jpg";
import collagePic5 from "../../assets/images/gallery-pictures/collage-pic-5.jpg";
import collagePic6 from "../../assets/images/gallery-pictures/collage-pic-6.jpg";

export const CollageBasic1 = () => {
  return (
    <>
      {/* Bridesmaids - Large */}
      <div className="row-span-2 col-span-8 overflow-hidden">
        <img
          src={collagePic1}
          alt="Bridesmaids"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bride Back Pose - Small */}
      <div className="col-span-4 row-span-2 overflow-hidden">
        <img
          src={collagePic2}
          alt="Bride Back"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Walking Couple - Medium */}
      <div className="row-span-2 col-span-3 overflow-hidden">
        <img
          src={collagePic3}
          alt="Walking Couple"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Flower Close Portrait - Large */}
      <div className="row-span-3 col-span-9 overflow-hidden">
        <img
          src={collagePic4}
          alt="Portrait"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bride Outdoor - Small */}
      <div className="row-span-3 col-span-3 overflow-hidden">
        <img
          src={collagePic5}
          alt="Outdoor Bride"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Piano Group - Large */}
      <div className="row-span-2 col-span-9 overflow-hidden">
        <img
          src={collagePic6}
          alt="Piano Group"
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
};