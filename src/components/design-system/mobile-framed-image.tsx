import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const mobileFramedImageVariants = cva(
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

const mobileFrameVariants = cva(
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

const mobileImageVariants = cva(
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

interface MobileFramedImageProps extends VariantProps<typeof mobileFramedImageVariants> {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  frameColor?: string;
  frameWidth?: string;
  frameWidthValue?: string;
  className?: string;
}

export const MobileFramedImage = ({
  src,
  alt,
  direction = 'right',
  width = '215px',
  height = '323px',
  frameColor = '#F9D57A',
  frameWidth = '213px',
  frameWidthValue = '3px',
  className,
}: MobileFramedImageProps) => {
  return (
    <div className="flex justify-center">
      <div 
        className={cn(mobileFramedImageVariants({ direction }), className)}
        style={{ 
          height,
          width,
        }}
      >
        {/* Golden Frame (behind the image) */}
        <div 
          className={mobileFrameVariants({ direction })}
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
          className={mobileImageVariants({ direction })}
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