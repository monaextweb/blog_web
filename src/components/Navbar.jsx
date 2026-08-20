import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { navLinks, business, placeholderImages } from '../data/business'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-30 bg-white/95 backdrop-blur border-b transition-shadow duration-300 ${
          scrolled ? 'border-neutral-200 shadow-sm' : 'border-transparent'
        }`}
      >
        <div className="container-px mx-auto flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center group" aria-label={business.name}>
            <img
              src={placeholderImages.logo}
              alt={business.name}
              className="h-14 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </NavLink>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `relative py-2 text-sm tracking-wide transition-colors duration-300 after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px] after:bg-rosegold after:transition-all after:duration-300 ${
                    isActive
                      ? 'text-rosegold after:w-full'
                      : 'text-neutral-600 hover:text-rosegold after:w-0 hover:after:w-full'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="md:hidden p-2 -mr-2 text-black"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={26} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
