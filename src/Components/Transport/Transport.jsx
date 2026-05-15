import React from 'react'
import { Phone } from 'lucide-react'

const Transport = ({ lang, t })  => {
  return (
    <div>
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
    </div>
  )
}

export default Transport