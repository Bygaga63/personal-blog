import { NavLink } from '@remix-run/react'
import type { FC } from 'react'
import React from 'react'

type Props = {
  to: string
}

export const AppNavLink: FC<Props> = ({ children, to }) => {
  return (
    <li className="px-5 py-2">
      <NavLink
        prefetch="intent"
        className={({ isActive }) =>
          [
            'underlined focus:outline-none block whitespace-nowrap text-lg font-medium hover:text-team-current focus:text-team-current',
            isActive ? 'active text-primary' : '',
            isActive ? '' : 'text-secondary'
          ].join(' ')
        }
        to={to}>
        {children}
      </NavLink>
    </li>
  )
}
