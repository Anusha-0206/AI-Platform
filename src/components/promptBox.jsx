import React, { useState } from 'react';

const PromptBox = () => {
    const [prompt, setPrompt] = useState('"Write your prompt here"');
    const [selectedStyle, setSelectedStyle] = useState('Cinematic');
    const [selectedDuration, setSelectedDuration] = useState('5s');

    const styles = ['Cinematic', 'Realistic', 'Animation', 'Cartoon', 'Anime', '3D', 'None'];
    const durations = ['5s', '10s', '15s', '30s'];

    return (
        <div className="w-full max-w-lg bg-[#0d1426]/60 border border-white/10 rounded-[2rem] p-8 text-white shadow-2xl">
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-white/90">Prompt</h2>
            </div>
            
            <div className="relative mb-6">
                <textarea 
                    className="w-full min-h-[250px] bg-white/5 border border-white/10 rounded-2xl p-5 text-gray-400 text-base focus:outline-none focus:border-white/20 transition-all resize-none placeholder:text-white/20 leading-relaxed"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />
            </div>

            <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                    {styles.map(style => (
                        <button
                            key={style}
                            onClick={() => setSelectedStyle(style)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                                selectedStyle === style 
                                ? 'bg-white/10 border-white/30 text-white' 
                                : 'bg-transparent border-white/10 text-white/40 hover:border-white/20 hover:text-white/60'
                            }`}
                        >
                            {style}
                        </button>
                    ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                    {durations.map(duration => (
                        <button
                            key={duration}
                            onClick={() => setSelectedDuration(duration)}
                            className={`px-4 py-1.5 rounded-xl text-sm font-medium border transition-all ${
                                selectedDuration === duration 
                                ? 'bg-white/10 border-white/30 text-white' 
                                : 'bg-transparent border-white/10 text-white/40 hover:border-white/20 hover:text-white/60'
                            }`}
                        >
                            {duration}
                        </button>
                    ))}
                </div>

                <div className="space-y-4 pt-4 border-t border-white/5">
                    <h3 className="text-sm font-semibold text-white/80 tracking-wide">Explore Ideas</h3>
                    <p className="text-white/50 text-sm font-light">
                        "ideas"
                    </p>
                </div>

                <div className="pt-4 flex justify-center">
                    <button className="w-48 h-12 bg-gradient-to-r from-[#d946ef] to-[#3b82f6] hover:opacity-90 text-white rounded-full text-base font-bold transition-all shadow-[0_0_20px_rgba(217,70,239,0.3)] flex items-center justify-center">
                        Generate
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PromptBox;
