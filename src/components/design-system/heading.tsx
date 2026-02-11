import { cn } from '../../utils/cn'

export const Heading = ({
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
      fontFamily: '"Brittany Signature"',
      fontSize: '64px',
      fontStyle: 'normal',
      fontWeight: 300,
      lineHeight: '64px',
      letterSpacing: '-1.92px',
    }}
  >
    {children}
  </h2>
)