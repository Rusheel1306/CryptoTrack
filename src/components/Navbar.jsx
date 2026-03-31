import React from 'react';

export default function Navbar({ 
  search, setSearch, handleSort, handleSync, 
  darkMode, setDarkMode, showWatchlistOnly, setShowWatchlistOnly 
}) {
  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-md border-b p-4 shadow-xl transition-colors ${darkMode ? 'bg-slate-900/80 border-cyan-500/30' : 'bg-white/80 border-slate-200'}`}>
      <div className="container mx-auto flex flex-col lg:grid lg:grid-cols-3 items-center gap-4">
        
        {/* 1. Left Section: Logo & Theme Toggle */}
        <div className="flex items-center gap-4 justify-start w-full lg:w-auto">
          <h1 className={`text-2xl font-black tracking-tighter ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
            CRYPTOTRACK
          </h1>
          <button 
            onClick={setDarkMode} 
            className={`text-xl hover:rotate-12 transition-transform p-2 rounded-full ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
        
        {/* 2. Middle Section: Centered Search Bar */}
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-md">
            <input 
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search assets..."
              className={`w-full rounded-full px-6 py-2 outline-none border transition-all ${
                darkMode 
                ? 'bg-slate-800 border-slate-700 text-white focus:ring-2 focus:ring-cyan-500' 
                : 'bg-slate-100 border-slate-300 text-slate-900 focus:ring-2 focus:ring-blue-500'
              }`}
            />
          </div>
        </div>
        
        {/* 3. Right Section: ALL Action Buttons */}
        <div className="flex gap-2 text-[10px] uppercase font-bold tracking-widest overflow-x-auto w-full lg:justify-end no-scrollbar py-1">
          {/* SYNC */}
          <button 
            onClick={handleSync}
            className={`px-3 py-2 rounded-lg border transition-all flex items-center gap-2 ${darkMode ? 'bg-cyan-900/30 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white' : 'bg-blue-100 border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white'}`}
          >
            🔄 Sync
          </button>

          {/* WATCHLIST */}
          <button 
            onClick={setShowWatchlistOnly}
            className={`px-3 py-2 rounded-lg border transition-colors whitespace-nowrap ${showWatchlistOnly ? 'bg-yellow-500 border-yellow-500 text-white' : (darkMode ? 'bg-slate-800 border-slate-700 hover:bg-slate-700' : 'bg-slate-200 border-slate-300 hover:bg-slate-300')}`}
          >
            {showWatchlistOnly ? '★ Watchlist' : '☆ Watchlist'}
          </button>

          {/* SORTING GROUP */}
          <div className="flex gap-1">
            <button 
              onClick={() => handleSort('high')} 
              className={`px-3 py-2 rounded-lg border whitespace-nowrap ${darkMode ? 'bg-slate-800 border-slate-700 hover:bg-slate-700' : 'bg-slate-200 border-slate-300 hover:bg-slate-300'}`}
            >
              High
            </button>
            <button 
              onClick={() => handleSort('low')} 
              className={`px-3 py-2 rounded-lg border whitespace-nowrap ${darkMode ? 'bg-slate-800 border-slate-700 hover:bg-slate-700' : 'bg-slate-200 border-slate-300 hover:bg-slate-300'}`}
            >
              Low
            </button>
            <button 
              onClick={() => handleSort('most_bought')} 
              className={`px-3 py-2 rounded-lg border whitespace-nowrap ${darkMode ? 'bg-slate-800 border-slate-700 hover:bg-slate-700' : 'bg-slate-200 border-slate-300 hover:bg-slate-300'}`}
            >
              Popular
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
}