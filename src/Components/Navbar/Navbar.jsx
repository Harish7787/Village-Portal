    import { Menu, X, Sun, Moon } from 'lucide-react'

function Navbar({
  lang,
  setLang,
  isDark,
  toggleTheme,
  isMenuOpen,
  setIsMenuOpen,
  t,
}) {
  return (
    <nav className="fixed w-full z-[100] bg-white/70 dark:bg-[#0f172a]/70 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 transition-all">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between h-20 items-center">

          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">

            <div className="w-11 h-11 bg-gradient-to-tr from-[#ea580c] to-orange-400 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg">
              JR
            </div>

            <div className="hidden sm:block">
              <span className="text-xl font-bold tracking-tight dark:text-white block leading-none">
                Jam Raval
              </span>

              <span className="text-[10px] uppercase tracking-widest text-[#ea580c] font-bold">
                Digital Portal
              </span>
            </div>

          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-7 text-[13px] font-semibold">

            {[
              'home',
              'tourism',
              'transport',
              'nagarpalika',
              'events',
              'helpline',
            ].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="hover:text-[#ea580c] transition-all relative group uppercase tracking-wider"
              >
                {t[`nav_${item}`]}

                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ea580c] transition-all group-hover:w-full"></span>
              </a>
            ))}

            {/* Language */}
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-transparent border-none focus:ring-0 cursor-pointer font-bold text-gray-600 dark:text-gray-400"
            >
              <option value="en">EN</option>
              <option value="gu">GU</option>
            </select>

            {/* Theme Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800"
            >
              {isDark ? (
                <Sun size={20} className="text-orange-400" />
              ) : (
                <Moon size={20} className="text-gray-600" />
              )}
            </button>

          </div>

          {/* Mobile Buttons */}
          <div className="lg:hidden flex items-center gap-4">

            <button onClick={toggleTheme}>
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } lg:hidden flex-col bg-white dark:bg-[#0f172a] p-8 space-y-6`}
      >
        {[
          'home',
          'tourism',
          'transport',
          'nagarpalika',
          'events',
          'helpline',
        ].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={() => setIsMenuOpen(false)}
            className="block text-2xl font-bold"
          >
            {t[`nav_${item}`]}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar