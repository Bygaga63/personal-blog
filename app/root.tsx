import type { LinksFunction, MetaFunction } from '@remix-run/node'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'

import tailwindStyles from './tailwind.css'
import { Navbar } from '~/components/navbar'
import { ThemeProvider, useTheme } from '~/utiles/theme-provider'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1'
})

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: tailwindStyles }]

function App() {
  const [theme] = useTheme()
  return (
    <html lang="en" className={theme || ''}>
      <head>
        <Meta />
        <Links />
      </head>
      <body className={'bg-white dark:bg-gray-900'}>
        <Navbar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export default function AppWithProviders() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}
