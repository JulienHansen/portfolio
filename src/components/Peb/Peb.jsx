import { motion } from 'framer-motion'
import styles from './Peb.module.css'

const Peb = () => {
  const services = [
    {
      title: "Certification PEB",
      description: "Évaluation complète de la performance énergétique de votre bâtiment selon les normes en vigueur.",
      price: "À partir de 250€"
    },
    {
      title: "Audit Énergétique",
      description: "Analyse approfondie et recommandations personnalisées pour améliorer l'efficacité énergétique.",
      price: "À partir de 450€"
    },
    {
      title: "Accompagnement Rénovation",
      description: "Conseil et suivi pour vos projets de rénovation énergétique et obtention de primes.",
      price: "Sur devis"
    }
  ]

  const competences = [
    "Certificateur PEB agréé Région Wallonne",
    "Certificateur PEB agréé Région Bruxelloise",
    "Logiciels PHPP & PEB",
    "Normes NBN et réglementations européennes",
    "Thermographie infrarouge",
    "Blower door test"
  ]

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
          <span className={styles.label}>Services</span>
          <h2 className={styles.title}>Certification PEB</h2>
          <p className={styles.intro}>
            Le certificat PEB (Performance Énergétique des Bâtiments) est obligatoire
            pour toute vente ou location d'un bien immobilier en Belgique. Il évalue
            la consommation énergétique de votre bâtiment et lui attribue une classe
            énergétique de A à G.
          </p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            className={styles.services}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={styles.sectionTitle}>Tarifs</h3>
            <div className={styles.servicesList}>
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className={styles.serviceCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={styles.serviceHeader}>
                    <h4 className={styles.serviceTitle}>{service.title}</h4>
                    <span className={styles.servicePrice}>{service.price}</span>
                  </div>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.competences}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className={styles.sectionTitle}>Compétences</h3>
            <ul className={styles.competencesList}>
              {competences.map((competence, index) => (
                <motion.li
                  key={competence}
                  className={styles.competenceItem}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                >
                  <span className={styles.checkmark}>✓</span>
                  {competence}
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
          <a href="#contact" className={styles.ctaButton}>Demander un devis</a>
        </motion.div>
      </div>
    </section>
  )
}

export default Peb
