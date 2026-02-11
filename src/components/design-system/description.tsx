import { cn } from '../../utils/cn'

export const Description = ({
  children,
  className,
}: {
  children: string,
  className?: string
}) => (
  <p
    className={cn('w-[75%]', className)}
    style={{
      color: 'rgba(84, 84, 84, 1)',
      fontFamily: '"Public Sans"',
      fontSize: '28px',
      fontStyle: 'normal',
      fontWeight: 300,
      lineHeight: '28px',
      letterSpacing: '-0.84px',
    }}
  >
    {children}
  </p>
)