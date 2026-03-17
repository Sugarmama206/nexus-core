import React from 'react';

export default function Home() {
  
return (
    <main className="p-6 max-w-4xl mx-auto">
      {/* Header / Brand */}
      <div className="flex flex-col items-center mt-12 mb-16">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-violet-600 to-fuchsia-600 p-1 mb-4 shadow-[0_0_40px_rgba(139,92,246,0.3)]">
          <div className="w-full h-full bg-black rounded-full flex items-center justify-center font-black text-xl italic text-white">N</div>
        </div>
        <h1 className="text-3xl font-black italic tracking-tighter text-white">NEXUS CORE</h1>
        <p className="text-white/40 text-sm mt-2 font-medium tracking-widest uppercase text-center">The Future of Influence</p>
      </div>

      {/* The Bento Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        {/* Large Tile */}
        <div className="col-span-2 row-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 flex flex-col justify-end min-h-[300px] hover:border-violet-500/50 transition-all">
          <h2 className="text-2xl font-bold text-white">Featured Product</h2>
          <p className="text-white/60 mb-6">90-Day Transformation Protocol</p>
          <button className="bg-white text-black font-bold py-4 rounded-full hover:scale-95 transition-transform">
            Get Access — $150
          </button>
        </div>

        {/* Small Tile 1 */}
        <div className="col-span-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-all">
          <div className="text-violet-500 mb-2">● Live</div>
          <p className="text-xs font-bold opacity-40 text-white">COMMUNITY</p>
        </div>

        {/* Small Tile 2 */}
        <div className="col-span-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-all text-center">
          <p className="text-xs font-bold opacity-40 uppercase text-white">Newsletter</p>
          <p className="text-lg font-bold text-white">Join</p>
        </div>

        {/* Wide Tile */}
        <div className="col-span-2 bg-gradient-to-r from-violet-900/20 to-transparent backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 flex items-center justify-between">
          <p className="italic text-white/60">"Your AI Twin is active..."</p>
          <div className="w-10 h-10 rounded-full bg-violet-500/20 animate-pulse border border-violet-500/30" />
        </div>

      </div>
    </main>
  );
}    