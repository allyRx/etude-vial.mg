import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, PropsWithChildren } from 'react'
import { navigate } from '../lib/router'

type InternalLinkProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    to: string
  }
>

const InternalLink = forwardRef<HTMLAnchorElement, InternalLinkProps>(
  ({ to, children, onClick, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={to}
        onClick={(event) => {
          onClick?.(event)

          if (event.defaultPrevented) {
            return
          }

          if (event.button !== 0 || event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) {
            return
          }

          event.preventDefault()
          navigate(to)
        }}
        {...props}
      >
        {children}
      </a>
    )
  },
)

InternalLink.displayName = 'InternalLink'

export default InternalLink
