import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/bg.png';
import PromptBox from '../components/promptBox';

const TextToVideo = () => {
    return (
        <div className="min-h-screen w-full bg-[#020617] relative flex flex-col items-start p-10 md:p-20 overflow-x-hidden pt-28">
            <div className="fixed inset-0 z-0 opacity-100 bg-cover bg-center bg-no-repeat pointer-events-none" style={{ backgroundImage: `url(${bgImage})` }}></div>
            <div className="relative z-10 w-full flex flex-col gap-12 mt-10">
                <PromptBox />
            </div>
        </div>
    );
};

export default TextToVideo;
