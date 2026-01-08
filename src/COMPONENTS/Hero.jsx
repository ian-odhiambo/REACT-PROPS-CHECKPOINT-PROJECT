const Hero = () => {
  return (
    <section className="relative py-40 mb-4">
      {/* Image Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-cover bg-center opacity-40"
             style={{
               backgroundImage: `url('https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1790&auto=format&fit=crop')`
             }}>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          WELCOME TO THE <br />
          <span className="text-yellow-400">HOME OF CHAMPIONS</span>
        </h1>
        
        <p className="text-xl text-white mb-8">
          Football . Basketball . Tennis . Baseball . Volleyball
        </p>
        
        <button className="px-8 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition">
          Explore Players
        </button>
      </div>
    </section>
  )
}

export default Hero