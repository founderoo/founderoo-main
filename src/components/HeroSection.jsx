import React from 'react';
import header from '../../src/assets/header-img.png'
import  BigEclipse  from '../assets/BigEllipse.png'
import smallEclipse from '../assets/Ellipse 6.png'
import Eclipse5 from '../assets/Ellipse 5.png'
import Eclipse4 from '../assets/Ellipse 4.png'
import {Link} from "react-router-dom";

const HeroSection = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 relative overflow-hidden">

            {/* Main content container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                {/* Grid layout */}
                <div className="grid lg:grid-cols-2 gap-16 items-center lg:items-end h-[calc(100vh-5rem)]">

                    {/* Left content */}
                    <div className="relative z-10 lg:self-center pb-20 lg:pb-0">
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                            Welcome To The<br />
                            <span className="text-gray-800">World Of Founders</span>
                        </h1>
                        <p className="text-2xl text-gray-700 mb-4 font-medium">The Founders Community</p>
                        <p className="text-xl text-purple-700 mb-8 font-semibold">Innovative Space for Problem Solver</p>
                        <Link to="/signup">
                        <button className="bg-purple-600 hover:bg-yellow-400 hover:text-purple-800 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg">

                            Register Now
                        </button>
                        </Link>
                        <div className="flex items-center justify-start space-x-6 mt-8">
                            <img src={Eclipse4} alt="Ellipse 4" className="w-24 h-24 opacity-60" />
                            <img src={Eclipse5} alt="Ellipse 5" className="w-32 h-32 opacity-70" />
                            <img src={smallEclipse} alt="Small Ellipse" className="w-40 h-40 opacity-80" />
                        </div>
                    </div>

                    {/* Right content - Image section */}
                    <div className="relative flex justify-center items-end h-full">
                        {/* Background ellipse for image area */}
                        <div className="absolute bottom-0 w-full max-w-2xl h-auto">
                            <img
                                src={BigEclipse}
                                alt="Background Ellipse"
                                className="w-full h-full object-contain opacity-30"
                            />
                        </div>


                        <div className="relative z-10 w-full flex justify-center items-end h-full">
                            <img
                                src={header}
                                alt="Person wearing purple Founderoo t-shirt"
                                className="h-full w-auto object-cover object-bottom min-h-[80vh] lg:min-h-[85vh]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;