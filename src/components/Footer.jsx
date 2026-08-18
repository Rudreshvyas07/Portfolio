const footerLinks = {
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: 'https://instagram.com/rudreshvyas7', external: true },
  ],
  resources: [
    { label: 'Projects', href: 'https://github.com/Rudreshvyas07', external: true },
    { label: 'Skills', href: '#services' },
    { label: 'Resume', href: '/rudresume.pdf', external: true },
    { label: 'GitHub', href: 'https://github.com/Rudreshvyas07', external: true },
  ],
}

function FooterLinkList({ links }) {
  return (
    <ul>
      {links.map(({ label, href, external }) => (
        <li key={label}>
          <a
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h3>Rudresh&apos;s Developer Portfolio</h3>
          <p className="footer-tagline">
            Building clean, responsive web experiences.
          </p>
        </div>

        <div>
          <h4>Navigation</h4>
          <FooterLinkList links={footerLinks.navigation} />
        </div>

        <div>
          <h4>Resources</h4>
          <FooterLinkList links={footerLinks.resources} />
        </div>
      </div>

      <p className="footer-rights">
        &copy; 2025 www.rudreshsportfolio.com | All rights reserved
      </p>
    </footer>
  )
}
