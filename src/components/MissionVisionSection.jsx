import React from 'react';

const MissionVisionSection = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-16 font-sans">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Mission, Central F Logo, and Vision - Diagonal Layout */}
                <div className="relative min-h-[600px] flex items-center justify-center">

                    {/* Mission Card - Top Left */}
                    <div className="absolute top-0 left-0 lg:left-16 z-10">
                        <div className="bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden w-80 lg:w-96">
                            {/* Decorative purple triangle */}
                            <div className="absolute top-0 left-0 w-0 h-0 border-l-[60px] border-l-purple-600 border-b-[60px] border-b-transparent"></div>
                            <div className="relative z-10">
                                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                    <div className="w-6 h-6 bg-purple-600 rounded-full relative">
                                        <div className="absolute top-1 left-1 w-4 h-4 border-2 border-white rounded-full"></div>
                                        <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-purple-600 mb-3">Our Mission</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    We empower founders by delivering expert insights, strategic branding, and unparalleled networking opportunities. Through growth-oriented solutions and idea-based funding, we create an ecosystem where entrepreneurs thrive, innovate, and redefine industries.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Central F Logo */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center shadow-xl">
                            <span className="text-white font-bold text-3xl">F</span>
                        </div>
                    </div>

                    {/* Vision Card - Bottom Right */}
                    <div className="absolute bottom-0 right-0 lg:right-16 z-10">
                        <div className="bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden w-80 lg:w-96">
                            {/* Decorative purple triangle */}
                            <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[60px] border-r-purple-600 border-t-[60px] border-t-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-purple-600 mb-3">Our Vision</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    To be the ultimate launchpad for founders, providing the essential resources, strategies, and connections to transform ideas into impactful and successful startups. We aim to shape the future of entrepreneurship by fostering innovation, collaboration, and sustainable growth.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MissionVisionSection;