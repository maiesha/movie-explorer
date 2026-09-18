import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MovieListing from './pages/MovieListing';
import MovieModal from './components/MovieModal';

export default function App() {
  const [page, setPage] = useState('home'); 
  const [selectedMovie, setSelectedMovie] = useState(null); 

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      
      <Navbar setPage={setPage} />

      
      <main className="flex-grow">
        {page === 'home' ? (
          <Home setPage={setPage} />
        ) : (
          <MovieListing onSeeDetails={(movie) => setSelectedMovie(movie)} />
        )}
      </main>

      
      {selectedMovie && (
        <MovieModal 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}

      {/* ফুটার */}
      <Footer />
    </div>
  );
}