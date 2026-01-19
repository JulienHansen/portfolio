import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { projects } from '../../data/projects'
import styles from './ProjectDetail.module.css'

const ProjectDetail = () => {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h1>Projet non trouvé</h1>
        <Link to="/" className={styles.backLink}>Retour à l'accueil</Link>
      </div>
    )
  }

  return (
    <div className={styles.projectDetail}>
      {/* Header */}
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <Link to="/#projects" className={styles.backArrow}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </Link>
          <div className={styles.headerContent}>
            <div className={styles.meta}>
              <span className={styles.category}>{project.category}</span>
              <span className={styles.separator}>—</span>
              <span className={styles.year}>{project.year}</span>
            </div>

            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.location}>{project.location}</p>
          </div>
        </div>
      </motion.header>

      {/* Main Image - Full Screen */}
      <motion.section
        className={styles.mainImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img
          src={project.images[selectedImage]}
          alt={`${project.title} - Image ${selectedImage + 1}`}
          className={styles.heroImage}
        />
        <div className={styles.scrollIndicator}>
          <span>Scroll</span>
          <div className={styles.scrollLine} />
        </div>
      </motion.section>

      {/* Gallery Thumbnails */}
      <section className={styles.gallery}>
        <div className="container">
          <div className={styles.thumbnails}>
            {project.images.map((image, index) => (
              <motion.button
                key={index}
                className={`${styles.thumbnail} ${selectedImage === index ? styles.active : ''}`}
                onClick={() => setSelectedImage(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <img src={image} alt={`${project.title} - Miniature ${index + 1}`} />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className={styles.info}>
        <div className="container">
          <div className={styles.infoGrid}>
            <motion.div
              className={styles.stats}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.stat}>
                <span className={styles.statLabel}>Surface</span>
                <span className={styles.statValue}>{project.surface}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Durée</span>
                <span className={styles.statValue}>{project.duration}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Catégorie</span>
                <span className={styles.statValue}>{project.category}</span>
              </div>
            </motion.div>

            <motion.div
              className={styles.description}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2>À propos du projet</h2>
              <p>{project.description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className={styles.challengeSection}>
        <div className="container">
          <div className={styles.challengeGrid}>
            <motion.div
              className={styles.challengeBlock}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>Le défi</h3>
              <p>{project.challenge}</p>
            </motion.div>

            <motion.div
              className={styles.solutionBlock}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3>Notre solution</h3>
              <p>{project.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation to other projects */}
      <section className={styles.navigation}>
        <div className="container">
          <Link to="/#projects" className={styles.navButton}>
            Voir tous les projets
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ProjectDetail
