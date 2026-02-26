import Countdown from './components/Countdown'
import HoneyDrip from './components/HoneyDrip'
import FloatingElements from './components/FloatingElements'

function App() {
  return (
    <div className="min-h-screen p-4 md:p-8 relative z-10">
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
                <span className="text-xl animate-wiggle delay-300">🐝</span>
              </div>
              <p className="text-honey-gold font-bold tracking-[0.2em] uppercase text-xs mb-3">
                ¡Un pequeño osito está en camino!
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

            {/* Gender Reveal Section */}
            <section className="relative bg-gradient-to-b from-amber-50 to-yellow-50 rounded-2xl p-6 mb-8 border-2 border-dashed border-honey-gold/40 text-center animate-fade-in-up delay-200">
              {/* Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-honey-gold to-honey-light text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase shadow-md">
                  Revelación de Género
                </span>
              </div>

              {/* Gender question */}
              <div className="mt-4 mb-5">
                <p className="font-display text-2xl text-warm-brown mb-2">
                  ¿Será una abejita o un osito?
                </p>
                <div className="flex justify-center items-center gap-4 my-4">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-soft-pink/50 flex items-center justify-center mx-auto mb-1 animate-pulse-soft">
                      <span className="text-3xl">🐝</span>
                    </div>
                    <p className="text-xs font-semibold text-pink-400">Niña</p>
                  </div>
                  <span className="font-display text-2xl text-honey-gold animate-pulse-soft">?</span>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-soft-blue/50 flex items-center justify-center mx-auto mb-1 animate-pulse-soft delay-300">
                      <span className="text-3xl">🐻</span>
                    </div>
                    <p className="text-xs font-semibold text-blue-400">Niño</p>
                  </div>
                </div>
              </div>

              {/* Countdown */}
              <div className="mb-5">
                <p className="text-xs uppercase font-semibold text-warm-gray tracking-wider mb-3">
                  Faltan...
                </p>
                <Countdown />
              </div>

              {/* Date/Time */}
              <div className="bg-white/70 rounded-xl p-3 mb-5 border border-honey-gold/20">
                <p className="font-bold text-warm-brown text-lg">
                  30 de Marzo · 5:30 PM
                </p>
                <p className="text-sm text-warm-gray italic flex items-center justify-center gap-1">
                  <span>📹</span> Transmisión en línea
                </p>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => window.open('https://wa.me/4172366278?text=¡Hola!%20Quiero%20el%20link%20para%20la%20revelación%20del%20bebé', '_blank')}
                className="
                  w-full py-3.5 rounded-xl font-bold text-white shadow-lg
                  bg-gradient-to-r from-pooh-red to-red-500
                  hover:from-red-600 hover:to-red-700
                  transform hover:scale-[1.02] active:scale-[0.98]
                  transition-all duration-200 cursor-pointer
                  flex items-center justify-center gap-2
                "
              >
                <span>📹</span>
                <span>Solicitar Link de Transmisión</span>
              </button>
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
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Aline+Michelle+Lozano+Murillo+Casa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-1.5 mt-3 text-honey-gold
                    font-bold hover:text-warm-brown transition-colors
                    border-b-2 border-honey-gold/30 hover:border-honey-gold pb-0.5
                  "
                >
                  <span>🗺️</span>
                  <span>Ver ubicación en mapa</span>
                </a>
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

            {/* Gifts Section */}
            <section className="mt-6 mb-6 text-center animate-fade-in-up delay-500">
              <h2 className="font-display text-xl text-warm-brown mb-5">
                🎁 Sugerencia de Regalos
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-5 rounded-2xl border border-honey-gold/20 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-2">✉️</div>
                  <p className="text-sm font-bold text-warm-brown">Lluvia de Sobres</p>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-5 rounded-2xl border border-honey-gold/20 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-2">🍼</div>
                  <p className="text-sm font-bold text-warm-brown">Pañales</p>
                  <p className="text-[10px] text-warm-gray">(Etapa 2 y 3)</p>
                </div>
              </div>
            </section>

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
                <span className="animate-float delay-300">🐝</span>
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
  )
}

export default App
