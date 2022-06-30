import { Link } from '@remix-run/react'
import { MoonIcon } from '~/components/icons/moon-icon'
import { SunIcon } from '~/components/icons/sun-icon'
import { Theme, useTheme } from '~/utiles/theme-provider'
import { AppNavLink } from '~/components/navbar/nav-link'

const iconTransformOrigin = { transformOrigin: '50% 100px' }

const LINKS = [
  { name: 'Blog', to: '/blog' },
  { name: 'Skills', to: '/skills' },
  { name: 'About', to: '/about' }
]

function DarkModeToggle() {
  const [, setTheme] = useTheme()

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT))
  }

  return (
    <button
      onClick={toggleTheme}
      className={
        'w-14 border-secondary hover:border-primary focus:border-primary focus:outline-none inline-flex h-14 items-center justify-center overflow-hidden rounded-full border-2 p-1 transition'
      }>
      {/* note that the duration is longer then the one on body, controlling the bg-color */}
      <div className="relative h-8 w-8">
        <span
          className="absolute inset-0 rotate-90 transform text-black transition duration-1000 motion-reduce:duration-[0s] dark:rotate-0 dark:text-white"
          style={iconTransformOrigin}>
          <MoonIcon />
        </span>
        <span
          className="absolute inset-0 rotate-0 transform text-black transition duration-1000 motion-reduce:duration-[0s] dark:-rotate-90 dark:text-white"
          style={iconTransformOrigin}>
          <SunIcon />
        </span>
      </div>
    </button>
  )
}

export const Navbar = () => {
  return (
    <div className="container mx-auto px-5 py-9 lg:py-12">
      <nav className="mx-auto max-w-8xl flex items-center justify-between">
        <div>
          <Link
            prefetch="intent"
            to="/"
            className="text-primary underlined focus:outline-none block whitespace-nowrap text-2xl font-medium transition">
            <h1>Mukhin Dmitry</h1>
          </Link>
        </div>

        <ul className="hidden md:flex">
          {LINKS.map((link) => (
            <AppNavLink key={link.to} to={link.to}>
              {link.name}
            </AppNavLink>
          ))}
        </ul>

        <div className="flex items-center justify-center">
          <div className="noscript-hidden hidden md:block">
            <DarkModeToggle />
          </div>
        </div>
      </nav>
    </div>
  )
}
