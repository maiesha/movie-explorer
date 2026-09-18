import React from 'react';

export default function MovieCard({ movie, onOpenModal }) {
  // Strip out HTML tags from TVMaze summary if needed
  const rating = movie.rating?.average ? `⭐ ${movie.rating.average}` : '⭐ N/A';
  const releaseYear = movie.premiered ? movie.premiered.split('-')[0] : 'N/A';
  const fallbackImage = 'https://placeholder.com';

  return (
    <div className="border rounded-xl overflow-hidden shadow-lg bg-white flex flex-col justify-between transition-transform hover:scale-105 duration-300">
      <img 
        src={movie.image?.medium || fallbackImage} 
        alt={movie.name} 
        className="w-full h-72 object-cover"
      />
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg mb-1 line-clamp-1">{movie.name}</h3>
          <p className="text-sm text-gray-600 mb-4">{rating} • 📅 {releaseYear}</p>
        </div>
        <button 
          onClick={() => onOpenModal(movie)}
          className="w-full bg-slate-900 text-white py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors"
        >
          See Details
        </button>
      </div>
    </div>
  );
}