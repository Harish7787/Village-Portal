import React, { useState, useEffect, useRef } from 'react';
import "tailwindcss";
import { 
  Menu, X, Sun, Moon, Bus, Shield, Phone, 
  MapPin, HeartPulse, Send, Sparkles, ChevronDown, 
  ChevronUp, ArrowRight, FileText, Droplet, 
  Home, Info, Gavel, Briefcase, Heart, Users,
  Search, MessageSquare, Flame
} from 'lucide-react';

const apiKey = ""; // Gemini API Key runtime ma environmental variable mathi malse

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

const App = () => {
  const [lang, setLang] = useState('en');
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'bot', content: 'Namaste! I am the Jam Raval Digital Assistant. How can I help you today? ✨' }
  ]);
  const [expandedDetails, setExpandedDetails] = useState({});
  const chatEndRef = useRef(null);

  const t = i18n[lang];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleDetail = (id) => {
    setExpandedDetails(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const input = e.target.elements.message;
    const query = input.value.trim();
    if (!query) return;

    setChatMessages(prev => [...prev, { role: 'user', content: query }]);
    input.value = '';

    const botLoadingMsg = { role: 'bot', content: 'Thinking... ✨', loading: true };
    setChatMessages(prev => [...prev, botLoadingMsg]);

    try {
      const response = await askGemini(query);
      setChatMessages(prev => prev.slice(0, -1).concat({ role: 'bot', content: response }));
    } catch (error) {
      setChatMessages(prev => prev.slice(0, -1).concat({ role: 'bot', content: "Sorry, I am having trouble connecting. Try again later." }));
    }
  };

  const askGemini = async (query) => {
    const systemPrompt = `You are the Digital Assistant for Jam Raval Village in Gujarat. 
    Context:
    - Bus timings: Rajkot (6AM, 10AM, 4PM), Dwarka (8AM, 1PM, 5PM), Jamnagar (7AM, 12PM, 8PM).
    - Services: Birth/Death certs, Water/Property tax, Grievance redressal, Tenders, Licenses, Marriage registration, Health welfare.
    - Tourism: Ancient Shiv Temple (Stone carvings), Sunset Lake Point (Photography), Old Market (Handicrafts).
    - Helplines: Police (100), Ambulance (108), Women (181), Fire (101).
    Keep responses helpful, professional and concise. Respond in English or Gujarati as per user preference.`;
    
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
    
    const payload = {
      contents: [{ parts: [{ text: query }] }],
      systemInstruction: { parts: [{ text: systemPrompt }] }
    };

    let delay = 1000;
    for (let i = 0; i < 5; i++) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) throw new Error('API Error');
            const data = await response.json();
            return data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't find information on that.";
        } catch (e) {
            if (i === 4) throw e;
            await new Promise(r => setTimeout(r, delay));
            delay *= 2;
        }
    }
  };

  return (
    <div className={`${isDark ? 'dark' : ''} transition-colors duration-500`}>
      <div className="bg-gray-50 dark:bg-[#0f172a] text-gray-800 dark:text-gray-200 font-['Poppins'] min-h-screen relative overflow-x-hidden">
        
        {/* Animated Background Blobs / Motion Graphics */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400/20 rounded-full blur-[100px] animate-[blob_7s_infinite]"></div>
          <div className="absolute bottom-40 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] animate-[blob_7s_infinite_2s]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/10 rounded-full blur-[100px] animate-[blob_7s_infinite_4s]"></div>
        </div>

        {/* Navigation */}
        <nav className="fixed w-full z-[100] bg-white/70 dark:bg-[#0f172a]/70 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 transition-all">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              {/* Logo with Magnetic Hover effect */}
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-11 h-11 bg-gradient-to-tr from-[#ea580c] to-orange-400 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg group-hover:rotate-12 transition-transform duration-500">JR</div>
                <div className="hidden sm:block">
                  <span className="text-xl font-bold tracking-tight dark:text-white block leading-none">Jam Raval</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#ea580c] font-bold">Digital Portal</span>
                </div>
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-7 text-[13px] font-semibold">
                {['home', 'tourism', 'transport', 'nagarpalika', 'events', 'helpline'].map((item) => (
                  <a key={item} href={`#${item}`} className="hover:text-[#ea580c] transition-all relative group uppercase tracking-wider">
                    {t[`nav_${item}`]}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ea580c] transition-all group-hover:w-full"></span>
                  </a>
                ))}
                <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-1"></div>
                <select 
                  value={lang} 
                  onChange={(e) => setLang(e.target.value)}
                  className="bg-transparent border-none focus:ring-0 cursor-pointer font-bold text-gray-600 dark:text-gray-400"
                >
                  <option value="en">EN</option>
                  <option value="gu">GU</option>
                </select>
                <button onClick={toggleTheme} className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110">
                  {isDark ? <Sun size={20} className="text-orange-400" /> : <Moon size={20} className="text-gray-600" />}
                </button>
              </div>

              {/* Mobile Buttons */}
              <div className="lg:hidden flex items-center gap-4">
                <button onClick={toggleTheme} className="p-2 text-gray-600 dark:text-gray-300 hover:scale-110">
                  {isDark ? <Sun size={24} /> : <Moon size={24} />}
                </button>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 dark:text-gray-300 p-2">
                  {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile Menu with Auto-Close */}
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:hidden flex-col bg-white dark:bg-[#0f172a] border-b border-gray-200 dark:border-gray-800 absolute w-full left-0 p-8 space-y-6 shadow-2xl animate-in slide-in-from-top duration-300`}>
            {['home', 'tourism', 'transport', 'nagarpalika', 'events', 'helpline'].map((item) => (
              <a 
                key={item} 
                href={`#${item}`} 
                onClick={() => setIsMenuOpen(false)} 
                className="block text-2xl font-bold hover:text-primary transition-colors"
              >
                {t[`nav_${item}`]}
              </a>
            ))}
            <div className="pt-6 flex justify-between items-center border-t border-gray-100 dark:border-gray-800">
              <select 
                value={lang} 
                onChange={(e) => setLang(e.target.value)}
                className="bg-gray-100 dark:bg-gray-800 p-3 rounded-xl font-bold"
              >
                <option value="en">English</option>
                <option value="gu">ગુજરાતી</option>
              </select>
              <span className="text-[#ea580c] font-black uppercase text-xs tracking-widest">Smart Village</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center text-center text-white px-4">
          <div className="absolute inset-0 z-[-1] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent"></div>
            <img 
              src="https://images.unsplash.com/photo-1517672651691-24622a91b550?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover scale-105"
              alt="Village Background"
            />
          </div>
          <div className="max-w-5xl z-10 reveal active">
            <h1 className="text-6xl md:text-[8rem] font-black mb-6 tracking-tighter leading-none">{t.hero_title}</h1>
            <p className="text-xl md:text-3xl mb-12 text-orange-200 font-light max-w-3xl mx-auto leading-relaxed">{t.hero_subtitle}</p>
            <div className="flex flex-wrap gap-5 justify-center">
              <a href="#transport" className="bg-[#ea580c] hover:bg-orange-600 text-white px-10 py-5 rounded-3xl font-bold transition-all shadow-2xl shadow-orange-500/30 flex items-center gap-3 active:scale-95">
                <Bus size={20} /> {lang === 'gu' ? 'બસ ટાઇમ ચેક કરો' : 'Check Bus Timings'}
              </a>
              <a href="#nagarpalika" className="bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border border-white/30 px-10 py-5 rounded-3xl font-bold transition-all flex items-center gap-3 active:scale-95">
                <Shield size={20} /> {lang === 'gu' ? 'ગામની સેવાઓ' : 'Village Services'}
              </a>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
            <ChevronDown size={32} />
          </div>
        </section>

        {/* Tourism Section with 3D Hover Cards */}
        <section id="tourism" className="py-32 reveal px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-20 tracking-tighter uppercase">{t.tour_title}</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { name: t.tour_p1_name, desc: t.tour_p1_desc, img: "https://images.unsplash.com/photo-1540324155974-7523202daa3f?auto=format&fit=crop&w=600&q=80" },
                { name: t.tour_p2_name, desc: t.tour_p2_desc, img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80" },
                { name: t.tour_p3_name, desc: t.tour_p3_desc, img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80" }
              ].map((place, i) => (
                <div key={i} className="group rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-gray-800 shadow-xl hover:-translate-y-4 hover:shadow-orange-500/10 transition-all duration-500 cursor-default">
                  <div className="h-80 overflow-hidden relative">
                    <img src={place.img} className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000" alt={place.name} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-10 text-center">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{place.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{place.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transport Section */}
        <section id="transport" className="py-32 bg-gray-100/50 dark:bg-gray-900/30 reveal px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-black mb-4">{t.bus_title}</h2>
                <p className="text-gray-500 dark:text-gray-400">{t.bus_desc}</p>
              </div>
              <div className="p-5 bg-[#ea580c]/10 rounded-2xl border border-[#ea580c]/20 flex items-center gap-4 animate-pulse">
                <Phone className="text-[#ea580c]" />
                <span className="text-sm font-bold text-[#ea580c]">{lang === 'gu' ? 'મદદ:' : 'Support:'} 1800 233 6666</span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {['Dwarka', 'Rajkot', 'Jamnagar'].map((city, i) => (
                <div key={i} className="bg-white dark:bg-[#1e293b] p-10 rounded-[2.5rem] shadow-lg border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all group">
                  <h4 className="text-2xl font-black text-[#ea580c] mb-8 border-b dark:border-gray-700 pb-4 group-hover:scale-105 transition-transform">To {city}</h4>
                  <div className="space-y-5">
                    <div className="flex justify-between"><span>Morning</span><span className="font-black text-lg">08:30 AM</span></div>
                    <div className="flex justify-between"><span>Noon</span><span className="font-black text-lg">01:45 PM</span></div>
                    <div className="flex justify-between text-[#ea580c]"><span>Evening</span><span className="font-black text-lg">05:15 PM</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nagarpalika Services Expanded */}
        <section id="nagarpalika" className="py-32 reveal px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-20 tracking-tighter uppercase">{t.services_title}</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
              {[
                { title: t.s1_title, desc: t.s1_desc, icon: <FileText /> },
                { title: t.s2_title, desc: t.s2_desc, icon: <Droplet /> },
                { title: t.s3_title, desc: t.s3_desc, icon: <MapPin /> },
                { title: t.s4_title, desc: t.s4_desc, icon: <MessageSquare /> },
                { title: t.s5_title, desc: t.s5_desc, icon: <Gavel /> },
                { title: t.s6_title, desc: t.s6_desc, icon: <Briefcase /> },
                { title: t.s7_title, desc: t.s7_desc, icon: <Users /> },
                { title: t.s8_title, desc: t.s8_desc, icon: <HeartPulse /> }
              ].map((service, i) => (
                <div key={i} className="p-10 bg-white dark:bg-[#1e293b] rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-800 hover:-translate-y-2 hover:border-primary/50 transition-all cursor-pointer group">
                  <div className="text-[#ea580c] mb-6 group-hover:scale-125 transition-transform duration-500">{service.icon}</div>
                  <h4 className="font-bold text-xl mb-3 tracking-tight group-hover:text-primary transition-colors">{service.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">{service.desc}</p>
                  <button className="bg-[#ea580c] text-white text-[10px] px-8 py-3 rounded-full font-black uppercase tracking-widest shadow-lg shadow-orange-500/20 active:scale-95 transition-all">Apply</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events & News */}
        <section id="events" className="py-32 bg-gray-100/50 dark:bg-gray-900/30 reveal px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tighter uppercase">{t.events_title}</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              {[
                { id: 'ev1', title: t.event1_title, summary: t.event1_summary, full: t.event1_full, date: "Oct 12 - Oct 21", img: "https://images.unsplash.com/photo-1533470192478-9997bf23d754?auto=format&fit=crop&w=800&q=80" },
                { id: 'ev2', title: t.event2_title, summary: t.event2_summary, full: t.event2_full, date: "Nov 05, 2024", img: "https://images.unsplash.com/photo-1517672651691-24622a91b550?auto=format&fit=crop&w=800&q=80" }
              ].map((ev) => (
                <div key={ev.id} className="flex flex-col md:flex-row bg-white dark:bg-[#1e293b] rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
                  <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
                    <img src={ev.img} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={ev.title} />
                  </div>
                  <div className="p-12 md:w-2/3">
                    <span className="text-xs font-black uppercase text-[#ea580c] tracking-[0.2em] block mb-3">{ev.date}</span>
                    <h3 className="text-2xl font-bold mb-4">{ev.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 leading-relaxed">{ev.summary}</p>
                    <button 
                      onClick={() => toggleDetail(ev.id)}
                      className="text-[#ea580c] font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all"
                    >
                      {expandedDetails[ev.id] ? "Show Less" : t.btn_read_more} {expandedDetails[ev.id] ? <ChevronUp size={14}/> : <ArrowRight size={14}/>}
                    </button>
                    {expandedDetails[ev.id] && (
                      <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400 italic animate-in fade-in slide-in-from-top-2 duration-500">
                        {ev.full}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Helpline */}
        <section id="helpline" className="py-32 reveal px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-16 tracking-tighter uppercase">Emergency Help</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { name: "Police", num: "100", color: "blue", icon: <Shield size={40}/> },
                { name: "Ambulance", num: "108", color: "red", icon: <HeartPulse size={40}/> },
                { name: "Women Help", num: "181", color: "pink", icon: <Heart size={40}/> },
                { name: "Fire Station", num: "101", color: "orange", icon: <Flame size={40}/> }
              ].map((h, i) => (
                <a key={i} href={`tel:${h.num}`} className="p-10 bg-white dark:bg-[#1e293b] rounded-[3rem] shadow-lg hover:bg-primary/5 hover:-translate-y-4 transition-all duration-500 group border border-transparent hover:border-primary/20">
                  <div className={`mb-6 group-hover:scale-125 transition-transform duration-500 text-${h.color}-500 flex justify-center`}>{h.icon}</div>
                  <h5 className="font-bold text-sm mb-2 uppercase tracking-widest">{h.name}</h5>
                  <p className="text-primary font-black text-3xl tracking-tighter">{h.num}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section id="map" className="py-32 bg-gray-100/50 dark:bg-gray-900/30 reveal px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-16 tracking-tighter uppercase">{t.map_title}</h2>
            <div className="shadow-2xl overflow-hidden rounded-[4rem] border-[12px] border-white dark:border-[#1e293b] h-[500px] hover:rotate-1 transition-transform duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14742.618608827725!2d69.2843!3d22.1818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3956637e6f6f97f7%3A0x6b1f2e1a3d9f97f7!2sJam%20Raval%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000" 
                className="w-full h-full grayscale-[0.2] dark:invert-[0.9] dark:hue-rotate-[180deg]"
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Sponsor Section (At Bottom) */}
        <section className="py-40 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white relative overflow-hidden reveal">
          <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
            <span className="text-[#ea580c] font-black uppercase tracking-[0.6em] text-[10px] mb-8 block">{t.sponsor_tag}</span>
            <h2 className="text-5xl md:text-[5rem] font-black mt-4 mb-24 tracking-tighter leading-none">{t.sponsor_title}</h2>
            <div className="bg-white/5 backdrop-blur-3xl p-12 md:p-24 rounded-[4rem] border border-white/10 shadow-3xl text-left group hover:bg-white/10 transition-all duration-700">
              <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="w-56 h-56 bg-gradient-to-tr from-[#ea580c] to-orange-400 rounded-4xl flex items-center justify-center text-white text-7xl shadow-2xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-1000">
                  <Sparkles size={80}/>
                </div>
                <div className="flex-1 space-y-8">
                  <h3 className="text-5xl font-black mb-4 text-white uppercase tracking-tight leading-none">{t.sponsor_name}</h3>
                  <p className="text-gray-400 text-2xl font-light leading-relaxed">Dedicated Supporter of Jam Raval's transformation into a Model Smart Village.</p>
                  <div className="grid sm:grid-cols-2 gap-6 pt-4">
                    <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-4 p-8 bg-white/5 rounded-3xl border border-white/5 hover:bg-primary transition-all duration-300">
                      <Phone size={24} className="text-primary"/> <span className="font-bold text-xl tracking-tighter">+91 XXXXX XXXXX</span>
                    </a>
                    <div className="flex items-center gap-4 p-8 bg-white/5 rounded-3xl border border-white/5">
                      <MapPin size={24} className="text-primary"/> <span className="font-bold text-xl tracking-tight">Jam Raval, Gujarat</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#ea580c]/10 rounded-full blur-[160px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none"></div>
        </section>

        {/* Footer */}
        <footer className="bg-white dark:bg-[#0f172a] pt-32 pb-16 border-t border-gray-100 dark:border-gray-800 reveal text-center px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-10">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold">JR</div>
                <span className="text-4xl font-black text-primary tracking-tighter">Jam Raval</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-16 max-w-md mx-auto leading-relaxed">{t.footer_about}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left text-sm font-semibold mb-20 max-w-4xl mx-auto">
                <div className="space-y-4">
                    <p className="text-gray-900 dark:text-white uppercase tracking-widest text-xs font-black">Portal</p>
                    <a href="#tourism" className="block text-gray-500 hover:text-primary transition-colors">Tourism</a>
                    <a href="#transport" className="block text-gray-500 hover:text-primary transition-colors">ST Bus</a>
                </div>
                <div className="space-y-4">
                    <p className="text-gray-900 dark:text-white uppercase tracking-widest text-xs font-black">Admin</p>
                    <a href="#nagarpalika" className="block text-gray-500 hover:text-primary transition-colors">Municipal</a>
                    <a href="#nagarpalika" className="block text-gray-500 hover:text-primary transition-colors">E-Gov</a>
                </div>
                <div className="space-y-4">
                    <p className="text-gray-900 dark:text-white uppercase tracking-widest text-xs font-black">Connect</p>
                    <a href="#helpline" className="block text-gray-500 hover:text-primary transition-colors">Emergency</a>
                    <a href="#events" className="block text-gray-500 hover:text-primary transition-colors">Updates</a>
                </div>
                <div className="space-y-4">
                    <p className="text-gray-900 dark:text-white uppercase tracking-widest text-xs font-black">Support</p>
                    <a href="#sponsors" className="block text-gray-500 hover:text-primary transition-colors">Sponsorship</a>
                    <a href="#home" className="block text-gray-500 hover:text-primary transition-colors">Vision</a>
                </div>
            </div>
            <div className="pt-12 border-t border-gray-100 dark:border-gray-800 text-[10px] text-gray-400 font-black uppercase tracking-[0.5em]">
              &copy; 2024 Jam Raval Village Project &bull; Created with Pride &bull; Digital India
            </div>
          </div>
        </footer>

        {/* AI Chat Bot Interface */}
        <div className="chat-container">
          {isChatOpen && (
            <div className="chat-window flex animate-in zoom-in-50 duration-300">
              <div className="chat-header">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#ea580c] shadow-md">
                    <Sparkles size={16}/>
                  </div>
                  <div>
                    <p className="font-bold text-sm">Village AI Assistant</p>
                    <p className="text-[10px] opacity-80 uppercase tracking-widest">Digital Guide</p>
                  </div>
                </div>
                <button onClick={() => setIsChatOpen(false)} className="hover:rotate-90 transition-transform"><X size={18}/></button>
              </div>
              <div className="chat-messages bg-gray-50 dark:bg-[#0f172a]">
                {chatMessages.map((m, i) => (
                  <div key={i} className={`message shadow-sm ${m.role === 'user' ? 'user-message' : 'bot-message'}`}>
                    {m.content}
                  </div>
                ))}
                <div ref={chatEndRef}></div>
              </div>
              <form onSubmit={handleSendMessage} className="chat-input-area bg-white dark:bg-[#1e293b]">
                <input 
                  name="message" 
                  autoComplete="off"
                  placeholder={lang === 'gu' ? 'કંઈ પણ પૂછો...' : 'Ask anything...'}
                  className="flex-1 bg-gray-50 dark:bg-[#0f172a] border-none rounded-xl px-4 py-2 outline-none text-sm focus:ring-1 focus:ring-[#ea580c] dark:text-white"
                />
                <button type="submit" className="w-10 h-10 bg-[#ea580c] text-white rounded-xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all shadow-lg shadow-orange-500/20">
                  <Send size={18}/>
                </button>
              </form>
            </div>
          )}
          <button 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="w-16 h-16 bg-[#ea580c] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all group relative z-50 border-4 border-white dark:border-[#1e293b]"
          >
            {isChatOpen ? <X size={24}/> : <Sparkles size={28} className="group-hover:rotate-12 transition-all"/>}
            {!isChatOpen && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-[10px] px-2 py-1 rounded-full font-bold shadow-lg animate-pulse">AI</span>
            )}
          </button>
        </div>

      </div>
      
      {/* Global CSS for Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        .reveal { opacity: 0; transform: translateY(50px); transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1); }
        .reveal.active { opacity: 1; transform: translateY(0); }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -20px); }
        }
      `}} />
    </div>
  );
};

export default OldCode;