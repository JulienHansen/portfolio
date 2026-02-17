import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { projects } from '../../data/projects'
import styles from './ProjectDetail.module.css'

const ProjectDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.slug === slug)

  // Navigation vers projet suivant/précédent
  const currentIndex = projects.findIndex(p => p.slug === slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const handleBackToProjects = (e) => {
    e.preventDefault()
    navigate('/')
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h1>Projet non trouvé</h1>
        <Link to="/" className={styles.notFoundLink}>Retour à l'accueil</Link>
      </div>
    )
  }

  return (
    <div className={styles.projectDetail}>
      {/* Header with back link */}
      <header className={styles.header}>
        <div className="container">
          <a href="/#projects" onClick={handleBackToProjects} className={styles.backLink}>
            ← Retour aux projets
          </a>
        </div>
      </header>

      {/* Project Title */}
      <section className={styles.titleSection}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.title}>{project.title}</h1>
            <span className={styles.status}>{project.phase}</span>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Description + Images side by side */}
      <section className={styles.mainContent}>
        <div className="container">
          <div className={styles.contentGrid}>
            {/* Left - Info */}
            <motion.div
              className={styles.infoColumn}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className={styles.details}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Lieu</span>
                  <span className={styles.detailValue}>{project.location}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Surface</span>
                  <span className={styles.detailValue}>{project.surface}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Année</span>
                  <span className={styles.detailValue}>{project.year}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Type</span>
                  <span className={styles.detailValue}>{project.category}</span>
                </div>
                {project.collaboration && (
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Collaboration</span>
                    <span className={styles.detailValue}>{project.collaboration}</span>
                  </div>
                )}
              </div>

              <div className={styles.description}>
                <p>{project.description}</p>
              </div>

              <div className={styles.challengeSolution}>
                <div className={styles.textBlock}>
                  <h3>Le défi</h3>
                  <p>{project.challenge}</p>
                </div>
                <div className={styles.textBlock}>
                  <h3>La solution</h3>
                  <p>{project.solution}</p>
                </div>
              </div>
            </motion.div>

            {/* Right - Images */}
            <div className={styles.imagesColumn}>
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  className={styles.imageWrapper}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img
                    src={image}
                    alt={`${project.title} - ${index + 1}`}
                    className={`${styles.image} ${project.slug === 'strataverde' ? styles.imageHighContrast : ''}`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        className={styles.cta}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className={styles.ctaText}>Et si le prochain projet était le vôtre ?</p>
        <Link
          to="/#contact"
          className={styles.ctaButton}
          onClick={(e) => {
            e.preventDefault()
            navigate('/')
            setTimeout(() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }, 100)
          }}
        >
          Prendre contact
        </Link>
      </motion.section>

      {/* Project Navigation */}
      <nav className={styles.projectNav}>
        <Link to={`/projet/${prevProject.slug}`} className={styles.navLink}>
          <span className={styles.navLabel}>← Projet précédent</span>
          <span className={styles.navTitle}>{prevProject.title}</span>
        </Link>
        <Link to={`/projet/${nextProject.slug}`} className={`${styles.navLink} ${styles.navLinkNext}`}>
          <span className={styles.navLabel}>Projet suivant →</span>
          <span className={styles.navTitle}>{nextProject.title}</span>
        </Link>
      </nav>
    </div>
  )
}

export default ProjectDetail
