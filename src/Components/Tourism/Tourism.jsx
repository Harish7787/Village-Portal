import React from 'react'

const Tourism = ({ lang, t }) => {
  return (
    <>
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
    </>
  )
}

export default Tourism