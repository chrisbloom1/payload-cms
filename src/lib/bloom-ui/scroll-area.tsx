import * as React from 'react'

import { cn } from './cn'

const ScrollArea = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div className={cn('relative overflow-auto', className)} ref={ref} {...props}>
      {children}
    </div>
  ),
)
ScrollArea.displayName = 'ScrollArea'

export { ScrollArea }
