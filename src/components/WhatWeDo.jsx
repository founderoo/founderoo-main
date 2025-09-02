import React from 'react';
import girl from '../assets/girl.png'

const WhatWeDo = () => {
    return (
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-16 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Mobile Layout (xs to sm) */}
                <div className="sm:hidden space-y-6">
                    {/* Header */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute -top-1 -left-1 bg-purple-200 rounded-xl w-full h-full"></div>
                            <div className="bg-purple-600 text-white px-4 py-2 rounded-xl shadow-lg relative z-10">
                                <h2 className="text-xl font-bold">What We Do?</h2>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="text-center px-2">
                        <p className="text-gray-700 text-sm leading-relaxed">
                            We empower founders with the right resources, strategic insights, and powerful connections to build impactful startups, foster innovation, and drive long-term success in the entrepreneurial ecosystem.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center px-2">
                        <div className="bg-purple-600 rounded-2xl p-3 shadow-xl relative overflow-hidden w-full max-w-xs h-64">
                            <img
                                src={girl}
                                alt="Entrepreneur smiling"
                                className="rounded-xl w-full h-full object-cover"
                            />
                            <div className="absolute bottom-3 left-3 bg-white px-3 py-1 rounded-lg shadow-md">
                                <span className="font-bold text-sm text-purple-700">founder flow</span>
                            </div>
                        </div>
                    </div>

                    {/* Service Cards - Mobile Layout (2x3 grid) */}
                    <div className="px-2 grid grid-cols-2 gap-3">
                        <div className="bg-white rounded-lg border-l-4 border-purple-600 p-3 shadow-md">
                            <h3 className="text-xs font-bold text-purple-600 mb-1">Expert Insights</h3>
                            <p className="text-gray-600 text-xs">Strategic guidance</p>
                        </div>
                        <div className="bg-white rounded-lg border-l-4 border-purple-600 p-3 shadow-md">
                            <h3 className="text-xs font-bold text-purple-600 mb-1">Networking</h3>
                            <p className="text-gray-600 text-xs">Connect with entrepreneurs</p>
                        </div>
                        <div className="bg-white rounded-lg border-l-4 border-purple-600 p-3 shadow-md">
                            <h3 className="text-xs font-bold text-purple-600 mb-1">Idea Funding</h3>
                            <p className="text-gray-600 text-xs">Investment opportunities</p>
                        </div>
                        <div className="bg-white rounded-lg border-l-4 border-purple-600 p-3 shadow-md">
                            <h3 className="text-xs font-bold text-purple-600 mb-1">Branding</h3>
                            <p className="text-gray-600 text-xs">Brand development</p>
                        </div>
                        <div className="col-span-2 bg-white rounded-lg border-l-4 border-purple-600 p-3 shadow-md">
                            <h3 className="text-xs font-bold text-purple-600 mb-1">Growth Solutions</h3>
                            <p className="text-gray-600 text-xs">Scalable strategies for sustainable business growth</p>
                        </div>
                    </div>
                </div>

                {/* Tablet Layout (sm to lg) */}
                <div className="hidden sm:block lg:hidden space-y-8">
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
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
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

                    {/* Service Cards - Tablet Layout (3x2 grid) */}
                    <div className="px-4 grid grid-cols-3 gap-4">
                        <div className="bg-white rounded-xl border-l-4 border-purple-600 p-4 shadow-lg">
                            <h3 className="text-sm font-bold text-purple-600 mb-1">Expert Insights</h3>
                            <p className="text-gray-600 text-xs">Strategic guidance from industry professionals</p>
                        </div>
                        <div className="bg-white rounded-xl border-l-4 border-purple-600 p-4 shadow-lg">
                            <h3 className="text-sm font-bold text-purple-600 mb-1">Networking</h3>
                            <p className="text-gray-600 text-xs">Connect with like-minded entrepreneurs</p>
                        </div>
                        <div className="bg-white rounded-xl border-l-4 border-purple-600 p-4 shadow-lg">
                            <h3 className="text-sm font-bold text-purple-600 mb-1">Idea Funding</h3>
                            <p className="text-gray-600 text-xs">Investment opportunities for innovative concepts</p>
                        </div>
                        <div className="bg-white rounded-xl border-l-4 border-purple-600 p-4 shadow-lg">
                            <h3 className="text-sm font-bold text-purple-600 mb-1">Branding Strategies</h3>
                            <p className="text-gray-600 text-xs">Professional brand development</p>
                        </div>
                        <div className="col-span-2 bg-white rounded-xl border-l-4 border-purple-600 p-4 shadow-lg">
                            <h3 className="text-sm font-bold text-purple-600 mb-1">Growth Oriented Solutions</h3>
                            <p className="text-gray-600 text-xs">Scalable strategies for sustainable business growth</p>
                        </div>
                    </div>
                </div>

                {/* Desktop Layout (lg screens and up) - Enhanced Original Design */}
                <div className="hidden lg:block">
                    <div className="grid lg:grid-cols-2 xl:grid-cols-5 gap-6 lg:gap-8 xl:gap-12 items-start relative z-10">
                        {/* Left Side - Text and Services */}
                        <div className="xl:col-span-3 space-y-6 lg:space-y-8">
                            {/* What We Do Header */}
                            <div className="flex justify-center lg:justify-start">
                                <div className="relative">
                                    <div className="absolute -top-2 -left-2 bg-purple-200 rounded-2xl w-full h-full"></div>
                                    <div className="bg-purple-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-2xl shadow-lg relative z-10">
                                        <h2 className="text-2xl lg:text-3xl font-bold">What We Do?</h2>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="max-w-lg xl:max-w-xl text-left">
                                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                                    We empower founders with the right resources, strategic insights, and powerful connections to build impactful startups, foster innovation, and drive long-term success in the entrepreneurial ecosystem.
                                </p>
                            </div>

                            {/* Service Circles */}
                            <div className="relative w-full max-w-lg xl:max-w-xl py-4">
                                {/* Top row - 3 circles */}
                                <div className="flex justify-between items-center mb-4 lg:mb-6">
                                    <div className="w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-white rounded-full border-4 border-purple-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <span className="text-xs lg:text-xs xl:text-sm font-semibold text-center text-gray-700 leading-tight px-1">
                                            EXPERT<br />INSIGHTS
                                        </span>
                                    </div>
                                    <div className="w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-white rounded-full border-4 border-purple-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <span className="text-xs lg:text-xs xl:text-sm font-semibold text-center text-gray-700 leading-tight px-1">
                                            NETWORKING<br />OPPORTUNITIES
                                        </span>
                                    </div>
                                    <div className="w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-white rounded-full border-4 border-purple-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <span className="text-xs lg:text-xs xl:text-sm font-semibold text-center text-gray-700 leading-tight px-1">
                                            IDEA BASED<br />FUNDING
                                        </span>
                                    </div>
                                </div>

                                {/* Bottom row - 2 circles centered */}
                                <div className="flex justify-center space-x-12 lg:space-x-16 xl:space-x-20">
                                    <div className="w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-white rounded-full border-4 border-purple-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <span className="text-xs lg:text-xs xl:text-sm font-semibold text-center text-gray-700 leading-tight px-1">
                                            BRANDING<br />STRATEGIES
                                        </span>
                                    </div>
                                    <div className="w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-white rounded-full border-4 border-purple-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <span className="text-xs lg:text-xs xl:text-sm font-semibold text-center text-gray-700 leading-tight px-1">
                                            GROWTH<br />ORIENTED<br />SOLUTIONS
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Image */}
                        <div className="xl:col-span-2 flex justify-center lg:justify-end xl:justify-center">
                            <div className="bg-purple-600 rounded-2xl lg:rounded-3xl p-3 lg:p-4 shadow-xl relative overflow-hidden w-80 lg:w-96 xl:w-full max-w-md h-80 lg:h-96 xl:h-112 hover:shadow-2xl transition-shadow duration-300">
                                <img
                                    src={girl}
                                    alt="Entrepreneur smiling"
                                    className="rounded-xl lg:rounded-2xl w-full h-full object-cover"
                                />
                                <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 bg-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg shadow-md">
                                    <span className="font-bold text-base lg:text-lg text-purple-700">founder flow</span>
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