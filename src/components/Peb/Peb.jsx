import { motion } from 'framer-motion'
import styles from './Peb.module.css'

const Peb = () => {
  const services = [
    {
      title: "Studio < 50 m²",
      description: "Idéal pour les petites surfaces : kot, studio ou petit appartement.",
      price: "À partir de 165€"
    },
    {
      title: "Appartement > 50 m²",
      description: "Pour les appartements, duplex ou triplex de taille moyenne à grande.",
      price: "À partir de 215€"
    },
    {
      title: "Maison",
      description: "Maison unifamiliale, villa ou habitation avec jardin.",
      price: "À partir de 265€"
    }
  ]

  const competences = [
    "Certificateur PEB agréé Région Wallonne",
    "Logiciel PACE",
    "Réglementations Région Wallonne",
  ]

  const etapesVisite = [
    "Prise de rendez-vous",
    "Visite du bien (± 1h)",
    "Encodage des données",
    "Envoi du certificat sous 5 jours"
  ]

  const documents = [
    "Factures de travaux d'isolation",
    "Fiches techniques équipements",
    "Demandes de primes acceptées",
    "Plans et attestations"
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
          <span className={styles.label}>PEB</span>
          <h2 className={styles.title}>Certification PEB</h2>
          <p className={styles.intro}>
            Le certificat PEB (Performance Énergétique des Bâtiments) est obligatoire
            pour toute vente ou location d'un bien immobilier en Belgique.
            <br /><br />
            Il évalue la performance énergétique du bâtiment (consommation d'énergie, isolation, ECS, ventilation) et lui attribue une classe
            énergétique allant de A++ à G.
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
            <h3 className={styles.sectionTitle}>Tarifs - Certificat PEB</h3>
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
            <p className={styles.priceNote}>* Tous les prix sont TVAC</p>
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
            onClick={() => {
              const message = `Bonjour,

Je souhaite obtenir un devis pour un certificat PEB.

Type de bien :
Adresse du bien :
Surface approximative :

Cordialement,`
              window.dispatchEvent(new CustomEvent('prefillContactForm', {
                detail: {
                  message,
                  subject: 'Certification PEB'
                }
              }))
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Demander un devis
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Peb
