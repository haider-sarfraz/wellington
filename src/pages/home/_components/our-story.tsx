import { Description } from '../../../components/design-system/description';
import { Heading } from '../../../components/design-system/heading';
import { FramedImage } from '../../../components/design-system/framed-image';
import ourStoryImage from '../../../assets/images/our-story.png';
import { useIsMobile } from '../../../hooks/useIsobile';
import { MobileFramedImage } from '../../../components/design-system/mobile-framed-image';


const OurStory: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <section className="bg-[rgba(175,196,192,1)] md:pt-[70px] md:pb-20 md:px-6 md:h-[647px]">
      <div className="max-w-[100rem] mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Text Content */}
          <div className="space-y-[60px] mt-[50px]">
            <Heading>
              Our Story
            </Heading>
            <Description className="md:text-left text-center px-6 md:px-0">
              Some moments deserve more than documentation — they deserve to be felt again, long after the day has passed. Wellington Jade Studio creates cinematic wedding imagery for couples who want their story told with elegance, intention, and emotional depth. Every photo and every frame is crafted to preserve not just the moment, but its meaning — creating a timeless keepsake that can be shared, revisited, and cherished by generations to come.
            </Description>
          </div>

          {/* Right Side - Image with Golden Border */}
          {isMobile ? (
            <MobileFramedImage 
              src={ourStoryImage}
              alt="Bride with elegant wedding dress"
              direction="right"
            />
          ) : (
            <FramedImage 
              src={ourStoryImage}
              alt="Bride with elegant wedding dress"
              direction="right"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default OurStory;

