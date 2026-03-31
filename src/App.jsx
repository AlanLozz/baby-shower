import { useState, useCallback } from 'react'
import HoneyDrip from './components/HoneyDrip'
import FloatingElements from './components/FloatingElements'
import GenderReveal from './components/GenderReveal'

function App() {
  const [revealDone, setRevealDone] = useState(false)

  const handleRevealComplete = useCallback(() => {
    setRevealDone(true)
  }, [])

  return (
    <>
      {/* Gender Reveal Overlay */}
      {!revealDone && <GenderReveal onComplete={handleRevealComplete} />}

      <div
        className={`min-h-screen p-4 md:p-8 relative z-10 transition-opacity duration-1000 ${
          revealDone ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-md mx-auto relative">

          {/* Main Card */}
          <div className="bg-white border-[6px] border-pooh-yellow rounded-[2rem] shadow-xl relative overflow-visible">
            <FloatingElements />

            <div className="p-6 md:p-8 overflow-hidden">

              {/* Header */}
              <header className="text-center mb-8 pt-4 animate-fade-in-up">
                <div className="flex justify-center gap-2 mb-3">
                  <span className="text-xl animate-wiggle">🐻</span>
                  <span className="text-xl animate-wiggle delay-200">🍯</span>
                  <span className="text-xl animate-wiggle delay-300">🎀</span>
                </div>
                <p className="text-honey-gold font-bold tracking-[0.2em] uppercase text-xs mb-3">
                  ¡Una pequeña abejita está en camino!
                </p>
                <h1 className="font-display text-4xl md:text-5xl text-pooh-red mb-4 leading-tight">
                  Baby Shower
                </h1>
                <div className="space-y-1">
                  <p className="text-lg md:text-xl font-bold text-warm-gray">
                    Aline Michelle Lozano Murillo
                  </p>
                  <p className="text-honey-gold font-display text-lg">&</p>
                  <p className="text-lg md:text-xl font-bold text-warm-gray">
                    Joshua Adir Morales Velazquez
                  </p>
                </div>
              </header>

              {/* Gender Revealed Section */}
              <section className="relative bg-gradient-to-b from-pink-50 to-rose-50 rounded-2xl p-6 mb-8 border-2 border-dashed border-pink-300/50 text-center animate-fade-in-up delay-200">
                {/* Badge */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase shadow-md whitespace-nowrap">
                    ¡Es una Niña! 🎀
                  </span>
                </div>

                {/* Celebration */}
                <div className="mt-5 mb-5">
                  <div className="flex justify-center mb-3">
                    <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center animate-pulse-soft shadow-lg shadow-pink-200/50">
                      <span className="text-4xl">🎀</span>
                    </div>
                  </div>
                  <p className="font-display text-3xl mb-2" style={{
                    background: 'linear-gradient(135deg, #FF69B4, #FF1493)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    ¡Una pequeña abejita!
                  </p>
                  <p className="text-warm-gray text-sm">
                    Estamos felices de compartir esta noticia con ustedes
                  </p>
                  <div className="flex justify-center gap-2 mt-3">
                    {['🌸', '🐝', '💖', '🐝', '🌸'].map((e, i) => (
                      <span key={i} className="text-lg animate-wiggle" style={{ animationDelay: `${i * 0.2}s` }}>
                        {e}
                      </span>
                    ))}
                  </div>
                </div>

              </section>

              {/* Honey Drip Divider */}
              <HoneyDrip />

              {/* Baby Shower Party Section */}
              <section className="text-center mb-8 mt-6 animate-fade-in-up delay-300">
                {/* Badge */}
                <div className="mb-5">
                  <span className="bg-gradient-to-r from-pooh-red to-red-500 text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase shadow-md inline-block">
                    Fiesta Presencial
                  </span>
                </div>

                <h2 className="font-display text-3xl text-pooh-red mb-6">
                  ¡Los esperamos! 🎉
                </h2>

                {/* Date & Time Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-4 rounded-2xl border border-honey-gold/20 shadow-sm">
                    <p className="text-[10px] text-honey-gold font-bold uppercase tracking-wider mb-1">
                      📅 Fecha
                    </p>
                    <p className="font-bold text-warm-brown text-lg">11 de Abril</p>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-4 rounded-2xl border border-honey-gold/20 shadow-sm">
                    <p className="text-[10px] text-honey-gold font-bold uppercase tracking-wider mb-1">
                      🕐 Hora
                    </p>
                    <p className="font-bold text-warm-brown text-lg">4:30 PM</p>
                  </div>
                </div>

                {/* Location */}
                <div className="mb-6 bg-white rounded-2xl p-5 border border-honey-gold/15 shadow-sm">
                  <p className="text-[10px] text-honey-gold font-bold uppercase tracking-wider mb-2">
                    📍 Lugar
                  </p>
                  <p className="font-bold text-xl text-warm-brown">Nuestra Casa</p>
                  <p className="text-sm text-warm-gray mt-1">
                    ¡Los esperamos con mucha alegría!
                  </p>
                  <button
                    onClick={() => window.open('https://wa.me/4172366278?text=¡Hola!%20¿Me%20pueden%20compartir%20la%20ubicación%20de%20la%20casa%20para%20el%20Baby%20Shower%3F', '_blank')}
                    className="
                      inline-flex items-center gap-1.5 mt-3 text-honey-gold
                      font-bold hover:text-warm-brown transition-colors
                      border-b-2 border-honey-gold/30 hover:border-honey-gold pb-0.5
                      cursor-pointer bg-transparent border-t-0 border-x-0
                    "
                  >
                    <span>📍</span>
                    <span>Pedir ubicación por WhatsApp</span>
                  </button>
                </div>

                {/* RSVP */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border border-honey-gold/20 shadow-sm">
                  <p className="text-[10px] text-honey-gold font-bold uppercase tracking-wider mb-2">
                    Confirmar Asistencia
                  </p>
                  <p className="font-bold text-2xl text-warm-brown mb-1 tracking-wide">
                    417 236 6278
                  </p>
                  <p className="text-xs text-pooh-red font-semibold mb-4">
                    * Favor de confirmar antes del 30 de marzo
                  </p>
                  <button
                    onClick={() => window.open('https://wa.me/4172366278?text=¡Hola!%20Confirmo%20mi%20asistencia%20al%20Baby%20Shower', '_blank')}
                    className="
                      w-full py-3.5 rounded-xl font-bold text-white shadow-lg
                      bg-gradient-to-r from-green-500 to-green-600
                      hover:from-green-600 hover:to-green-700
                      transform hover:scale-[1.02] active:scale-[0.98]
                      transition-all duration-200 cursor-pointer
                      flex items-center justify-center gap-2
                    "
                  >
                    <span>💬</span>
                    <span>Confirmar por WhatsApp</span>
                  </button>
                </div>
              </section>

              {/* Honey Drip Divider */}
              <HoneyDrip />

              {/* Footer */}
              <footer className="text-center mt-8 mb-2 space-y-4 animate-fade-in-up delay-700">
                <div className="bg-gradient-to-r from-transparent via-honey-gold/20 to-transparent h-px mb-6" />
                <p className="italic text-warm-gray text-sm leading-relaxed px-4">
                  "Cualquier día que paso contigo es mi día favorito.
                  <br />
                  Así que hoy es mi nuevo día favorito."
                </p>
                <p className="font-display text-honey-gold text-lg">
                  — Winnie the Pooh
                </p>
                <div className="flex justify-center gap-3 text-xl pt-2">
                  <span className="animate-float">🎈</span>
                  <span className="animate-float delay-200">🍯</span>
                  <span className="animate-float delay-300">🎀</span>
                  <span className="animate-float delay-500">🐻</span>
                </div>
              </footer>

            </div>
          </div>

          {/* Bottom text */}
          <p className="text-center text-[10px] text-warm-gray/50 mt-4">
            Con todo nuestro cariño, Aline & Joshua
          </p>

        </div>
      </div>
    </>
  )
}

export default App
