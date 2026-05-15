import React from 'react'
import {
  Shield,
  HeartPulse,
  Heart,
  Flame
} from 'lucide-react'
const Helpline = ({ lang, t }) => {
  return (
    <div>
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
    </div>
  )
}

export default Helpline