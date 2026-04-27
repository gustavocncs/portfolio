import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Sobre',    href: '#sobre'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato',  href: '#contato'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>gc<span>.</span></a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a
          href="https://github.com/gustavocncs"
          target="_blank"
          rel="noreferrer"
          className={styles.cta}
        >
          GitHub →
        </a>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(p => !p)}
          aria-label="Menu"
        >
          <span className={menuOpen ? styles.open1 : ''} />
          <span className={menuOpen ? styles.open2 : ''} />
          <span className={menuOpen ? styles.open3 : ''} />
        </button>
      </div>
    </nav>
  )
}
