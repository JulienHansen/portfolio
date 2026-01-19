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

function HomePage({ onIntroComplete, showNavbar, skipIntro }) {
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
    </>
  )
}

function App() {
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
        <Route
          path="/"
          element={
            <HomePage
              showNavbar={introSeen}
              onIntroComplete={handleIntroComplete}
              skipIntro={introSeen}
            />
          }
        />
        <Route path="/projet/:slug" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
