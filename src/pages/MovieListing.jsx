import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import MovieModal from '../components/MovieModal';

export default function MovieListing() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch initial shows on component mount
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async (query = '') => {
    setLoading(true);
    try {
      const url = query 
        ? `https://tvmaze.com{query}`
        : 'https://api.tvmaze.com/shows';
      
      const res = await fetch(url);
      const data = await res.json();
      
      // TVMaze search endpoint wraps objects in a { score, show } object
      const formattedData = query ? data.map(item => item.show) : data;
      setMovies(formattedData);
    } catch (error) {
      console.error("Error fetching data from TVMaze:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchMovies(searchQuery);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Search Bar Container */}
      <form onSubmit={handleSearchSubmit} className="mb-8 max-w-md mx-auto">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Search
          </button>
        </div>
      </form>

      {/* Responsive Movie Grid */}
      {loading ? (
        <div className="text-center text-xl">Loading movies...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              onOpenModal={setSelectedMovie} 
            />
          ))}
        </div>
      )}

      {/* Modal Trigger */}
      {selectedMovie && (
        <MovieModal 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}
    </div>
  );
}