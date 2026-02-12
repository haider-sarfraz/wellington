import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const framedImageVariants = cva(
  'relative max-w-md',
  {
    variants: {
      direction: {
        right: '',
        left: '',
      },
    },
    defaultVariants: {
      direction: 'right',
    },
  }
);

const frameVariants = cva(
  'absolute top-0 h-full',
  {
    variants: {
      direction: {
        right: 'right-0',
        left: 'left-0',
      },
    },
    defaultVariants: {
      direction: 'right',
    },
  }
);

const imageVariants = cva(
  'absolute object-cover shadow-2xl',
  {
    variants: {
      direction: {
        right: 'top-[15px] right-[14px]',
        left: 'top-[15px] left-[14px]',
      },
    },
    defaultVariants: {
      direction: 'right',
    },
  }
);

interface FramedImageProps extends VariantProps<typeof framedImageVariants> {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  frameColor?: string;
  frameWidth?: string;
  frameWidthValue?: string;
  className?: string;
}

export const FramedImage = ({
  src,
  alt,
  direction = 'right',
  width = '415px',
  height = '623px',
  frameColor = '#F9D57A',
  frameWidth = '379px',
  frameWidthValue = '4px',
  className,
}: FramedImageProps) => {
  return (
    <div className="flex justify-center md:justify-end">
      <div 
        className={cn(framedImageVariants({ direction }), className)}
        style={{ 
          height,
          width,
        }}
      >
        {/* Golden Frame (behind the image) */}
        <div 
          className={frameVariants({ direction })}
          style={{
            border: `${frameWidthValue} solid ${frameColor}`,
            width: frameWidth,
            zIndex: 1,
          }}
        />
        
        {/* Image (in front, shifted) */}
        <img 
          src={src}
          alt={alt}
          className={imageVariants({ direction })}
          style={{
            width,
            height: '100%',
            zIndex: 2,
          }}
        />
      </div>
    </div>
  );
};
