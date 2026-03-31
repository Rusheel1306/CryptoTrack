import React from 'react';

export default function CoinCard({ coin, isWatched, onToggleWatch, darkMode }) {
  const isPositive = coin.price_change_percentage_24h >= 0;

  return (
    <div className={`border p-6 rounded-2xl transition-all relative shadow-lg ${darkMode ? 'bg-slate-900/50 border-slate-800 hover:border-cyan-500/50' : 'bg-white border-slate-200 hover:border-blue-500/50'}`}>
      <button onClick={onToggleWatch} className="absolute top-4 right-4 text-xl transition-transform hover:scale-125 z-10">
        {isWatched ? '⭐' : '☆'}
      </button>

      <div className="flex items-center gap-3 mb-6">
        <img src={coin.image} alt={coin.name} className="w-10 h-10" />
        <div>
          <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>{coin.name}</h3>
          <span className="text-xs text-slate-500 uppercase font-mono">{coin.symbol}</span>
        </div>
      </div>

      <div className="space-y-1">
        <p className={`text-3xl font-mono font-bold ${darkMode ? 'text-cyan-50' : 'text-slate-900'}`}>
          ${coin.current_price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex flex-col text-[10px] text-slate-500 font-medium uppercase tracking-wider">
            <span>Mkt Cap: ${(coin.market_cap / 1e9).toFixed(1)}B</span>
            <span>24h Vol: ${(coin.total_volume / 1e6).toFixed(1)}M</span>
          </div>
          <div className={`text-xs font-bold px-2 py-1 rounded-md ${isPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
            {isPositive ? '▲' : '▼'} {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
          </div>
        </div>
      </div>
    </div>
  );
}