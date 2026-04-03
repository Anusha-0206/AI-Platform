import React from 'react';
import bgImage from '../assets/bg.png';
import AudioPromptBox from '../components/AudioPromptBox';

const TextToAudio = () => {
    return (
        <div className="min-h-screen w-full bg-[#020617] relative flex flex-col items-start p-10 md:p-20 overflow-x-hidden pt-28">
            <div className="fixed inset-0 z-0 opacity-100 bg-cover bg-center bg-no-repeat pointer-events-none" style={{ backgroundImage: `url(${bgImage})` }}></div>
            <div className="relative z-10 w-full flex flex-col gap-12 mt-10">
                <AudioPromptBox />
            </div>
        </div>
    );
};

export default TextToAudio;
