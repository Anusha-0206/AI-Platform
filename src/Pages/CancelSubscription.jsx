import React from 'react';
import { Link } from 'react-router-dom';
import bgImg from '../assets/bg.png';

const CancelSubscription = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-purple-500/30 overflow-x-hidden relative">
            <div className="fixed inset-0 z-0 opacity-20 bg-cover bg-center bg-no-repeat pointer-events-none" style={{ backgroundImage: `url(${bgImg})` }}></div>
            
            <div className="relative z-10 max-w-4xl mx-auto px-6 pt-16 pb-20">

                <div className="flex items-center gap-4 mb-12 group">
                    <Link to="/profile" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:scale-110 transition-all">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
                    </Link>
                    <h1 className="text-3xl font-bold tracking-tight text-white">Cancel Subscription</h1>

                </div>

                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="p-10 rounded-[2rem] border border-white/10 bg-[#0d1426]/60 shadow-2xl">

                        <h3 className="text-2xl font-bold mb-6">Manage Your Subscription</h3>
                        <p className="text-white/40 mb-10 leading-relaxed max-w-2xl">We're sorry to see you go! If you cancel your subscription, you'll lose access to Pro features like 4K image generation and priority processing at the end of your billing cycle.</p>
                        
                        <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 mb-10">
                            <div className="flex justify-between items-center mb-6 pb-6 border-b border-white/5">
                                <div>
                                    <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Active Plan</span>
                                    <h4 className="text-2xl font-black text-fuchsia-400 mt-1">AI Explorer Pro</h4>
                                </div>
                                <div className="text-right">
                                    <p className="text-xl font-black">$29.99<span className="text-sm font-medium text-white/30"> / mo</span></p>
                                    <p className="text-xs text-white/30 font-bold">Renewal Date: April 20, 2026</p>
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                <h5 className="text-sm font-bold uppercase tracking-widest text-white/60 mb-4">Remaining Benefits</h5>
                                {[
                                    'Unlimited 4K Image Generations',
                                    '120 Video Minutes',
                                    'Priority API Access',
                                    'Commercial License Usage',
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-white/80">
                                        <div className="p-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20">
                                            <svg className="w-3 h-3 text-fuchsia-400" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                                        </div>
                                        <span className="text-sm font-bold tracking-tight">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-10 py-4 rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-700 font-black text-base hover:scale-105 transition-all shadow-[0_0_50px_rgba(217,70,239,0.3)]">
                                Keep My Subscription
                            </button>
                            <button className="px-10 py-4 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 font-bold hover:bg-red-500/20 transition-all">
                                Confirm Cancellation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelSubscription;
