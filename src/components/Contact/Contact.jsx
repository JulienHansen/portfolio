import { motion } from 'framer-motion'
import { useState } from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Form submitted:', formData)
    alert('Message envoyé ! Nous vous recontacterons rapidement.')
    setFormData({ firstName: '', lastName: '', email: '', message: '' })
  }

  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <div className={styles.grid}>
          <motion.div
            className={styles.header}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.label}>Contact</span>
            <h2 className={styles.title}>Discutons de votre projet</h2>
            <p className={styles.description}>
              Vous avez un projet de construction, de rénovation ou besoin d'une certification PEB ?
              Contactez-moi pour en discuter.
            </p>

            <div className={styles.info}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Email</span>
                <span>contact@quarto-architecture.be</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Adresse</span>
                <span>Rue de Loncin, Liège</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="lastName" className={styles.fieldLabel}>Nom</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Votre nom"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="firstName" className={styles.fieldLabel}>Prénom</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Votre prénom"
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.fieldLabel}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="votre@email.com"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message" className={styles.fieldLabel}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className={styles.textarea}
                placeholder="Décrivez votre projet..."
                rows="6"
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Envoyer le message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
