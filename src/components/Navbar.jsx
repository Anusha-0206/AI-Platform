import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import aiAvatar from '../assets/ai-avatar.png';

const Navbar = () => {
    const location = useLocation();
    const isTTV = location.pathname === '/text-to-video';
    const isTTA = location.pathname === '/text-to-audio';

    if (isTTV || isTTA) {
        return (
            <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-4 bg-[#0d1426]/40 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <Link to="/" className="text-white hover:text-white/80 transition-colors flex items-center gap-3">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                            </svg>
                            <span className="text-2xl font-bold tracking-tight">
                                {isTTV ? 'Text to Video' : 'Text to Audio'}
                            </span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-10">
                        <Link to="/text-to-video" className={`${isTTV ? 'text-fuchsia-400 brightness-125 drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]' : 'text-white/60 hover:text-white'} transition-all text-lg font-medium`}>Text to Video</Link>
                        <Link to="#" className="text-white/60 hover:text-white transition-colors text-lg font-medium">Text to Image</Link>
                        <Link to="/text-to-audio" className={`${isTTA ? 'text-fuchsia-400 brightness-125 drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]' : 'text-white/60 hover:text-white'} transition-all text-lg font-medium`}>Text to Audio</Link>
                        <Link to="#" className="text-white/60 hover:text-white transition-colors text-lg font-medium">Paid Version</Link>
                    </div>
                </div>
            </nav>
        );
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] px-8 py-2.5 bg-[#020617]/60 backdrop-blur-md border-b border-white/5">
            <div className="max-w-[1850px] mx-auto flex justify-between items-center">
                <Link to="/" className="text-1xl font-bold text-white tracking-tight">
                    AI Platform
                </Link>

                <div className="flex items-center gap-10">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="text-1xl font-bold text-white relative group">
                            Overview
                            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#d946ef] to-blue-500 transform scale-x-100 transition-transform"></span>
                        </Link>
                        <Link to="#" className="text-1xl font-bold text-white/70 hover:text-white transition-all">Pricing</Link>
                        <Link to="#" className="text-1xl font-bold text-white/70 hover:text-white transition-all">Sign In</Link>
                    </div>

                    <Link to="/profile" className="w-10 h-10 rounded-full overflow-hidden border border-white/20 shadow-lg cursor-pointer hover:border-white/40 transition-all bg-white/5">
                        <img src={aiAvatar} alt="Profile" className="w-full h-full object-cover" />
                    </Link>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;

