import { cn } from '../../utils/cn'

export const SubSectionHeading = ({
  children,
  className,
}: {
  children: string
  className?: string;
}) => (
  <h2 
    className={cn(
      'md:text-left text-center md:text-[28px] text-[18px] text-brand-charcoal',
      'tracking-[-0.84px]',
      'font-hatton font-normal',
      'leading-[28px]',
      className)}
  >
    {children}
  </h2>
)