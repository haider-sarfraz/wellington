import { useNavigate } from "react-router-dom";
import { Description } from "../../../components/design-system/description"
import { Heading } from "../../../components/design-system/heading"
import { SubSectionHeading } from "../../../components/design-system/sub-section-heading"

export const Gallery = () => {
  const navigate = useNavigate();

  const handleGalleryClick = () => {
    navigate('/gallery');
  };

  return (
    <section id="gallery-section" className="pt-20 pb-40 flex flex-col items-start gap-10">
      <Heading className="ml-[13%]">
        Gallery
      </Heading>
      <div className="flex flex-col items-center mt-[62px] gap-4">
        <SubSectionHeading>
          Where Love Becomes Art.
        </SubSectionHeading>
        <div className="flex flex-col gap-8 items-center text-center">
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
        className="w-[204px] h-[52px] bg-brand-charcoal text-brand-super-white font-hatton text-lg font-bold rounded-full self-center"
        style={{
          fontFamily: '"Public Sans"',
          fontSize: '28px',
          fontStyle: 'normal',
          fontWeight: 300,
          lineHeight: '100%',
          letterSpacing: '-0.6px',
        }}
        onClick={handleGalleryClick}
      >
        Gallery
      </button>
    </section>
  )
}