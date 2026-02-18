import { cn } from '../../utils/cn'

export const Heading = ({
  children,
  className,
}: {
  children: string
  className?: string;
}) => (
  <h2 
    className={cn(
      'md:text-left text-center font-brittany text-brand-charcoal',
      'text-[32px] sm:text-10 md:text-[64px] leading-[40px] md:leading-[64px]',
      'tracking-[-1.92px]',
      'font-brittany font-light',
      className)}
  >
    {children}
  </h2>
)