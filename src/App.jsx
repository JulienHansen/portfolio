import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Peb from './components/Peb/Peb'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ProjectDetail from './components/ProjectDetail/ProjectDetail'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import useIsMobile from './hooks/useIsMobile'

function DesktopHomePage({ onIntroComplete, showNavbar, skipIntro }) {
  return (
    <>
      <Navbar visible={showNavbar} />
      <main>
        <Hero onIntroComplete={onIntroComplete} skipIntro={skipIntro} />
        <Projects />
        <Peb />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

function MobilePage({ children }) {
  return (
    <>
      <Navbar visible={true} />
      <main style={{ paddingTop: 'var(--nav-height)' }}>
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

function MobileHomePage({ onIntroComplete, showNavbar, skipIntro }) {
  return (
    <>
      <Navbar visible={showNavbar} />
      <main>
        <Hero onIntroComplete={onIntroComplete} skipIntro={skipIntro} />
      </main>
    </>
  )
}

function ProjectPage() {
  return (
    <>
      <Navbar visible={true} />
      <main>
        <ProjectDetail />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

function App() {
  const isMobile = useIsMobile()
  const [introSeen, setIntroSeen] = useState(() => {
    return sessionStorage.getItem('introSeen') === 'true'
  })

  const handleIntroComplete = () => {
    setIntroSeen(true)
    sessionStorage.setItem('introSeen', 'true')
  }

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        {isMobile ? (
          <>
            <Route
              path="/"
              element={
                <MobileHomePage
                  showNavbar={introSeen}
                  onIntroComplete={handleIntroComplete}
                  skipIntro={introSeen}
                />
              }
            />
            <Route path="/projects" element={<MobilePage><Projects /></MobilePage>} />
            <Route path="/peb" element={<MobilePage><Peb /></MobilePage>} />
            <Route path="/about" element={<MobilePage><About /></MobilePage>} />
            <Route path="/contact" element={<MobilePage><Contact /></MobilePage>} />
          </>
        ) : (
          <Route
            path="/"
            element={
              <DesktopHomePage
                showNavbar={introSeen}
                onIntroComplete={handleIntroComplete}
                skipIntro={introSeen}
              />
            }
          />
        )}
        <Route path="/projet/:slug" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
