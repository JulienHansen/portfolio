import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [isPrefilled, setIsPrefilled] = useState(false)

  const subjectOptions = [
    { value: '', label: 'Sélectionnez un objet' },
    { value: 'Projet de construction', label: 'Projet de construction' },
    { value: 'Projet de rénovation', label: 'Projet de rénovation' },
    { value: 'Projet de transformation', label: 'Projet de transformation' },
    { value: 'Régularisation', label: 'Régularisation' },
    { value: 'Certification PEB', label: 'Certification PEB' },
    { value: 'Autres', label: 'Autres' }
  ]

  useEffect(() => {
    const handlePrefillMessage = (e) => {
      const newSubject = e.detail.subject || ''
      const newMessage = e.detail.message || ''

      setFormData(prev => ({
        ...prev,
        subject: newSubject || prev.subject,
        message: newMessage || prev.message
      }))
      if (newSubject || newMessage) {
        setIsPrefilled(true)
      }
    }

    window.addEventListener('prefillContactForm', handlePrefillMessage)
    return () => window.removeEventListener('prefillContactForm', handlePrefillMessage)
  }, [])

  const pebMessage = `Bonjour,

Je souhaite obtenir un devis pour un certificat PEB.

Type de bien :
Adresse du bien :
Surface approximative :

Cordialement,`

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'subject') {
      // Si l'utilisateur sélectionne "Certification PEB", on pré-remplit le message
      if (value === 'Certification PEB') {
        setFormData({
          ...formData,
          subject: value,
          message: pebMessage
        })
        setIsPrefilled(true)
      } else if (isPrefilled) {
        // Si l'objet change et que le message était pré-rempli, on efface le message
        setFormData({
          ...formData,
          subject: value,
          message: ''
        })
        setIsPrefilled(false)
      } else {
        setFormData({
          ...formData,
          subject: value
        })
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Remplacez YOUR_FORM_ID par votre ID Formspree
    // Créez un compte gratuit sur https://formspree.io et créez un formulaire
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `[Quarto Architecture] ${formData.subject}`
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    }

    setIsSubmitting(false)
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
            <span className={styles.label}>Prendre contact</span>
            <h2 className={styles.title}>Discutons de votre projet</h2>
            <p className={styles.description}>
              Vous avez un projet de construction, de rénovation/transformation, de régularisation ou besoin d'une certification PEB ?
              <br />
              Contactez-moi pour en discuter.
            </p>
            <p className={styles.noEngagement}>Premier contact sans engagement</p>

            <div className={styles.info}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Email</span>
                <a href="mailto:contact@quarto-architecture.be" className={styles.infoLink}>
                  contact@quarto-architecture.be
                </a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Téléphone</span>
                <a href="tel:+32499337403" className={styles.infoLink}>
                  +32 499 33 74 03
                </a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Adresse</span>
                <a
                  href="#map"
                  className={styles.infoLink}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Rue de Loncin 58, 4460 Grâce-Hollogne
                </a>
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
              <label htmlFor="subject" className={styles.fieldLabel}>Objet</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={`${styles.select} ${formData.subject === '' ? styles.selectPlaceholder : ''}`}
              >
                {subjectOptions.map((option) => (
                  <option key={option.value} value={option.value} disabled={option.value === ''}>
                    {option.label}
                  </option>
                ))}
              </select>
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

            {submitStatus === 'success' && (
              <p className={styles.successMessage}>
                Message envoyé avec succès ! Je vous recontacterai rapidement.
              </p>
            )}

            {submitStatus === 'error' && (
              <p className={styles.errorMessage}>
                Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.
              </p>
            )}

            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
