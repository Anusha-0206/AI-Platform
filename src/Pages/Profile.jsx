import React from 'react';
import { Link } from 'react-router-dom';
import bgImg from '../assets/bg.png';
import avatarImg from '../assets/ai-avatar.png';
import gallery1 from '../assets/gallery1.png';
import gallery2 from '../assets/gallery2.png';
import gallery3 from '../assets/gallery3.png';
import gallery4 from '../assets/gallery4.png';


const Profile = () => {
    const stats = [
        { label: 'Images', sub: 'Generated', count: 128, icon: (
            <svg className="w-6 h-6 text-fuchsia-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
            </svg>
        )},
        { label: 'Videos', sub: 'Generated', count: 24, icon: (
            <svg className="w-6 h-6 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
        )},
        { label: 'Audio', sub: 'Created', count: 56, icon: (
            <svg className="w-6 h-6 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="23" />
            </svg>
        )},
        { label: 'SEO', sub: 'Plans', count: 12, icon: (
            <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
            </svg>
        )},
    ];

    const menuItems = [
        { label: 'Account Settings', path: '/profile/settings', icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="10" r="3" />
                <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
            </svg>
        )},
        { label: 'Cancel Subscription', path: '/profile/cancel', icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
            </svg>
        )},
        { label: 'Change Password', path: '/profile/password', icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3L15.5 7.5z" />
            </svg>
        )},
        { label: 'Language', path: '/profile/language', icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        )},
    ];

    const recentContent = [gallery1, gallery2, gallery3, gallery4];


    return (
        <div className="min-h-screen bg-[#021021] text-white font-sans selection:bg-purple-500/30 overflow-x-hidden relative pt-16">

            {/* Background Layer */}
            <div className="fixed inset-0 z-0 opacity-100 bg-cover bg-center bg-no-repeat pointer-events-none" style={{ backgroundImage: `url(${bgImg})` }}></div>
            
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-6 space-y-6">
                
                {/* Header Row */}
                <div className="flex items-center gap-4 mb-4 group cursor-pointer w-fit">
                    <Link to="/" className="text-white hover:text-white/70 transition-all flex items-center gap-2">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                        <h1 className="text-2xl font-bold tracking-tight text-white">Profile</h1>

                    </Link>
                </div>

                {/* User Info Card (Horizontal) */}
                <div className="w-full rounded-[2.2rem] p-8 border border-white/10 bg-[#0d1426]/60 shadow-2xl flex items-center justify-between gap-6 relative overflow-hidden group">

                    <div className="flex items-center gap-6">
                        <div className="w-20 h-20 rounded-full border-2 border-purple-500/30 p-1 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 relative group">
                            <img src={avatarImg} alt="Avatar" className="w-full h-full rounded-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-bold text-white tracking-tight">Anusha Tripathi</h2>
                            <p className="text-white/40 font-medium tracking-tight">anushatripathi@gmail.com</p>

                        </div>
                    </div>
                    <button className="px-10 py-3.5 rounded-full bg-gradient-to-r from-fuchsia-400 via-purple-500 to-blue-500 font-bold hover:scale-105 transition-all shadow-[0_0_40px_rgba(217,70,239,0.3)] text-[0.9rem] tracking-tight">
                        Upgrade to Pro
                    </button>
                </div>

                {/* Stats Row (4 Columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="rounded-[1.8rem] p-5 border border-white/10 backdrop-blur-xl bg-white/[0.03] flex items-center gap-4 hover:bg-white/[0.06] transition-all cursor-default relative overflow-hidden group">
                           <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                           <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 shadow-inner">
                                {stat.icon}
                           </div>
                            <div className="flex flex-col text-white">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-lg font-bold">{stat.label}</span>
                                    <span className="text-lg font-black">{stat.count}</span>
                                </div>
                                <span className="text-white/40 text-[0.65rem] font-bold uppercase tracking-widest">{stat.sub}</span>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Bottom Row (Menu + Preview) */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-4">
                    {/* Menu List */}
                    <div className="rounded-[2.2rem] p-4 border border-white/10 bg-[#0d1426]/60 shadow-2xl overflow-hidden">

                        <nav className="flex flex-col">
                            {menuItems.map((item, idx) => (
                                <Link key={idx} to={item.path} className="flex items-center gap-4 px-6 py-5 hover:bg-white/[0.03] rounded-3xl transition-all group">
                                    <span className="text-white/40 group-hover:text-purple-400 transition-all duration-300 transform group-hover:scale-110">
                                        {item.icon}
                                    </span>
                                    <span className="text-lg font-medium text-white/70 group-hover:text-white transition-colors tracking-tight">
                                        {item.label}
                                    </span>
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Gallery & Plan Preview */}
                    <div className="rounded-[2.2rem] p-8 border border-white/10 bg-[#0d1426]/60 shadow-2xl relative overflow-hidden space-y-8 flex flex-col justify-center">

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {recentContent.map((img, idx) => (
                                <div key={idx} className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/40 group relative shadow-inner">
                                    <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 opacity-80 group-hover:opacity-100" />
                                    {idx === 3 && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                                            <svg className="w-8 h-8 text-white/80 fill-current" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold tracking-tight">Current Plan: <span className="text-fuchsia-400">Free</span></h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-white/60">
                                    <svg className="w-5 h-5 text-purple-400/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <span className="font-semibold text-[0.9rem] tracking-tight">20 images per day</span>
                                </li>
                                <li className="flex items-center gap-3 text-white/60">
                                    <svg className="w-5 h-5 text-purple-400/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <span className="font-semibold text-[0.9rem] tracking-tight">Basic AI tools</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;
