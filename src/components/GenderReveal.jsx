import { useState, useEffect, useCallback } from 'react'

function Confetti({ count = 80 }) {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const colors = ['#FF69B4', '#FFB6C1', '#FF1493', '#FFC0CB', '#DB7093', '#FFD700', '#FF85A2', '#F8C8DC', '#E75480', '#FFDDF4']
    const shapes = ['circle', 'square', 'heart']
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10 - Math.random() * 20,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 6 + Math.random() * 10,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      delay: Math.random() * 1.5,
      duration: 2.5 + Math.random() * 2,
      drift: -30 + Math.random() * 60,
      rotation: Math.random() * 720,
    }))
    setParticles(newParticles)
  }, [count])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            '--drift': `${p.drift}px`,
            '--rotation': `${p.rotation}deg`,
          }}
        >
          {p.shape === 'heart' ? (
            <span style={{ fontSize: `${p.size}px`, color: p.color }}>&#10084;</span>
          ) : (
            <div
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                backgroundColor: p.color,
                borderRadius: p.shape === 'circle' ? '50%' : '2px',
              }}
            />
          )}
        </div>
      ))}
    </div>
  )
}

function FloatingHearts() {
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: 10 + Math.random() * 80,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 4,
    size: 12 + Math.random() * 20,
    opacity: 0.3 + Math.random() * 0.5,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute animate-heart-float"
          style={{
            left: `${h.x}%`,
            bottom: '-5%',
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            fontSize: `${h.size}px`,
            opacity: h.opacity,
          }}
        >
          <span style={{ color: '#FF69B4' }}>&#10084;</span>
        </div>
      ))}
    </div>
  )
}

const PHASES = {
  COUNTDOWN: 'countdown',
  BURST: 'burst',
  REVEAL: 'reveal',
  DONE: 'done',
}

function GenderReveal({ onComplete }) {
  const [phase, setPhase] = useState(PHASES.COUNTDOWN)
  const [count, setCount] = useState(5)
  const [showSubtext, setShowSubtext] = useState(false)

  useEffect(() => {
    if (phase !== PHASES.COUNTDOWN) return

    if (count <= 0) {
      setPhase(PHASES.BURST)
      return
    }

    const timer = setTimeout(() => setCount((c) => c - 1), 1000)
    return () => clearTimeout(timer)
  }, [count, phase])

  useEffect(() => {
    if (phase === PHASES.BURST) {
      const timer = setTimeout(() => setPhase(PHASES.REVEAL), 800)
      return () => clearTimeout(timer)
    }
    if (phase === PHASES.REVEAL) {
      const subtextTimer = setTimeout(() => setShowSubtext(true), 1200)
      const doneTimer = setTimeout(() => setPhase(PHASES.DONE), 5500)
      return () => {
        clearTimeout(subtextTimer)
        clearTimeout(doneTimer)
      }
    }
    if (phase === PHASES.DONE) {
      const timer = setTimeout(() => onComplete(), 600)
      return () => clearTimeout(timer)
    }
  }, [phase, onComplete])

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-700 ${
        phase === PHASES.DONE ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        background:
          phase === PHASES.COUNTDOWN
            ? 'linear-gradient(135deg, #FFFDF5 0%, #FFF8E7 50%, #FFFDF5 100%)'
            : 'linear-gradient(135deg, #FFF0F5 0%, #FFE4F0 30%, #FFDDF4 60%, #FFF0F5 100%)',
        transition: 'background 1.5s ease',
      }}
    >
      {/* Confetti */}
      {(phase === PHASES.BURST || phase === PHASES.REVEAL) && <Confetti count={100} />}
      {phase === PHASES.REVEAL && <FloatingHearts />}

      {/* Countdown Phase */}
      {phase === PHASES.COUNTDOWN && (
        <div className="text-center">
          <p className="font-display text-honey-gold text-lg md:text-xl mb-2 animate-pulse-soft tracking-[0.3em] uppercase">
            La espera termina...
          </p>

          <div className="relative">
            <div
              key={count}
              className="animate-count-pop"
            >
              {count > 0 ? (
                <span className="font-display text-[120px] md:text-[160px] text-pooh-red leading-none block"
                  style={{ textShadow: '0 4px 30px rgba(192, 57, 43, 0.3)' }}
                >
                  {count}
                </span>
              ) : (
                <span className="text-[80px] md:text-[100px] block">
                  &#10084;&#65039;
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            {['🐻', '🍯', '🎀', '🐝', '🎈'].map((emoji, i) => (
              <span
                key={i}
                className="text-2xl animate-wiggle"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Burst Phase */}
      {phase === PHASES.BURST && (
        <div className="animate-scale-burst">
          <span className="text-[100px] md:text-[140px] block">&#10084;&#65039;</span>
        </div>
      )}

      {/* Reveal Phase */}
      {phase === PHASES.REVEAL && (
        <div className="text-center px-6 z-[60] relative">
          <div className="animate-reveal-entrance">
            <span className="text-6xl md:text-7xl block mb-4 animate-float">
              🎀
            </span>
            <h1
              className="font-display text-5xl md:text-7xl mb-3 leading-tight animate-reveal-text"
              style={{
                background: 'linear-gradient(135deg, #FF69B4, #FF1493, #DB7093)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: 'none',
                filter: 'drop-shadow(0 2px 10px rgba(255, 105, 180, 0.3))',
              }}
            >
              &#161;Es una ni&#241;a!
            </h1>
            <div className="flex justify-center gap-2 mb-4">
              {['🌸', '🎀', '💖', '🎀', '🌸'].map((e, i) => (
                <span key={i} className="text-2xl animate-pop-in" style={{ animationDelay: `${0.8 + i * 0.1}s` }}>
                  {e}
                </span>
              ))}
            </div>
          </div>

          {showSubtext && (
            <div className="animate-fade-in-up">
              <p className="font-display text-2xl md:text-3xl text-warm-brown mb-2">
                Una peque&#241;a abejita
              </p>
              <p className="text-warm-gray text-lg">
                viene en camino &#10084;&#65039;
              </p>
            </div>
          )}
        </div>
      )}

      {/* Sparkle dots on countdown */}
      {phase === PHASES.COUNTDOWN && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full animate-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: ['#FFD700', '#F5A623', '#FFB347', '#FF69B4'][i % 4],
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default GenderReveal
