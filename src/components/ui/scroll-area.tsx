import { cn } from 'src/utilities/cn'
import * as React from 'react'

const ScrollArea = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      className={cn('relative overflow-auto', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  ),
)
ScrollArea.displayName = 'ScrollArea'

export { ScrollArea }
