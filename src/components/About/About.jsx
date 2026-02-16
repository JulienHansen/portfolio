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
                Mon travail consiste avant tout à comprendre les besoins et le mode de vie de mes clients. Chaque projet est différent : il s'inscrit dans un budget, un bâtiment existant et une réalité quotidienne.
              </p>
              <p>
                Je privilégie des solutions simples, cohérentes et réalisables, en accordant autant d'attention à la qualité constructive qu'au confort des espaces.
              </p>
              <p>
                Je m'implique personnellement dans chaque étape : premières esquisses, démarches administratives, élaboration des plans techniques et suivi du chantier. Mon objectif est que le projet se déroule de manière claire et sereine pour le client.
              </p>
              <p>
                Je travaille principalement sur des rénovations et transformations de logements dans la région liégeoise.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
