import React from 'react';
import founderoo from '../assets/founderoo.webp'

const WhyChooseFounderooSection = () => {
    return (
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Mobile/Tablet Layout (visible on screens smaller than lg) */}
                <div className="lg:hidden space-y-8">
                    {/* Header Badge */}
                    <div className="flex justify-center">
                        <div className="bg-blue-100 text-blue-600 px-6 py-2 rounded-full text-sm font-medium">
                            Why People Choose Founder Flow
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight text-center">
                        The Ultimate Digital Solution
                        <br />
                        <span className="text-purple-600">for Freelancers & Brands</span>
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center px-4">
                        At Founder Flow, we provide a comprehensive digital solution designed to empower freelancers and businesses alike. Our platform streamlines collaboration, enhances brand visibility, and ensures a seamless experience for professionals across industries.
                    </p>

                    {/* Central Logo */}
                    <div className="flex justify-center py-8">
                        <img src={founderoo} alt="Founderoo Logo" className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-contain" />
                    </div>

                    {/* Feature Cards - Mobile Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
                        <div className="bg-purple-50 rounded-2xl p-6 shadow-lg border border-purple-200 text-center">
                            <span className="text-sm sm:text-base font-bold text-purple-900">
                                All-in-One Solution
                            </span>
                        </div>
                        <div className="bg-purple-50 rounded-2xl p-6 shadow-lg border border-purple-200 text-center">
                            <span className="text-sm sm:text-base font-bold text-purple-900">
                                Effortless Branding
                            </span>
                        </div>
                        <div className="bg-purple-50 rounded-2xl p-6 shadow-lg border border-purple-200 text-center">
                            <span className="text-sm sm:text-base font-bold text-purple-900">
                                Seamless Experience
                            </span>
                        </div>
                        <div className="bg-purple-50 rounded-2xl p-6 shadow-lg border border-purple-200 text-center">
                            <span className="text-sm sm:text-base font-bold text-purple-900">
                                Trusted by Professionals
                            </span>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center">
                        <button className="bg-purple-600 hover:bg-amber-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg">
                            Join Now
                        </button>
                    </div>
                </div>

                {/* Desktop Layout (visible on lg screens and up) - Original Design */}
                <div className="hidden lg:block">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Side - Text Content */}
                        <div className="space-y-8">
                            {/* Header with background */}
                            <div className="inline-block">
                                <div className="bg-blue-100 text-blue-600 px-6 py-2 rounded-full text-sm font-medium">
                                    Why People Choose Founder Flow
                                </div>
                            </div>

                            {/* Main Heading */}
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                The Ultimate Digital Solution
                                <br />
                                <span className="text-purple-600">for Freelancers & Brands</span>
                            </h2>

                            {/* Description */}
                            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                                At Founder Flow, we provide a comprehensive digital solution designed to empower freelancers and businesses alike. Our platform streamlines collaboration, enhances brand visibility, and ensures a seamless experience for professionals across industries.
                            </p>

                            {/* CTA Button */}
                            <div>
                                <button className="bg-purple-600 hover:bg-amber-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg">
                                    Join Now
                                </button>
                            </div>
                        </div>

                        {/* Right Side - Feature Ovals with Central F Logo and background square */}
                        <div className="flex justify-center items-center py-16">
                            <div className="relative w-[400px] h-[400px] bg-purple-100 rounded-[50px] shadow-lg">

                                {/* Central F Logo - Slightly smaller */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                                    <img src={founderoo} alt="Founderoo Logo" className="w-44 h-44 rounded-full object-contain" />
                                </div>

                                {/* Feature Ovals positioned around the center */}
                                {/* All-in-One Solution - Top */}
                                <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 z-10">
                                    <div className="w-56 h-32 bg-purple-50 rounded-full flex items-center justify-center shadow-lg border border-purple-200">
                                        <span className="text-sm font-bold text-purple-900 text-center leading-tight px-2">
                                            All-in-One<br />Solution
                                        </span>
                                    </div>
                                </div>

                                {/* Effortless Branding - Left */}
                                <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                    <div className="w-32 h-56 bg-purple-50 rounded-full flex items-center justify-center shadow-lg border border-purple-200">
                                        <span className="text-sm font-bold text-purple-900 text-center leading-tight px-2">
                                            Effortless<br />Branding
                                        </span>
                                    </div>
                                </div>

                                {/* Seamless Experience - Right */}
                                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                                    <div className="w-32 h-56 bg-purple-50 rounded-full flex items-center justify-center shadow-lg border border-purple-200">
                                        <span className="text-sm font-bold text-purple-900 text-center leading-tight px-2">
                                            Seamless<br />Experience
                                        </span>
                                    </div>
                                </div>

                                {/* Trusted by Professionals - Bottom */}
                                <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 z-10">
                                    <div className="w-56 h-32 bg-purple-50 rounded-full flex items-center justify-center shadow-lg border border-purple-200">
                                        <span className="text-sm font-bold text-purple-900 text-center leading-tight px-2">
                                            Trusted by<br />Professionals
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseFounderooSection;