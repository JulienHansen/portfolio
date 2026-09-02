import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects, STAR_TAG } from '../../data/projects'
import styles from './Projects.module.css'

const STAR_LIMIT = 6

const Projects = () => {
  const [activeTag, setActiveTag] = useState(STAR_TAG)

  const tags = useMemo(() => {
    const others = new Set()
    projects.forEach((project) => {
      project.tags?.forEach((tag) => {
        if (tag !== STAR_TAG) others.add(tag)
      })
    })
    return [STAR_TAG, ...others]
  }, [])

  const visibleProjects = useMemo(() => {
    const filtered = projects.filter((project) => project.tags?.includes(activeTag))
    return activeTag === STAR_TAG ? filtered.slice(0, STAR_LIMIT) : filtered
  }, [activeTag])

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

        <motion.div
          className={styles.filters}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className={styles.filterLabel}>Filtrer par</span>
          <div className={styles.filterList}>
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`${styles.filterButton} ${tag === activeTag ? styles.filterButtonActive : ''}`}
                onClick={() => setActiveTag(tag)}
                aria-pressed={tag === activeTag}
              >
                {tag === STAR_TAG ? `${tag} ♥` : tag}
              </button>
            ))}
          </div>
        </motion.div>

        <div className={styles.grid}>
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.id}
              className={styles.item}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
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
                    <span className={styles.collaboration}>En collaboration avec : {project.collaboration.split(', ').join(' – ')}</span>
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
