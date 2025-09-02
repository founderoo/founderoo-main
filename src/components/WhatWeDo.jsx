import React from 'react';
import girl from '../assets/girl.png'

const WhatWeDo = () => {
    return (
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 pt-16 pb-16 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Mobile/Tablet Layout (visible on screens smaller than lg) */}
                <div className="lg:hidden space-y-8">
                    {/* Header */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute -top-2 -left-2 bg-purple-200 rounded-2xl w-full h-full"></div>
                            <div className="bg-purple-600 text-white px-6 py-3 rounded-2xl shadow-lg relative z-10">
                                <h2 className="text-2xl sm:text-3xl font-bold">What We Do?</h2>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="text-center px-4">
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            We empower founders with the right resources, strategic insights, and powerful connections to build impactful startups, foster innovation, and drive long-term success in the entrepreneurial ecosystem.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center px-4">
                        <div className="bg-purple-600 rounded-3xl p-4 shadow-xl relative overflow-hidden w-full max-w-sm h-80 sm:h-96">
                            <img
                                src={girl}
                                alt="Entrepreneur smiling"
                                className="rounded-2xl w-full h-full object-cover"
                            />
                            <div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-lg shadow-md">
                                <span className="font-bold text-lg text-purple-700">founder flow</span>
                            </div>
                        </div>
                    </div>

                    {/* Service Cards - Mobile Layout */}
                    <div className="px-4 space-y-4">
                        <div className="bg-white rounded-xl border-l-4 border-purple-600 p-4 shadow-lg">
                            <h3 className="text-base font-bold text-purple-600 mb-1">Expert Insights</h3>
                            <p className="text-gray-600 text-sm">Strategic guidance from industry professionals</p>
                        </div>
                        <div className="bg-white rounded-xl border-l-4 border-purple-600 p-4 shadow-lg">
                            <h3 className="text-base font-bold text-purple-600 mb-1">Networking Opportunities</h3>
                            <p className="text-gray-600 text-sm">Connect with like-minded entrepreneurs</p>
                        </div>
                        <div className="bg-white rounded-xl border-l-4 border-purple-600 p-4 shadow-lg">
                            <h3 className="text-base font-bold text-purple-600 mb-1">Idea Based Funding</h3>
                            <p className="text-gray-600 text-sm">Investment opportunities for innovative concepts</p>
                        </div>
                        <div className="bg-white rounded-xl border-l-4 border-purple-600 p-4 shadow-lg">
                            <h3 className="text-base font-bold text-purple-600 mb-1">Branding Strategies</h3>
                            <p className="text-gray-600 text-sm">Professional brand development and positioning</p>
                        </div>
                        <div className="bg-white rounded-xl border-l-4 border-purple-600 p-4 shadow-lg">
                            <h3 className="text-base font-bold text-purple-600 mb-1">Growth Oriented Solutions</h3>
                            <p className="text-gray-600 text-sm">Scalable strategies for sustainable business growth</p>
                        </div>
                    </div>
                </div>

                {/* Desktop Layout (visible on lg screens and up) - Original Design */}
                <div className="hidden lg:block">
                    <div className="grid lg:grid-cols-2 gap-6 items-start relative z-10">
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

                            {/* Service Circles - Fixed with proper purple borders */}
                            <div className="relative w-full max-w-lg py-4">
                                {/* Top row - 3 circles */}
                                <div className="flex justify-between items-center mb-6">
                                    <div className="w-24 h-24 bg-white rounded-full border-4 border-purple-600 flex items-center justify-center shadow-lg">
                                        <span className="text-xs font-semibold text-center text-gray-700 leading-tight px-1">
                                            EXPERT<br />INSIGHTS
                                        </span>
                                    </div>
                                    <div className="w-24 h-24 bg-white rounded-full border-4 border-purple-600 flex items-center justify-center shadow-lg">
                                        <span className="text-xs font-semibold text-center text-gray-700 leading-tight px-1">
                                            NETWORKING<br />OPPORTUNITIES
                                        </span>
                                    </div>
                                    <div className="w-24 h-24 bg-white rounded-full border-4 border-purple-600 flex items-center justify-center shadow-lg">
                                        <span className="text-xs font-semibold text-center text-gray-700 leading-tight px-1">
                                            IDEA BASED<br />FUNDING
                                        </span>
                                    </div>
                                </div>

                                {/* Bottom row - 2 circles centered */}
                                <div className="flex justify-center space-x-16">
                                    <div className="w-24 h-24 bg-white rounded-full border-4 border-purple-600 flex items-center justify-center shadow-lg">
                                        <span className="text-xs font-semibold text-center text-gray-700 leading-tight px-1">
                                            BRANDING<br />STRATEGIES
                                        </span>
                                    </div>
                                    <div className="w-24 h-24 bg-white rounded-full border-4 border-purple-600 flex items-center justify-center shadow-lg">
                                        <span className="text-xs font-semibold text-center text-gray-700 leading-tight px-1">
                                            GROWTH<br />ORIENTED<br />SOLUTIONS
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Image - Fixed size and alignment */}
                        <div className="flex justify-center lg:justify-center">
                            <div className="bg-purple-600 rounded-3xl p-4 shadow-xl relative overflow-hidden w-96 h-112">
                                <img
                                    src={girl}
                                    alt="Entrepreneur smiling"
                                    className="rounded-2xl w-full h-full object-cover"
                                />
                                <div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-lg shadow-md">
                                    <span className="font-bold text-lg text-purple-700">founder flow</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;