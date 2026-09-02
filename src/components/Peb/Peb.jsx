import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './Peb.module.css'
import useIsMobile from '../../hooks/useIsMobile'

const pricingGroups = [
  {
    title: "Studios & appartements",
    items: [
      {
        title: "Studio",
        description: "Kot, studio ou petite surface < 50 m².",
        price: "165 €",
        bien: "Studio",
        surface: "Moins de 50 m²"
      },
      {
        title: "Appartement 1 chambre",
        description: "Appartement, duplex ou triplex.",
        price: "215 €",
        bien: "Appartement 1 chambre"
      },
      {
        title: "Appartement 2 chambres",
        description: "Appartement, duplex ou triplex.",
        price: "235 €",
        bien: "Appartement 2 chambres"
      },
      {
        title: "Appartement > 2 chambres",
        description: "Grandes surfaces, duplex et triplex.",
        price: "Sur demande",
        bien: "Appartement de plus de 2 chambres"
      }
    ]
  },
  {
    title: "Maisons",
    items: [
      {
        title: "Moins de 100 m²",
        description: "Maison unifamiliale ou habitation avec jardin.",
        price: "265 €",
        bien: "Maison",
        surface: "Moins de 100 m²"
      },
      {
        title: "De 100 à 150 m²",
        description: "Maison unifamiliale ou villa.",
        price: "285 €",
        bien: "Maison",
        surface: "De 100 à 150 m²"
      },
      {
        title: "De 150 à 200 m²",
        description: "Maison unifamiliale ou villa.",
        price: "310 €",
        bien: "Maison",
        surface: "De 150 à 200 m²"
      },
      {
        title: "Plus de 200 m²",
        description: "Villa ou habitation d'exception.",
        price: "Sur demande",
        bien: "Maison",
        surface: "Plus de 200 m²"
      }
    ]
  }
]

const energyClasses = [
  { label: "A++", fill: "#1a1a1a" },
  { label: "A+", fill: "#262626" },
  { label: "A", fill: "#333333" },
  { label: "B", fill: "#454545" },
  { label: "C", fill: "#5a5a5a" },
  { label: "D", fill: "#7a7a7a" },
  { label: "E", fill: "#9c9c9c" },
  { label: "F", fill: "#bcbcbc" },
  { label: "G", fill: "#d4d4d4" }
]

const PebLogo = () => (
  <svg
    className={styles.pebLogo}
    viewBox="22 22 230 230"
    role="img"
    aria-label="Échelle des classes énergétiques PEB, de A++ à G"
    fontFamily="Inter, sans-serif"
  >
    <text x="26" y="48" fontSize="30" fontWeight="600" letterSpacing="-0.5" fill="#1a1a1a">
      PEB
    </text>
    <text x="26" y="66" fontSize="8" letterSpacing="2.4" fill="#6b6b6b">
      CERTIFICAT ÉNERGÉTIQUE
    </text>
    <line x1="26" y1="82" x2="234" y2="82" stroke="#e8e4dc" strokeWidth="1" />

    {energyClasses.map((item, index) => {
      const y = 96 + index * 17
      const height = 14
      const x = 52
      const width = 44 + index * 19
      const tip = 9
      return (
        <g key={item.label}>
          <text
            x="46"
            y={y + height / 2 + 3}
            fontSize="9"
            fontWeight="500"
            textAnchor="end"
            fill="#6b6b6b"
          >
            {item.label}
          </text>
          <polygon
            points={`${x},${y} ${x + width - tip},${y} ${x + width},${y + height / 2} ${x + width - tip},${y + height} ${x},${y + height}`}
            fill={item.fill}
          />
        </g>
      )
    })}
  </svg>
)

const PriceCarousel = ({ group, onDevisClick }) => {
  const carouselRef = useRef(null)
  const [activeCard, setActiveCard] = useState(0)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const handleScroll = () => {
      const cardWidth = carousel.offsetWidth * 0.82
      const index = Math.round(carousel.scrollLeft / cardWidth)
      setActiveCard(Math.min(index, group.items.length - 1))
    }

    carousel.addEventListener('scroll', handleScroll, { passive: true })
    return () => carousel.removeEventListener('scroll', handleScroll)
  }, [group.items.length])

  return (
    <div className={styles.carouselWrapper}>
      <h3 className={styles.sectionTitle}>{group.title}</h3>
      <div className={styles.carousel} ref={carouselRef}>
        {group.items.map((item) => (
          <div key={item.title} className={styles.carouselCard}>
            <button
              type="button"
              className={styles.carouselCardInner}
              onClick={() => onDevisClick(item)}
            >
              <h4 className={styles.serviceTitle}>{item.title}</h4>
              <span className={styles.servicePrice}>{item.price}</span>
              <p className={styles.serviceDescription}>{item.description}</p>
              <span className={styles.cardCta}>Demander un devis →</span>
            </button>
          </div>
        ))}
      </div>
      <div className={styles.carouselDots}>
        {group.items.map((item, index) => (
          <span
            key={item.title}
            className={`${styles.dot} ${index === activeCard ? styles.dotActive : ''}`}
          />
        ))}
      </div>
    </div>
  )
}

const Peb = () => {
  const isMobile = useIsMobile()

  const etapesVisite = [
    "Prise de rendez-vous",
    "Visite du bien",
    "Encodage des données",
    "Envoi du certificat"
  ]

  const documents = [
    "Factures de travaux d'isolation",
    "Fiches techniques équipements",
    "Demandes de primes acceptées",
    "Plans et attestations"
  ]

  const handleDevisClick = (item) => {
    const field = (label, value) => (value ? `${label} : ${value}` : `${label} :`)
    const message = [
      'Bonjour,',
      '',
      'Je souhaite obtenir un devis pour un certificat PEB.',
      '',
      field('Type de bien', item?.bien),
      field('Adresse du bien'),
      field('Surface approximative', item?.surface),
      '',
      'Cordialement,'
    ].join('\n')

    window.dispatchEvent(new CustomEvent('prefillContactForm', {
      detail: { message, subject: 'Certification PEB' }
    }))
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.peb} id="peb">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.headerText}>
            <span className={styles.label}>PEB</span>
            <h2 className={styles.title}>Certification PEB</h2>
            <p className={styles.intro}>
              Le certificat PEB (Performance Énergétique des Bâtiments) est obligatoire
              pour toute vente ou location d'un bien immobilier en Belgique.
              <br /><br />
              Il évalue la performance énergétique du bâtiment (consommation d'énergie, isolation, ECS, ventilation) et lui attribue une classe
              énergétique allant de A++ à G.
            </p>
          </div>
          <PebLogo />
        </motion.div>

        {isMobile ? (
          <>
            {pricingGroups.map((group) => (
              <PriceCarousel
                key={group.title}
                group={group}
                onDevisClick={handleDevisClick}
              />
            ))}
            <p className={styles.priceNote}>* Tous les prix sont TVAC, déplacement compris</p>

            <div className={styles.mobileSection}>
              <h3 className={styles.sectionTitle}>Comment se déroule la visite ?</h3>
              <ol className={styles.etapesList}>
                {etapesVisite.map((etape, index) => (
                  <li key={etape} className={styles.etapeItem}>
                    <span className={styles.etapeNumber}>{index + 1}</span>
                    {etape}
                  </li>
                ))}
              </ol>
            </div>

            <div className={styles.mobileSection}>
              <h3 className={styles.sectionTitle}>Documents à préparer</h3>
              <ul className={styles.documentsList}>
                {documents.map((doc) => (
                  <li key={doc} className={styles.documentItem}>
                    <span className={styles.checkmark}>✓</span>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.cta}>
              <p>Besoin d'un certificat PEB ?</p>
              <button
                type="button"
                className={styles.ctaButton}
                onClick={() => handleDevisClick()}
              >
                Demander un devis
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={styles.grid}>
              {pricingGroups.map((group, groupIndex) => (
                <motion.div
                  key={group.title}
                  className={styles.services}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: groupIndex * 0.15 }}
                >
                  <h3 className={styles.sectionTitle}>{group.title}</h3>
                  <div className={styles.servicesList}>
                    {group.items.map((item, index) => (
                      <motion.button
                        key={item.title}
                        type="button"
                        className={styles.serviceCard}
                        onClick={() => handleDevisClick(item)}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className={styles.serviceHeader}>
                          <h4 className={styles.serviceTitle}>{item.title}</h4>
                          <span className={styles.servicePrice}>{item.price}</span>
                        </div>
                        <p className={styles.serviceDescription}>{item.description}</p>
                        <span className={styles.cardCta}>Demander un devis →</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            <p className={styles.priceNote}>* Tous les prix sont TVAC, déplacement compris</p>

            <div className={styles.gridSecondary}>
              <motion.div
                className={styles.etapes}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className={styles.sectionTitle}>Comment se déroule la visite ?</h3>
                <ol className={styles.etapesList}>
                  {etapesVisite.map((etape, index) => (
                    <motion.li
                      key={etape}
                      className={styles.etapeItem}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <span className={styles.etapeNumber}>{index + 1}</span>
                      {etape}
                    </motion.li>
                  ))}
                </ol>
              </motion.div>

              <motion.div
                className={styles.documents}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className={styles.sectionTitle}>Documents à préparer</h3>
                <ul className={styles.documentsList}>
                  {documents.map((doc, index) => (
                    <motion.li
                      key={doc}
                      className={styles.documentItem}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <span className={styles.checkmark}>✓</span>
                      {doc}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              className={styles.cta}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p>Besoin d'un certificat PEB ?</p>
              <button
                type="button"
                className={styles.ctaButton}
                onClick={() => handleDevisClick()}
              >
                Demander un devis
              </button>
            </motion.div>
          </>
        )}
      </div>
    </section>
  )
}

export default Peb
