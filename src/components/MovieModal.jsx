import React from 'react';

export default function MovieModal({ movie, onClose }) {
  const fallbackImage = 'https://placeholder.com';
  
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 animate-fade-in"
      onClick={onClose} // Closes modal when clicking on the backdrop area
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside content
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg transition-colors"
        >
          ✕
        </button>
        
        <img 
          src={movie.image?.original || movie.image?.medium || fallbackImage} 
          alt={movie.name} 
          className="w-full h-64 object-cover object-top"
        />

        <div className="p-6">
          <h2 className="text-3xl font-bold mb-2">{movie.name}</h2>
          
          <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-700 font-semibold">
            <span>⭐ Rating: {movie.rating?.average || 'N/A'}</span>
            <span>|</span>
            <span>📅 Premiered: {movie.premiered || 'N/A'}</span>
            <span>|</span>
            <span>🏷️ Language: {movie.language}</span>
          </div>

          <div className="mb-4">
            <span className="text-xs uppercase font-bold bg-gray-100 px-3 py-1 rounded-full text-gray-600">
              Genres: {movie.genres?.join(', ') || 'N/A'}
            </span>
          </div>

          <h4 className="font-bold text-lg mb-2">Overview / Summary</h4>
          {/* dangerouslySetInnerHTML cleans up the HTML strings sent back by TVMaze API */}
          <div 
            className="text-gray-600 leading-relaxed text-sm mb-6"
            dangerouslySetInnerHTML={{ __html: movie.summary || '<p>No description available.</p>' }}
          />

          <button 
            onClick={onClose}
            className="w-full bg-red-600 text-white font-semibold py-2.5 rounded-lg hover:bg-red-700 transition-colors"
          >
            ❌ Close Window
          </button>
        </div>
      </div>
    </div>
  );
}