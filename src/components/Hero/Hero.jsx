import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import styles from './Hero.module.css'
import logo from '../../assets/logo.png'

const Hero = ({ onIntroComplete, skipIntro }) => {
  const [phase, setPhase] = useState(skipIntro ? 'complete' : 'intro') // 'intro' | 'moving' | 'complete'

  useEffect(() => {
    if (skipIntro) {
      if (onIntroComplete) onIntroComplete()
      return
    }

    // Phase 1: Logo visible au centre
    const timer1 = setTimeout(() => {
      setPhase('moving')
    }, 2000)

    // Phase 2: Logo déplacé, vidéo apparaît
    const timer2 = setTimeout(() => {
      setPhase('complete')
      if (onIntroComplete) onIntroComplete()
    }, 2800)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [onIntroComplete, skipIntro])

  return (
    <section className={styles.hero} id="hero">
      {/* Logo animé qui se déplace vers la navbar */}
      <AnimatePresence>
        {phase !== 'complete' && (
          <motion.div
            className={styles.logoOverlay}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className={styles.logoWrapper}
              initial={{
                top: '50%',
                left: '50%',
                x: '-50%',
                y: '-50%',
              }}
              animate={phase === 'moving' ? {
                top: '35px',
                left: '-47px',
                x: '0%',
                y: '-50%',
              } : {
                top: '50%',
                left: '50%',
                x: '-50%',
                y: '-50%',
              }}
              transition={{ duration: .8, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.img
                src={logo}
                alt="Logo"
                className={styles.heroLogo}
                animate={phase === 'moving' ? {
                  height: '30px',
                  opacity: 0,
                } : {
                  height: 'clamp(60px, 12vw, 120px)',
                  opacity: 1,
                }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              />
              <motion.h1
                className={styles.movingLogo}
                animate={phase === 'moving' ? {
                  fontSize: '1rem',
                } : {
                  fontSize: 'clamp(2.5rem, 9vw, 6rem)',
                }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                Quarto <span>Architecture</span>
              </motion.h1>

              <motion.p
                className={styles.introSubtitle}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: phase === 'intro' ? 1 : 0,
                  y: phase === 'intro' ? 0 : -10
                }}
                transition={{ duration: .75, delay: phase === 'intro' ? 0.4 : 0 }}
              >
                Certification PEB • Ingénieur Architecte • Design
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video/Image Background */}
      <motion.div
        className={styles.mediaContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === 'complete' ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-modern-building-background-shot-4240-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className={styles.videoOverlay} />
      </motion.div>

      {/* Subtitle - appears with video */}
      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: phase === 'complete' ? 1 : 0,
          y: phase === 'complete' ? 0 : 20
        }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Certification PEB • Ingénieur Architecte • Design
      </motion.p>

      <motion.div
        className={styles.scrollLine}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: phase === 'complete' ? 1 : 0 }}
        transition={{ duration: 1, delay: 1 }}
      />
    </section>
  )
}

export default Hero
