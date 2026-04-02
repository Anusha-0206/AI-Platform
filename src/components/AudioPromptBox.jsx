import React, { useState } from 'react';

const AudioPromptBox = () => {
    const [prompt, setPrompt] = useState('Welcome to our podcast, today we explore the future of AI.');
    const [selectedCategory, setSelectedCategory] = useState('Narration');
    const [selectedVoice, setSelectedVoice] = useState('Male');

    const categories = ['Story', 'Narration', 'Podcast', 'None'];
    const voices = ['Male', 'Female', 'Deep', 'Calm'];

    return (
        <div className="w-full max-w-lg bg-[#0d1426]/60 border border-white/10 rounded-[2rem] p-8 text-white shadow-2xl">
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-white/90 tracking-tight">Prompt</h2>
            </div>
            
            <div className="relative mb-6">
                <textarea 
                    className="w-full min-h-[250px] bg-white/5 border border-white/10 rounded-2xl p-5 text-gray-400 text-base focus:outline-none focus:border-white/20 transition-all resize-none placeholder:text-white/20 leading-relaxed"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />
            </div>

            <div className="space-y-8">
                {/* Categories Row */}
                <div className="flex flex-wrap gap-2.5">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-5 py-1.5 rounded-xl text-sm font-medium border transition-all duration-300 ${
                                selectedCategory === cat 
                                ? 'bg-white/10 border-white/30 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]' 
                                : 'bg-transparent border-white/10 text-white/40 hover:border-white/20 hover:text-white/60'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Voice Row */}
                <div className="flex flex-wrap gap-2.5">
                    {voices.map(voice => (
                        <button
                            key={voice}
                            onClick={() => setSelectedVoice(voice)}
                            className={`px-5 py-1.5 rounded-xl text-sm font-medium border transition-all duration-300 ${
                                selectedVoice === voice 
                                ? 'bg-white/10 border-white/30 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]' 
                                : 'bg-transparent border-white/10 text-white/40 hover:border-white/20 hover:text-white/60'
                            }`}
                        >
                            {voice}
                        </button>
                    ))}
                </div>

                {/* Explore Ideas */}
                <div className="space-y-4 pt-2">
                    <h3 className="text-sm font-semibold text-white/90 tracking-wide">Explore Ideas</h3>
                    <button className="text-white/50 text-sm font-light hover:text-white/70 transition-colors">
                        Motivational Message
                    </button>
                </div>

                {/* Generate Button */}
                <div className="pt-4 flex justify-center">
                    <button className="w-48 h-12 bg-gradient-to-r from-[#d946ef] to-[#3b82f6] hover:opacity-90 text-white rounded-full text-base font-bold transition-all shadow-[0_0_20px_rgba(217,70,239,0.3)] flex items-center justify-center">
                        Generate
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AudioPromptBox;
