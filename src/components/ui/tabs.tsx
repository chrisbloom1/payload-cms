import { cn } from 'src/utilities/cn'
import * as React from 'react'

const Tabs = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div className={cn('', className)} ref={ref} {...props} />
  ),
)
Tabs.displayName = 'Tabs'

const TabsList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      className={cn(
        'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
        className,
      )}
      ref={ref}
      role="tablist"
      {...props}
    />
  ),
)
TabsList.displayName = 'TabsList'

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, active, ...props }, ref) => (
    <button
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        active &&
          'bg-background text-foreground shadow-sm',
        className,
      )}
      ref={ref}
      role="tab"
      aria-selected={active}
      {...props}
    />
  ),
)
TabsTrigger.displayName = 'TabsTrigger'

export { Tabs, TabsList, TabsTrigger }
