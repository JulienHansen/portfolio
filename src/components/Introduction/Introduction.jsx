import { motion } from 'framer-motion'
import styles from './Introduction.module.css'

const Introduction = () => {
  const handleContactClick = (subject = null) => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
      if (subject) {
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent('prefillContactForm', {
            detail: { subject, message: '' }
          }))
        }, 300)
      }
    }
  }

  return (
    <section className={styles.introduction}>
      <div className="container">
        <motion.div
          className={styles.content}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className={styles.left}>
            <h2 className={styles.name}>Kassandra Quarto</h2>
            <p className={styles.title}>Ingénieure civile architecte</p>
            <p className={styles.location}>Région liégeoise</p>
          </div>

          <div className={styles.center}>
            <p className={styles.description}>
              J'accompagne les particuliers de l'esquisse jusqu'au chantier : étude du projet, permis d'urbanisme, plans techniques et suivi des travaux.
            </p>
            <button
              className={styles.contactLink}
              onClick={() => handleContactClick()}
            >
              Prendre contact
            </button>
          </div>

          <div className={styles.right}>
            <ul className={styles.services}>
              <li><button onClick={() => handleContactClick('Projet de rénovation')}>Rénovations</button></li>
              <li><button onClick={() => handleContactClick('Projet de transformation')}>Transformations</button></li>
              <li><button onClick={() => handleContactClick('Projet de construction')}>Construction</button></li>
              <li><button onClick={() => handleContactClick('Régularisation')}>Régularisation</button></li>
              <li><button onClick={() => handleContactClick('Certification PEB')}>Certification PEB</button></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Introduction
