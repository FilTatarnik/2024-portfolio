import React, { useState, useEffect } from "react";
import PokemonDetailModal from './PokemonDetailModal';

const PokemonCards = ({ isOpen, onClose }) => {
  const [allCards, setAllCards] = useState([]); 
  const [ownedCards, setOwnedCards] = useState([9, 18, 26, 31, 34, 35, 36, 38, 40, 45, 62, 65, 68, 71, 82, 89, 94, 97, 101, 106, 107, 110, 112, 113, 115, 116, 117, 122, 123, 127, 130, 131, 132, 135, 136, 141, 142, 143, 144, 145, 146, 149, 150, 151]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // Fetch the 151 Pokémon on mount
  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = await response.json();

      // Map through the results and add IDs and images
      const pokemonList = await Promise.all(
        data.results.map(async (pokemon, index) => {
          const id = index + 1;
          const details = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json());
          
          // Extract only the stats we want to show
          const relevantStats = [
            { name: 'hp', value: details.stats.find(s => s.stat.name === 'hp').base_stat },
            { name: 'attack', value: details.stats.find(s => s.stat.name === 'attack').base_stat },
            { name: 'defense', value: details.stats.find(s => s.stat.name === 'defense').base_stat },
            { name: 'speed', value: details.stats.find(s => s.stat.name === 'speed').base_stat }
          ];

          return {
            id,
            name: pokemon.name,
            image: details.sprites.front_default,
            stats: relevantStats
          };
        })
      );

      setAllCards(pokemonList);
    };

    if (isOpen) {
      fetchPokemon();
    }
  }, [isOpen]);

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
    setIsDetailModalOpen(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-gray-800 rounded-lg shadow-lg max-w-4xl mx-auto w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center text-white mb-6">Pokémon Cards</h1>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {allCards.map((card) => {
              const isOwned = ownedCards.includes(card.id);
              return (
                <div
                  key={card.id}
                  className={`relative bg-gray-900 rounded-lg p-4 flex flex-col items-center ${
                    isOwned ? "cursor-pointer hover:bg-gray-700" : "opacity-50"
                  }`}
                  onClick={() => isOwned && handlePokemonClick(card)}
                >
                  <img src={card.image} alt={card.name} className="w-20 h-20 mb-2" />
                  <h2 className="text-white text-center text-sm capitalize">{card.name}</h2>
                  {!isOwned && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold">
                      X
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <button 
            onClick={onClose} 
            className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Close
          </button>
        </div>
      </div>

      <PokemonDetailModal 
        pokemon={selectedPokemon}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
      />
    </div>
  );
};

export default PokemonCards;