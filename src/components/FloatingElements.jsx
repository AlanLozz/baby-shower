function FloatingElements() {
  return (
    <>
      {/* Honey pot top-right */}
      <div className="absolute -top-5 -right-5 w-20 h-20 animate-float z-10 pointer-events-none">
        <span className="text-4xl">🍯</span>
      </div>

      {/* Bee top-left */}
      <div className="absolute top-8 -left-3 animate-bee z-10 pointer-events-none">
        <span className="text-2xl">🐝</span>
      </div>

      {/* Small balloon bottom-left */}
      <div className="absolute -bottom-4 -left-4 animate-float-slow delay-300 z-10 pointer-events-none">
        <span className="text-3xl">🎈</span>
      </div>

      {/* Small bee bottom-right */}
      <div className="absolute bottom-20 -right-3 animate-bee delay-700 z-10 pointer-events-none">
        <span className="text-lg">🐝</span>
      </div>
    </>
  )
}

export default FloatingElements
