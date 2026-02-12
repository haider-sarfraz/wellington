import { cn } from '../../utils/cn'

export const SubSectionHeading = ({
  children,
  className,
}: {
  children: string
  className?: string;
}) => (
  <h2 
    className={cn('text-left', className)}
    style={{
      color: 'rgba(84, 84, 84, 1)',
      fontFamily: "PP Hatton",
      fontSize: '28px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '28px',
      letterSpacing: '-0.84px',
    }}
  >
    {children}
  </h2>
)