import React from 'react';

const WhatWeDo = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-16 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Top Section - What We Do & Image */}
                <div className="grid lg:grid-cols-2 gap-12 items-start relative z-10">
                    {/* Left Side - Text and Services */}
                    <div className="space-y-8">
                        {/* What We Do Header - with border effect like Figma */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="relative">
                                {/* Outer border effect */}
                                <div className="absolute -top-2 -left-2 bg-purple-200 rounded-2xl w-full h-full"></div>
                                <div className="bg-purple-600 text-white px-8 py-4 rounded-2xl shadow-lg relative z-10">
                                    <h2 className="text-3xl font-bold">What We Do?</h2>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="max-w-lg text-left">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                We empower founders with the right resources, strategic insights, and powerful connections to build impactful startups, foster innovation, and drive long-term success in the entrepreneurial ecosystem.
                            </p>
                        </div>

                        {/* Service Circles - Matching Figma layout exactly */}
                        <div className="relative w-full max-w-lg py-8">
                            {/* Top row - 3 circles */}
                            <div className="flex justify-between items-center mb-8">
                                <div className="w-24 h-24 bg-white rounded-full border-2 border-purple-300 flex items-center justify-center shadow-md">
                                    <span className="text-xs font-semibold text-center text-gray-700 leading-tight px-1">
                                        EXPERT<br />INSIGHTS
                                    </span>
                                </div>
                                <div className="w-24 h-24 bg-white rounded-full border-2 border-purple-300 flex items-center justify-center shadow-md">
                                    <span className="text-xs font-semibold text-center text-gray-700 leading-tight px-1">
                                        NETWORKING<br />OPPORTUNITIES
                                    </span>
                                </div>
                                <div className="w-24 h-24 bg-white rounded-full border-2 border-purple-300 flex items-center justify-center shadow-md">
                                    <span className="text-xs font-semibold text-center text-gray-700 leading-tight px-1">
                                        IDEA BASED<br />FUNDING
                                    </span>
                                </div>
                            </div>

                            {/* Bottom row - 2 circles centered */}
                            <div className="flex justify-center space-x-16">
                                <div className="w-24 h-24 bg-white rounded-full border-2 border-purple-300 flex items-center justify-center shadow-md">
                                    <span className="text-xs font-semibold text-center text-gray-700 leading-tight px-1">
                                        BRANDING<br />STRATEGIES
                                    </span>
                                </div>
                                <div className="w-24 h-24 bg-white rounded-full border-2 border-purple-300 flex items-center justify-center shadow-md">
                                    <span className="text-xs font-semibold text-center text-gray-700 leading-tight px-1">
                                        GROWTH<br />ORIENTED<br />SOLUTIONS
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="bg-purple-600 rounded-3xl p-4 shadow-xl relative overflow-hidden w-full max-w-md lg:max-w-none">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734b46c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDU1MDh8MHwxfHNlYXJjaHw0fHxlbnRyZXByZW5ldXJ8ZW58MHx8fHwxNzA4Nzg4ODU3fDA&ixlib=rb-4.0.3&q=80&w=1080"
                                alt="Entrepreneur smiling"
                                className="rounded-2xl w-full h-80 object-cover"
                            />
                            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md">
                                <span className="font-bold text-lg text-purple-700">founderco</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;