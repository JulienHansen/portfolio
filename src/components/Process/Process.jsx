import { motion } from 'framer-motion'
import styles from './Process.module.css'

const Process = () => {
  const steps = [
    {
      title: 'Premier rendez-vous',
      description: 'Nous discutons de vos besoins, de votre budget et du potentiel du bâtiment.'
    },
    {
      title: 'Esquisse',
      description: 'Proposition d\'aménagement et premières intentions du projet.'
    },
    {
      title: 'Permis d\'urbanisme',
      description: 'Réalisation du dossier et accompagnement dans les démarches administratives.'
    },
    {
      title: 'Plans techniques',
      description: 'Élaboration des plans nécessaires aux entrepreneurs.'
    },
    {
      title: 'Chantier',
      description: 'Suivi des travaux, réunions de chantier et vérification de la bonne exécution.'
    }
  ]

  return (
    <section className={styles.process}>
      <div className="container">
        <motion.div
          className={styles.wrapper}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.header}>
            <span className={styles.label}>Déroulement d'un projet</span>
          </div>

          <div className={styles.timeline}>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={styles.step}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className={styles.stepTitle}>{step.title}</span>
                <span className={styles.stepDescription}>{step.description}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Process
