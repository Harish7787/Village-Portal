import React from 'react'
import { useState } from 'react'
import { ArrowRight, ChevronUp } from 'lucide-react'

const Events = (
    { lang, t }
) => {

    const [expandedDetails, setExpandedDetails] = useState({})

  return (
    <div>
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
    </div>
  )
}

export default Events