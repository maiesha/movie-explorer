
export default function Hero({ setPage }) {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-indigo-905 text-white py-20 px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">DISCOVER MOVIES</h1>
      <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">
        Explore and discover your favorite movies and TV shows from around the world.
      </p>
      <button onClick={() => setPage('movies')} className="bg-blue-600 text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition">
        Explore Now
      </button>
    </div>
  );
}