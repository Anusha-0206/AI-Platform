import React from 'react';
import { Link } from 'react-router-dom';
import bgImg from '../assets/bg.png';
import avatarImg from '../assets/ai-avatar.png';

const AccountSettings = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-purple-500/30 overflow-x-hidden relative">
            <div className="fixed inset-0 z-0 opacity-100 bg-cover bg-center bg-no-repeat pointer-events-none" style={{ backgroundImage: `url(${bgImg})` }}></div>
            
            <div className="relative z-10 max-w-4xl mx-auto px-6 pt-16 pb-20">

                <div className="flex items-center gap-4 mb-12 group">
                    <Link to="/profile" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:scale-110 transition-all">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
                    </Link>
                    <h1 className="text-3xl font-bold tracking-tight text-white">Account Settings</h1>

                </div>

                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="p-10 rounded-[2rem] border border-white/10 bg-[#0d1426]/60 shadow-2xl">

                        <div className="flex items-center gap-8 mb-12 pb-12 border-b border-white/5">
                            <div className="relative group">
                                <div className="w-24 h-24 rounded-full border-2 border-purple-500/30 p-1 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 shadow-inner">
                                    <img src={avatarImg} alt="Avatar" className="w-full h-full rounded-full object-cover shadow-lg" />
                                </div>
                                <div className="absolute -bottom-1 -right-1 bg-fuchsia-600 p-2 rounded-full border-2 border-[#020617] shadow-lg cursor-pointer hover:scale-110 transition-transform">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">Anusha Tripathi</h3>
                                <p className="text-white/40 font-medium">Profile photo will be visible to all members.</p>
                            </div>

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { label: 'Full Name', value: 'Anusha Tripathi' },
                                { label: 'Email Address', value: 'anushatripathi@gmail.com' },
                                { label: 'Phone Number', value: '+91 9876543210' },
                                { label: 'Location', value: 'Delhi, India' },
                            ].map((field, idx) => (
                                <div key={idx} className="space-y-3">
                                    <label className="text-white/30 text-xs font-bold uppercase tracking-[0.2em] ml-2 block">{field.label}</label>
                                    <input 
                                        type="text" 
                                        defaultValue={field.value} 
                                        className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-500/30 transition-all font-medium text-white/80"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 flex justify-end gap-4">
                            <button className="px-8 py-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-bold text-sm tracking-wide">
                                Cancel
                            </button>
                            <button className="px-10 py-3.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-600 font-bold hover:scale-105 transition-all shadow-[0_0_40px_rgba(217,70,239,0.3)]">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountSettings;
