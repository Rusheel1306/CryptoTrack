import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CoinCard from './components/CoinCard';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [showWatchlistOnly, setShowWatchlistOnly] = useState(false);
  
  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem("cryptotrack_watchlist");
    return saved ? JSON.parse(saved) : [];
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      const data = await response.json();
      setCoins(data);
      setLoading(false);
    } catch (err) {
      console.log("API Error:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60000); 
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem("cryptotrack_watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const toggleWatchlist = (id) => {
    setWatchlist(prev => 
      prev.includes(id) ? prev.filter(coinId => coinId !== id) : [...prev, id]
    );
  };

  const handleSort = (type) => {
    let sorted = [...coins];
    if (type === 'high') sorted.sort((a, b) => b.current_price - a.current_price);
    if (type === 'low') sorted.sort((a, b) => a.current_price - b.current_price);
    if (type === 'most_bought') sorted.sort((a, b) => b.total_volume - a.total_volume);
    setCoins(sorted);
  };

  const filteredCoins = coins.filter(coin => {
    const matchesSearch = coin.name.toLowerCase().includes(search.toLowerCase()) || 
                         coin.symbol.toLowerCase().includes(search.toLowerCase());
    const matchesWatchlist = showWatchlistOnly ? watchlist.includes(coin.id) : true;
    return matchesSearch && matchesWatchlist;
  });

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar 
        search={search} 
        setSearch={setSearch} 
        handleSort={handleSort} 
        handleSync={fetchData}
        darkMode={darkMode}
        setDarkMode={() => setDarkMode(!darkMode)}
        showWatchlistOnly={showWatchlistOnly}
        setShowWatchlistOnly={() => setShowWatchlistOnly(!showWatchlistOnly)}
      />
      
      <main className="container mx-auto p-6 lg:p-12">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-64 gap-4">
            <div className={`w-12 h-12 border-4 ${darkMode ? 'border-cyan-500' : 'border-blue-600'} border-t-transparent rounded-full animate-spin`}></div>
            <p className="font-bold animate-pulse uppercase tracking-widest text-xs">Updating Market...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCoins.map(coin => (
              <CoinCard 
                key={coin.id} 
                coin={coin} 
                darkMode={darkMode}
                isWatched={watchlist.includes(coin.id)}
                onToggleWatch={() => toggleWatchlist(coin.id)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;