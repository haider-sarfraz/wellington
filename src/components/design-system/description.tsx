import { cn } from '../../utils/cn'

export const Description = ({
  children,
  className,
}: {
  children: string,
  className?: string
}) => (
  <p
    className={cn('w-[75%] font-public-sans font-light leading-[28px] text-[28px]', className)}
    style={{
      color: 'rgba(84, 84, 84, 1)',
      fontStyle: 'normal',
      letterSpacing: '-0.84px',
    }}
  >
    {children}
  </p>
)