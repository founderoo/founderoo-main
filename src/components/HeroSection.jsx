import React from 'react';
import header from '../../src/assets/header-img.png'
import BigEclipse from '../assets/BigEllipse.png'
import smallEclipse from '../assets/Ellipse 6.png'
import Eclipse5 from '../assets/Ellipse 5.png'
import Eclipse4 from '../assets/Ellipse 4.png'
import { Link } from "react-router-dom";
import { useAuth } from '../Context/AuthContext'; // Import useAuth hook

const HeroSection = () => {
    const { currentUser } = useAuth(); // Get the currentUser object

    // Determine the path and button text based on authentication status
    const buttonPath = currentUser ? "/profile" : "/signup";
    const buttonText = currentUser ? "Go to Profile" : "Register Now";

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 relative overflow-hidden">

            {/* Mobile/Tablet Layout (visible on screens smaller than lg) */}
            <div className="lg:hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-20 pb-8 min-h-screen flex flex-col">

                    {/* Text content */}
                    <div className="text-center space-y-6 flex-1 flex flex-col justify-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                            Welcome To The<br />
                            <span className="text-gray-800">World Of Founders</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-700 font-medium">The Founders Community</p>
                        <p className="text-lg sm:text-xl text-purple-700 font-semibold">Innovative Space for Problem Solver</p>
                        <div className="pt-4">
                            <Link to={buttonPath}>
                                <button className="bg-purple-600 hover:bg-yellow-400 hover:text-purple-800 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg">
                                    {buttonText}
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Image section */}
                    <div className="relative flex justify-center items-end mt-2 flex-1 min-h-[24rem] sm:min-h-[28rem] md:min-h-[32rem]">
                        {/* Background ellipse */}
                        <div className="absolute bottom-0 w-full max-w-2xl h-auto">
                            <img
                                src={BigEclipse}
                                alt="Background Ellipse"
                                className="w-full h-full object-contain opacity-30"
                            />
                        </div>

                        {/* Main image */}
                        <div className="relative z-10 h-full w-full flex justify-center items-end">
                            <img
                                src={header}
                                alt="Person wearing purple Founderoo t-shirt"
                                className="h-full w-auto object-cover object-bottom max-w-none scale-110 sm:scale-105"
                            />
                        </div>
                    </div>

                    {/* Decorative ellipses - Mobile version */}
                    <div className="flex items-center justify-center space-x-4 mt-6">
                        <img src={Eclipse4} alt="Ellipse 4" className="w-16 h-16 sm:w-20 sm:h-20 opacity-60" />
                        <img src={Eclipse5} alt="Ellipse 5" className="w-20 h-20 sm:w-24 sm:h-24 opacity-70" />
                        <img src={smallEclipse} alt="Small Ellipse" className="w-24 h-24 sm:w-28 sm:h-28 opacity-80" />
                    </div>
                </div>
            </div>

            {/* Desktop Layout (visible on lg screens and up) - Original Design */}
            <div className="hidden lg:block">
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
                            <Link to={buttonPath}>
                                <button className="bg-purple-600 hover:bg-yellow-400 hover:text-purple-800 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg">
                                    {buttonText}
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
        </div>
    );
};

export default HeroSection;