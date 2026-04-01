import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import aiAvatar from '../assets/ai-avatar.png';

const Navbar = () => {
    const location = useLocation();
    const isTTV = location.pathname === '/text-to-video';

    if (isTTV) {
        return (
            <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-4 bg-[#0d1426]/40 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <Link to="/" className="text-white hover:text-white/80 transition-colors flex items-center gap-3">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                            </svg>
                            <span className="text-2xl font-bold tracking-tight">Text to Video</span>
                        </Link>
                    </div>
                    
                    <div className="flex items-center gap-10">
                        <Link to="#" className="text-white/60 hover:text-white transition-colors text-lg font-medium">Text to Image</Link>
                        <Link to="#" className="text-fuchsia-400 font-medium text-lg hover:brightness-125 hover:drop-shadow-[0_0_10px_rgba(192,132,252,0.8)] transition-all">Text to Audio</Link>
                        <Link to="#" className="text-white/60 hover:text-white transition-colors text-lg font-medium">Paid Version</Link>
                    </div>
                </div>
            </nav>
        );
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] px-8 py-4 bg-[#0d1426]/80 backdrop-blur-lg border-b border-white/5 shadow-2xl">
            <div className="max-w-[1400px] mx-auto flex justify-between items-center">
                <Link to="/" className="text-3xl font-bold text-white tracking-tight">
                    AI Platform
                </Link>
                
                <div className="flex items-center gap-12">
                    <div className="flex items-center gap-10">
                        <Link to="/" className="text-xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent relative group">
                            Overview
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-100 transition-transform"></span>
                        </Link>
                        <Link to="#" className="text-xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent opacity-80 hover:opacity-100 transition-opacity">Pricing</Link>
                        <Link to="#" className="text-xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent opacity-80 hover:opacity-100 transition-opacity">Sign In</Link>
                    </div>
                    
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 shadow-lg cursor-pointer hover:border-white/30 transition-all">
                        <img src={aiAvatar} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

