import { cn } from '../../utils/cn'

export const Description = ({
  children,
  className,
}: {
  children: string,
  className?: string
}) => (
  <p
    className={cn('w-[75%] font-public-sans font-light leading-[28px] text-[28px] text-brand-charcoal', className)}
    style={{
      letterSpacing: '-0.84px',
    }}
  >
    {children}
  </p>
)