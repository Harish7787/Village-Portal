import { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer  from '../Components/Footer/Footer'
import Hero from '../Components/Hero/Hero'

function Home() {

  const [lang, setLang] = useState('en')
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const t = {
    nav_home: 'Home',
    nav_tourism: 'Tourism',
    nav_transport: 'Transport',
    nav_nagarpalika: 'Nagarpalika',
    nav_events: 'Events',
    nav_helpline: 'Helpline',
    hero_title: 'Jam Raval',
hero_subtitle: 'Smart Village Digital Portal',
  }

  return (
    <div className={isDark ? 'dark' : ''}>

      <Navbar
        lang={lang}
        setLang={setLang}
        isDark={isDark}
        toggleTheme={toggleTheme}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        t={t}
      />
      <Hero lang={lang} t={t} />
    <Footer className="pt-24"/>
    </div>
  )
}

export default Home