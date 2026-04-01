import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/bg.png';
import PromptBox from '../components/promptBox';

const TextToVideo = () => {
    return (
        <div 
            className="min-h-screen w-full bg-cover bg-center bg-fixed relative flex flex-col items-start p-10 md:p-20 overflow-x-hidden"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

            <div className="relative z-10 w-full flex flex-col gap-12 mt-10">
                <PromptBox />
            </div>
        </div>
    );
};

export default TextToVideo;
