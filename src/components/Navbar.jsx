export default function Navbar({ setPage }) {
  return (
    <nav className="bg-slate-900 text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold cursor-pointer" 
      onClick={() => setPage('home')}>🎬 MovieExplorer</h1>
      <div className="space-x-4">
        <button onClick={() => setPage('home')}
             className="hover:text-blue-400">Home</button>
        <button onClick={() => setPage('movies')} className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Explore Now</button>
      </div>
    </nav>
  );
}