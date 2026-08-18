import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: 'https://www.linkedin.com/in/rudresh-vyas-9b85582b0?utm_source=share_via&utm_content=profile&utm_medium=member_android', external: true },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-brand">Rudresh&apos;s Portfolio</div>

        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(({ label, href, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                onClick={closeMenu}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
