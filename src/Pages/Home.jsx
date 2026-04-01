import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import bgImg from '../assets/bg.png';
import watermarkRemover from '../assets/watermark-remover.png';
import textToImage from '../assets/text-to-image.png';
import textToVideo from '../assets/text-to-video.png';
import copyrightChecker from '../assets/copyright-checker.png';
import chatImg from '../assets/chat-illustration.png';
import hoverTextToImage from '../assets/hover_text_to_image.png';
import hoverTextToVideo from '../assets/hover_text_to_video.png';
import hoverTextToAudio from '../assets/hover_text_to_audio.png';
import hoverCopyrightChecker from '../assets/hover_copyright_checker.png';
import hoverCopyrightChanger from '../assets/hover_copyright_changer.png';
import hoverAISEOPlanner from '../assets/hover_ai_seo_planner.png';
import hoverWatermarkRemover from '../assets/hover_watermark_remover.png';

const Home = () => {
    const tools = [
        { title: 'Watermark Remover', img: watermarkRemover, size: 'small' },
        { title: 'Text to Image', img: textToImage, size: 'large' },
        { title: 'Text to Video', img: textToVideo, size: 'large' },
        { title: 'Copyright Checker', img: copyrightChecker, size: 'small' },
    ];

    const stats = [
        { label: '5,000+ Creators', sub: 'Trusted by Creators', icon: '👥' },
        { label: 'Advanced AI Tools', sub: 'Next-Gen AI tools', icon: '⚙️' },
        { label: 'Fast Turnaround', sub: 'Quick AI Results', icon: '⚡' },
    ];

    const [hoveredTag, setHoveredTag] = useState(null);

    const tags = [
        { label: 'Text to Image', img: hoverTextToImage },
        { label: 'Text to Video', img: hoverTextToVideo },
        { label: 'Text to Audio', img: hoverTextToAudio },
        { label: 'Copyright Checker', img: hoverCopyrightChecker },
        { label: 'Copyright Changer', img: hoverCopyrightChanger },
        { label: 'AI SEO Planner', img: hoverAISEOPlanner },
        { label: 'Watermark Remover', img: hoverWatermarkRemover },
    ];

    return (
        <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden font-sans">
            {/* Main Hero Section with Background */}
            <div
                className="relative min-h-screen pt-33 pb-20 px-4 md:px-8 lg:px-12 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImg})` }}
            >
                {/* Decorative Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/40 via-transparent to-[#020617]/80"></div>

                <div className="relative z-10 max-w-[1600px] ml-10 grid lg:grid-cols-[1.4fr_1fr] gap-16 items-center">
                    {/* Left Column: Text & CTA */}
                    <div className="flex flex-col gap-8 max-w-2xl relative">
                        <div className="flex flex-col gap-1 relative">
                            {/* AI Background Circle */}
                            <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-600/30 blur-[60px] rounded-full pointer-events-none"></div>
                            <div className="absolute top-0 left-0 w-24 h-24 bg-blue-500/20 blur-[50px] rounded-full pointer-events-none"></div>

                            <h1 className="text-4xl md:text-6xl font-black leading-none tracking-tight text-white mb-2 md:whitespace-nowrap z-10">
                                <span className="relative">
                                    AI
                                    <div className="absolute -inset-4 bg-purple-600/20 rounded-full blur-xl -z-10"></div>
                                </span> Creative & Copyright
                            </h1>
                            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 to-pink-400 bg-clip-text text-transparent leading-none md:whitespace-nowrap z-10">
                                Intelligence Platform
                            </h2>
                        </div>
                        <p className="text-xl text-white/70 leading-relaxed max-w-lg z-10">
                            Empower your content creation and copyright management with advanced AI.
                        </p>
                        
                        <div className="flex flex-wrap gap-5 mt-2 z-10">
                            <button className="px-10 py-4 rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500 font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(192,132,252,0.4)]">
                                Start Free Trial
                            </button>
                            <button className="px-10 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md font-bold text-lg hover:bg-white/15 transition-all">
                                View Pricing
                            </button>
                        </div>

                        {/* Stats Section Integrated */}
                        <div className="flex flex-wrap gap-12 mt-8 z-10">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl group-hover:bg-white/10 transition-colors">
                                        {stat.icon}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-tight">{stat.label}</span>
                                        <span className="text-white/40 text-xs">{stat.sub}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Floating Cards Grid */}
                    <div className="grid grid-cols-2 gap-6 relative">
                        {tools.map((tool, idx) => (
                            <div
                                key={idx}
                                className={`group relative rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 p-4 transition-all hover:border-white/30 hover:bg-white/10 shadow-2xl ${idx === 1 ? 'mt-8' : idx === 2 ? '-mt-8' : ''
                                    }`}
                            >
                                <p className="text-white/80 text-sm font-medium mb-3 ml-2">{tool.title}</p>
                                <div className="rounded-2xl overflow-hidden aspect-video relative">
                                    <img src={tool.img} alt={tool.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Section: Floating Tags & Chat */}
                <div className="relative z-10 max-w-[1600px] ml-10 mt-24">
                    <div className="flex flex-wrap gap-4 max-w-4xl">
                        {tags.map((tag, idx) => (
                            <div
                                key={idx}
                                onMouseEnter={() => setHoveredTag(tag)}
                                onMouseLeave={() => setHoveredTag(null)}
                                className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-white/70 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all cursor-pointer text-sm font-medium"
                            >
                                {tag.label}
                            </div>
                        ))}
                    </div>

                    {/* Floating Chat Illustration with Dynamic Preview */}
                    <div className="absolute bottom-[-180px] right-0 w-[500px] pointer-events-none z-20">
                        <div className="relative w-full h-full group">
                            <img src={chatImg} alt="AI Chat" className="w-full h-auto drop-shadow-[0_0_50px_rgba(168,85,247,0.3)] animate-pulse-slow" />
                            
                            {/* Dynamic Preview Image */}
                            <div className="absolute top-[18%] right-[8%] w-[60%] h-[55%] rounded-3xl overflow-hidden shadow-2xl border border-white/20 transition-all duration-500 ease-in-out">
                                <img 
                                    src={hoveredTag ? hoveredTag.img : hoverTextToImage} 
                                    className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-500"
                                    alt="Preview"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                
                                {/* Status Overlay if hovered */}
                                {hoveredTag && (
                                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                        {hoveredTag.label}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Animation Styles */}
            <style jsx>{`
                @keyframes pulse-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 6s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default Home;

