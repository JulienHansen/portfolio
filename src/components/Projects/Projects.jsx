import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import styles from './Projects.module.css'

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.label}>Projets</span>
          <h2 className={styles.title}>Réalisations</h2>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className={styles.item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/projet/${project.slug}`} className={styles.link}>
                <div className={styles.imageWrapper}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.image}
                  />
                  <div className={styles.overlay}>
                    <span className={styles.viewText}>Voir le projet</span>
                  </div>
                </div>

                <div className={styles.info}>
                  <div className={styles.meta}>
                    <span className={styles.category}>{project.category}</span>
                    <span className={styles.separator}>—</span>
                    <span className={styles.year}>{project.year}</span>
                  </div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <span className={styles.location}>{project.location}</span>
                  {project.collaboration && (
                    <span className={styles.collaboration}>En collaboration avec : {project.collaboration}</span>
                  )}
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
