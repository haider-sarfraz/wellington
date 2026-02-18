import { cn } from '../../utils/cn'

export const Description = ({
  children,
  className,
}: {
  children: string,
  className?: string
}) => (
  <p
    className={cn('md:w-[75%] w-full text-[18px] font-public-sans font-light leading-[28px] md:text-[28px] text-brand-charcoal', className)}
    style={{
      letterSpacing: '-0.84px',
    }}
  >
    {children}
  </p>
)