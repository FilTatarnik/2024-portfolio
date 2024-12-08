import React from 'react';

const PokemonDetailModal = ({ pokemon, isOpen, onClose }) => {
  if (!isOpen || !pokemon) return null;

  // Format stat name to be more readable
  const formatStatName = (name) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Generate TCG Player search URL
  const tcgPlayerUrl = `https://www.tcgplayer.com/search/pokemon/product?productLineName=pokemon&q=${pokemon.name}&view=grid&setName=fossil|jungle|base-set`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[60]">
      <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-white capitalize">{pokemon.name}</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        <div className="flex items-center justify-center mb-6">
          <img 
            src={pokemon.image} 
            alt={pokemon.name} 
            className="w-32 h-32"
          />
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {pokemon.stats.map(stat => (
              <div 
                key={stat.name} 
                className="bg-gray-700 p-3 rounded-lg"
              >
                <div className="text-gray-300 text-sm mb-1">
                  {formatStatName(stat.name)}
                </div>
                <div className="text-white font-bold">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          <a
            href={tcgPlayerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            View on TCG Player
          </a>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailModal;