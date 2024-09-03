import React, { useState, useCallback } from 'react';

const skillNames = [
  'Overall', 'Attack', 'Defence', 'Strength', 'Hitpoints', 'Ranged', 'Prayer', 'Magic',
  'Cooking', 'Woodcutting', 'Fletching', 'Fishing', 'Firemaking', 'Crafting', 'Smithing',
  'Mining', 'Herblore', 'Agility', 'Thieving', 'Slayer', 'Farming', 'Runecraft', 'Hunter', 'Construction'
];

const OsrsStats = ({ isOpen, onClose }) => {
  const [stats, setStats] = useState([]);
  const [username, setUsername] = useState('Daaammmnnn');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStats = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const corsProxyUrl = 'https://api.allorigins.win/raw?url=';
      const osrsApiUrl = `https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=${encodeURIComponent(username)}`;
      const response = await fetch(corsProxyUrl + encodeURIComponent(osrsApiUrl));
      
      if (!response.ok) throw new Error('Failed to fetch stats');
      
      const text = await response.text();
      const lines = text.trim().split('\n');
      const parsedStats = lines.slice(0, 24).map(line => {
        const [rank, level, xp] = line.split(',');
        return { rank: parseInt(rank), level: parseInt(level), xp: parseInt(xp) };
      });
      setStats(parsedStats);
    } catch (err) {
      setError('Error fetching stats: ' + err.message);
      console.error('Error fetching stats:', err);
    } finally {
      setLoading(false);
    }
  }, [username]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchStats();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-gray-900 text-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">OSRS Stats</h2>
        <form onSubmit={handleSubmit} className="mb-6 flex justify-center">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-3 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none"
            placeholder="Enter username"
          />
          <button type="submit" className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
            Fetch Stats
          </button>
        </form>
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {stats.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-4">
            {stats.map((skill, index) => (
              <div key={index} className="flex flex-col items-center bg-gray-800 p-2 sm:p-3 rounded-md">
                <div className="w-8 h-8 mb-2 flex items-center justify-center text-2xl">
                  {skillNames[index].charAt(0)}
                </div>
                <span className="text-sm font-semibold">{skillNames[index]}</span>
                <span className="text-sm">{skill.level}</span>
              </div>
            ))}
          </div>
        )}
        <button onClick={onClose} className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full">
          Close
        </button>
      </div>
    </div>
  );
};

export default OsrsStats;