import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../assets/logo.png'

const Navbar = ({ visible = true }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Réinitialiser la section active si on est en haut (Hero)
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect()
        if (rect.top > window.innerHeight * 0.4) {
          setActiveSection('')
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Si on est sur une page projet, activer "projects"
    if (location.pathname.startsWith('/projet/')) {
      setActiveSection('projects')
      return
    }

    if (location.pathname !== '/') return

    const sections = ['projects', 'peb', 'about', 'contact']

    const observerOptions = {
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })

      // Vérifier si on est remonté au-dessus de toutes les sections
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect()
        if (rect.top > window.innerHeight * 0.5) {
          setActiveSection('')
        }
      }
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [location.pathname])

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
      window.scrollTo({ top: 0 })
    }
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const sectionId = href.replace('#', '')

    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  const navItems = [
    { label: 'Projets', href: '#projects' },
    { label: 'PEB', href: '#peb' },
    { label: 'À propos', href: '#about' },
    { label: 'Prendre contact', href: '#contact' }
  ]

  return (
    <motion.nav
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -20 }}
      transition={{ duration: 0.6 }}
    >
      <div className={`container ${styles.navContainer}`}>
        <Link to="/" className={styles.logo} onClick={handleLogoClick}>
          <img src={logo} alt="Quarto Architecture" className={styles.logoImg} />
          <span className={styles.logoSeparator}></span>
          <span className={styles.logoText}>Quarto <span>Architecture</span></span>
        </Link>

        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`${styles.navLink} ${activeSection === item.href.replace('#', '') ? styles.active : ''}`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
          <ul>
            {navItems.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  className={activeSection === item.href.replace('#', '') ? styles.mobileActive : ''}
                  onClick={(e) => {
                    handleNavClick(e, item.href)
                    setIsMobileMenuOpen(false)
                  }}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
