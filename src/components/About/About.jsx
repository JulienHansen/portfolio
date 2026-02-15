import { motion } from 'framer-motion'
import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles.grid}>
          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Remplacez cette URL par votre photo */}
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
              alt="Portrait"
              className={styles.image}
            />
          </motion.div>

          <motion.div
            className={styles.content}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className={styles.label}>À propos</span>
            <h2 className={styles.title}>Kassandra Quarto</h2>
            <p className={styles.subtitle}>Ingénieure Civile Architecte</p>

            <div className={styles.bio}>
              <p>
                Mon approche de l'architecture est autant technique que sensible. J'accorde autant d'importance à la structure, aux détails constructifs et à la durabilité qu'à l'ambiance et à l'usage quotidien des espaces.
              </p>
              <p>
                J'aime comprendre comment un bâtiment fonctionne réellement. Je m'implique dans les projets de la conception jusqu'au chantier, en cherchant des solutions concrètes, cohérentes et réalisables, adaptées au budget et au contexte existant.
              </p>
              <p>
                J'interviens principalement sur des rénovations et transformations, où chaque situation est différente et demande réflexion plutôt qu'une réponse standardisée. Mon objectif est de proposer des espaces justes, confortables et durables, pensés pour les personnes qui les occupent.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
