import React from 'react';
import { Link } from 'react-router-dom';
import bgImg from '../assets/bg.png';

const ChangePassword = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-purple-500/30 overflow-x-hidden relative">
            <div className="fixed inset-0 z-0 opacity-20 bg-cover bg-center bg-no-repeat pointer-events-none" style={{ backgroundImage: `url(${bgImg})` }}></div>
            
            <div className="relative z-10 max-w-4xl mx-auto px-6 pt-16 pb-20">

                <div className="flex items-center gap-4 mb-12 group">
                    <Link to="/profile" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:scale-110 transition-all">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
                    </Link>
                    <h1 className="text-3xl font-bold tracking-tight text-white">Security & Keys</h1>

                </div>

                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="p-10 rounded-[2rem] border border-white/10 bg-[#0d1426]/60 shadow-2xl flex flex-col items-center text-center">

                        <h3 className="text-2xl font-black mb-6 uppercase tracking-wider">Change Identity Access</h3>
                        <p className="text-white/40 mb-10 leading-relaxed font-medium max-w-lg">Protect your AI content by rotating your access credentials regularly.</p>
                        
                        <div className="space-y-8 w-full max-w-lg">
                            <div className="space-y-3">
                                <label className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] block text-center">Current Password Node</label>
                                <input 
                                    type="password" 
                                    placeholder="••••••••" 
                                    className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-5 focus:outline-none focus:border-purple-500/30 transition-all font-medium text-white/80 focus:bg-white/[0.04] text-center"
                                />
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <label className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] block text-center">New Sequence</label>
                                    <input 
                                        type="password" 
                                        placeholder="Min 8 characters" 
                                        className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-5 focus:outline-none focus:border-purple-500/30 transition-all font-medium text-white/80 focus:bg-white/[0.04] text-center"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] block text-center">Verification</label>
                                    <input 
                                        type="password" 
                                        placeholder="Repeat pass" 
                                        className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-5 focus:outline-none focus:border-purple-500/30 transition-all font-medium text-white/80 focus:bg-white/[0.04] text-center"
                                    />
                                </div>
                            </div>

                            <div className="pt-8 space-y-4">
                                <button className="w-full py-5 rounded-[1.5rem] bg-gradient-to-r from-fuchsia-600 to-indigo-700 font-black text-lg tracking-wide hover:scale-[1.02] transition-all shadow-[0_0_50px_rgba(217,70,239,0.4)]">
                                    Reset Password
                                </button>
                                <p className="text-center text-[10px] text-white/20 font-black uppercase tracking-[0.4em] leading-relaxed">Safety Note: Changing your password will invalidate all active node sessions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
