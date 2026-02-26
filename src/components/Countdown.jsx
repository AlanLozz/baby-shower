import { useState, useEffect } from 'react'

const REVEAL_DATE = new Date('2026-03-30T17:30:00').getTime()

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())
  const [ended, setEnded] = useState(false)

  function getTimeLeft() {
    const now = Date.now()
    const distance = REVEAL_DATE - now

    if (distance <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = getTimeLeft()
      setTimeLeft(remaining)

      if (remaining.days === 0 && remaining.hours === 0 && remaining.minutes === 0 && remaining.seconds === 0) {
        setEnded(true)
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (ended) {
    return (
      <div className="text-center py-4 animate-pulse-soft">
        <p className="text-3xl mb-2">🎉</p>
        <p className="font-display text-2xl text-pooh-red font-bold">
          ¡Llegó el momento!
        </p>
        <p className="text-sm text-warm-brown mt-1">La espera terminó...</p>
      </div>
    )
  }

  const items = [
    { value: timeLeft.days, label: 'Días', emoji: '🍯' },
    { value: timeLeft.hours, label: 'Horas', emoji: '🐻' },
    { value: timeLeft.minutes, label: 'Min', emoji: '🐝' },
    { value: timeLeft.seconds, label: 'Seg', emoji: '🎈' },
  ]

  return (
    <div className="flex justify-center gap-3">
      {items.map((item, i) => (
        <div
          key={item.label}
          className={`
            relative bg-white border-2 border-honey-gold/40 rounded-2xl
            min-w-[68px] py-3 px-2 text-center shadow-sm
            hover:shadow-md hover:border-honey-gold transition-all duration-300
            animate-fade-in-up delay-${(i + 1) * 100}
          `}
        >
          <span className="block text-xs mb-1">{item.emoji}</span>
          <span className="block text-2xl font-bold text-honey-gold font-display leading-none">
            {String(item.value).padStart(2, '0')}
          </span>
          <span className="block text-[10px] uppercase font-semibold text-warm-gray mt-1 tracking-wider">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}

export default Countdown
