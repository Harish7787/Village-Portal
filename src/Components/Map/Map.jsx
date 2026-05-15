import React from 'react'

const Map = ( 
    { lang, t }
) => {
  return (
    <div>
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
    </div>
  )
}

export default Map