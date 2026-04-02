import React from 'react';
import { Link } from 'react-router-dom';
import bgImg from '../assets/bg.png';

const LanguageSelection = () => {
    const languages = [
        { name: 'English (US)', flag: '🇺🇸', sub: 'Global Standard' },
        { name: 'English (UK)', flag: '🇬🇧', sub: 'Regional Variant' },
        { name: 'Hindi', flag: '🇮🇳', sub: 'Cultural Heritage' },
        { name: 'Spanish', flag: '🇪🇸', sub: 'Vibrant Dialect' },
        { name: 'French', flag: '🇫🇷', sub: 'Elegance & Art' },
        { name: 'German', flag: '🇩🇪', sub: 'Structure & Logic' },
        { name: 'Japanese', flag: '🇯🇵', sub: 'Minimal Perfection' },
        { name: 'Chinese', flag: '🇨🇳', sub: 'Ancient Wisdom' }
    ];

    return (
        <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-purple-500/30 overflow-x-hidden relative">
            <div className="fixed inset-0 z-0 opacity-20 bg-cover bg-center bg-no-repeat pointer-events-none" style={{ backgroundImage: `url(${bgImg})` }}></div>
            
            <div className="relative z-10 max-w-5xl mx-auto px-6 pt-16 pb-20">

                <div className="flex items-center gap-4 mb-12 group">
                    <Link to="/profile" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:scale-110 transition-all">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
                    </Link>
                    <h1 className="text-3xl font-bold tracking-tight text-white">Localization Settings</h1>

                </div>

                <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="p-10 rounded-[2rem] border border-white/10 bg-[#0d1426]/60 shadow-2xl">

                        <h3 className="text-2xl font-bold mb-2">Display Language</h3>
                        <p className="text-white/40 mb-12 font-medium">Select your preferred communication interface for the entire platform.</p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {languages.map((lang, idx) => (
                                <button 
                                    key={idx} 
                                    className={`group flex flex-col items-center gap-4 p-8 rounded-[2rem] border transition-all relative overflow-hidden ${lang.name === 'English (US)' ? 'bg-fuchsia-600/10 border-fuchsia-500 shadow-2xl shadow-fuchsia-600/20' : 'bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]'}`}
                                >
                                    <span className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-500">{lang.flag}</span>
                                    <div className="text-center">
                                        <p className={`font-black tracking-tight text-lg mb-1 ${lang.name === 'English (US)' ? 'text-white' : 'text-white/70'}`}>{lang.name}</p>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">{lang.sub}</p>
                                    </div>
                                    {lang.name === 'English (US)' && (
                                        <div className="absolute top-0 right-0 p-3 bg-fuchsia-500/20 rounded-bl-2xl border-l border-b border-fuchsia-500/20">
                                            <svg className="w-4 h-4 text-fuchsia-400" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="mt-16 pt-10 border-t border-white/5 flex justify-end">
                            <button className="px-12 py-4 rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-700 font-black text-base hover:scale-105 transition-all shadow-[0_0_50px_rgba(217,70,239,0.3)]">
                                Apply Selection
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LanguageSelection;
