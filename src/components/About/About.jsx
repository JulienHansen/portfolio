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
            <p className={styles.subtitle}>Ingénieur Architecte</p>

            <div className={styles.bio}>
              <p>
                Passionnée par l'architecture depuis toujours, je conçois des espaces
                qui allient esthétique, fonctionnalité et respect de l'environnement.
              </p>
              <p>
                Chaque projet est une nouvelle opportunité de créer un lieu de vie
                unique, pensé pour ses habitants et en harmonie avec son contexte.
              </p>
              <p>
                Basée à Bruxelles, j'accompagne mes clients de la conception
                à la réalisation de leurs projets résidentiels et commerciaux.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
