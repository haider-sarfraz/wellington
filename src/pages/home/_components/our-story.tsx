import { Description } from '../../../components/design-system/description';
import { Heading } from '../../../components/design-system/heading';
import { FramedImage } from '../../../components/design-system/framed-image';
import ourStoryImage from '../../../assets/images/our-story.png';


const OurStory: React.FC = () => {
  return (
    <section className="bg-[rgba(175,196,192,1)] pt-[70px] pb-20 px-6 h-[647px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Text Content */}
          <div className="space-y-[60px] mt-[50px]">
            <Heading>
              Our Story
            </Heading>
            <Description>
              Some moments deserve more than documentation — they deserve to be felt again, long after the day has passed. Wellington Jade Studio creates cinematic wedding imagery for couples who want their story told with elegance, intention, and emotional depth. Every photo and every frame is crafted to preserve not just the moment, but its meaning — creating a timeless keepsake that can be shared, revisited, and cherished by generations to come.
            </Description>
          </div>

          {/* Right Side - Image with Golden Border */}
          <FramedImage 
            src={ourStoryImage}
            alt="Bride with elegant wedding dress"
            direction="right"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory;

