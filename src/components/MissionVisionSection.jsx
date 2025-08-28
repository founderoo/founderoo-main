import React from 'react';

const MissionVisionSection = () => {
    return (
        <div className="relative font-sans bg-blue-50 min-h-screen overflow-hidden">

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Bottom Section: Mission, Vision, and F Logo with connecting lines */}
                <div className="relative min-h-[600px] flex items-center justify-center mt-24">
                    {/* Dashed vertical line */}
                    {/*<div className="absolute top-0 bottom-0 w-px bg-purple-400 border-l border-dashed border-purple-400 transform -translate-x-1/2 left-1/2"></div>*/}

                    {/* Mission Card (Left) */}
                    <div className="absolute z-10 w-80 lg:w-96" style={{ top: '10%', left: '55%', transform: 'translateX(-120%)' }}>
                        <div className="relative bg-white rounded-2xl shadow-xl p-6">
                            {/* Decorative purple banner with corner cut */}
                            <div className="absolute top-0 left-0 w-0 h-0 border-l-[60px] border-l-purple-600 border-b-[60px] border-b-transparent rounded-tl-2xl"></div>

                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-purple-600 mb-2">Our Mission</h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    We empower founders by delivering expert insights, strategic branding, and unparalleled networking opportunities. Through growth-oriented solutions and idea-based funding, we create an ecosystem where entrepreneurs thrive, innovate, and redefine industries.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Central 'F' Logo */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                        <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                            <span className="text-white font-bold text-4xl">F</span>
                        </div>
                    </div>

                    {/* Vision Card (Right) */}
                    <div className="absolute z-10 w-80 lg:w-96" style={{ bottom: '10%', left: '45%', transform: 'translateX(20%)' }}>
                        <div className="relative bg-white rounded-2xl shadow-xl p-6">
                            {/* Decorative purple banner with corner cut */}
                            <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[60px] border-r-purple-600 border-t-[60px] border-t-transparent rounded-br-2xl"></div>

                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-purple-600 mb-2">Our Vision</h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
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
