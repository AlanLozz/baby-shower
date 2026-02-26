function HoneyDrip() {
  return (
    <div className="w-full overflow-hidden my-2 honey-drip">
      <svg viewBox="0 0 400 30" className="w-full" preserveAspectRatio="none">
        <path
          d="M0,0 L400,0 L400,8 Q350,8 340,8 Q330,8 328,15 Q326,22 328,15 Q330,8 320,8
             Q280,8 260,8 Q250,8 248,12 Q246,16 248,12 Q250,8 240,8
             Q180,8 160,8 Q150,8 147,18 Q144,28 147,18 Q150,8 140,8
             Q100,8 80,8 Q70,8 68,13 Q66,18 68,13 Q70,8 60,8
             Q20,8 0,8 Z"
          fill="#F5A623"
          opacity="0.6"
        />
        <rect x="0" y="0" width="400" height="8" fill="#F5A623" opacity="0.6" rx="0" />
      </svg>
    </div>
  )
}

export default HoneyDrip
