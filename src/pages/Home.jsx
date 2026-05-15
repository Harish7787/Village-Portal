import { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Hero from '../Components/Hero/Hero'
import Tourism from '../Components/Tourism/Tourism'
import Transport from '../Components/Transport/Transport'
import Helpline from '../Components/Helpline/Helpline'
import Map from '../Components/Map/Map'
import Events from '../Components/Events/Events'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

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
  const i18n = {
    en: {
      nav_home: "Home", nav_tourism: "Tourism", nav_transport: "Transport", nav_services: "Nagarpalika", nav_events: "Events", nav_helpline: "Helpline",
      hero_title: "Jam Raval", hero_subtitle: "Where Ancient Heritage Meets the Digital Future",
      bus_title: "ST Bus Timetable", bus_desc: "Connecting you to Rajkot, Jamnagar, and Dwarka.",
      services_title: "Municipal E-Portal",
      events_title: "Village Highlights",
      map_title: "Village Map",
      tour_title: "Explore Landmarks", tour_p1_name: "Shiv Temple", tour_p1_desc: "Ancient architecture.",
      tour_p2_name: "Lake Point", tour_p2_desc: "Sunset view point.",
      tour_p3_name: "Heritage Bazaar", tour_p3_desc: "Handicrafts & Spices.",
      footer_about: "Empowering our village through digital innovation.",
      s1_title: "Digital Documentation", s1_desc: "Download Birth, Death, and Income certificates directly.",
      s2_title: "Utility Bill Payment", s2_desc: "Secure and fast payment for village services.",
      s3_title: "Property & Land Records", s3_desc: "Verify land records and pay taxes online.",
      s4_title: "Grievance Redressal", s4_desc: "Submit complaints regarding sanitation or roads.",
      s5_title: "Municipal Tenders", s5_desc: "Live updates on village development contracts.",
      s6_title: "Business Licensing", s6_desc: "New trade licenses and renewal for local businesses.",
      s7_title: "Marriage & Registrar", s7_desc: "Online registration for marriages.",
      s8_title: "Health & Welfare", s8_desc: "Access local clinic hours and health schemes.",
      btn_read_more: "Read More", btn_details: "Details",
      sponsor_title: "Main Project Sponsor",
      sponsor_name: "[Your Name Here]",
      sponsor_tag: "Premium Partner"
    },
    gu: {
      nav_home: "હોમ", nav_tourism: "પર્યટન", nav_transport: "પરિવહન", nav_services: "નગરપાલિકા", nav_events: "કાર્યક્રમો", nav_helpline: "હેલ્પલાઈન",
      hero_title: "જામ રાવલ", hero_subtitle: "વારસો અને ડિજિટલ ભવિષ્યનું મિલન",
      bus_title: "એસ.ટી. બસ ટાઈમ ટેબલ", bus_desc: "રાજકોટ, જામનગર અને દ્વારકા સાથે જોડાણ.",
      services_title: "મ્યુનિસિપલ ઇ-પોર્ટલ",
      events_title: "ગામની વિશેષતાઓ",
      map_title: "ગામનું લોકેશન",
      tour_title: "પર્યટક સ્થળો", tour_p1_name: "શિવ મંદિર", tour_p1_desc: "પ્રાચીન સ્થાપત્ય.",
      tour_p2_name: "સરોવર કિનારો", tour_p2_desc: "સૂર્યાસ્ત પોઈન્ટ.",
      tour_p3_name: "જૂનું બજાર", tour_p3_desc: "હસ્તકલા અને મસાલા.",
      footer_about: "ડિજિટલ ઇનોવેશન દ્વારા ગામને સશક્ત બનાવવું.",
      s1_title: "ડિજિટલ દસ્તાવેજો", s1_desc: "જન્મ, મરણ અને આવકના દાખલા સીધા ડાઉનલોડ કરો.",
      s2_title: "યુટિલિટી બિલ ચુકવણી", s2_desc: "પાણી અને કચરાની સેવાઓ માટે સુરક્ષિત ચુકવણી.",
      s3_title: "મિલકત અને જમીન રેકોર્ડ", s3_desc: "જમીન રેકોર્ડની ચકાસણી કરો અને વેરો ભરો.",
      s4_title: "જાહેર ફરિયાદ નિવારણ", s4_desc: "સ્વચ્છતા, રસ્તા કે લાઇટ અંગે ફરિયાદ નોંધાવો.",
      s5_title: "મ્યુનિસિપલ ટેન્ડર", s5_desc: "ગામના વિકાસના કોન્ટ્રાક્ટ પર લાઈવ અપડેટ્સ.",
      s6_title: "વ્યવસાય લાયસન્સિંગ", s6_desc: "સ્થાનિક વ્યવસાયો માટે નવા વેપાર લાયસન્સ.",
      s7_title: "લગ્ન અને રજિસ્ટ્રાર", s7_desc: "લગ્ન અને કાનૂની નિમણૂંકો માટે ઓનલાઇન નોંધણી.",
      s8_title: "આરોગ્ય અને કલ્યાણ", s8_desc: "સ્થાનિક ક્લિનિકના કલાકો અને સરકારી યોજનાઓ.",
      btn_read_more: "વધારે વાંચો", btn_details: "વિગત",
      sponsor_title: "મુખ્ય પ્રોજેક્ટ સ્પોન્સર",
      sponsor_name: "[તમારું નામ અહીં]",
      sponsor_tag: "પ્રીમિયમ ભાગીદાર"
    }
  };

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

    <Routes>

      <Route
        path="/"
        element={<Hero lang={lang} t={t} />}
      />

      <Route
        path="/tourism"
        element={<Tourism lang={lang} t={t} />}
      />

      <Route
        path="/events"
        element={<Events lang={lang} t={t} />}
      />

      <Route
        path="/transport"
        element={<Transport lang={lang} t={t} />}
      />

      <Route
        path="/helpline"
        element={<Helpline lang={lang} t={t} />}
      />

      <Route
        path="/map"
        element={<Map lang={lang} t={t} />}
      />

    </Routes>

    <Footer />

  </div>
  )
}

export default Home