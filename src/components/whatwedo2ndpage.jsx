import React from 'react';
import teamworkImg from '../assets/teamwork.jpg';

const WhatWeDo2 = () => {
    return (
        <div className="w-full py-6 md:py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 relative overflow-hidden">
                    <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 relative z-10">
                        {/* Text Content */}
                        <div className="w-full lg:w-3/5 space-y-4 text-center lg:text-left">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                                What We Do?
                            </h2>
                            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                                We empower founders by delivering expert insights, strategic branding, and
                                unparalleled networking opportunities. Through growth-oriented solutions and
                                idea-based funding,
                            </p>
                            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                                we create an ecosystem where entrepreneurs thrive, innovate, and redefine
                                industries. To be the ultimate launchpad for founders, providing the essential
                                resources, strategies, and connections to transform ideas into impactful and
                                successful startups. We aim to shape the future of entrepreneurship by
                                fostering innovation, collaboration, and sustainable growth.
                            </p>
                        </div>

                        {/* Image Section */}
                        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
                            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none lg:w-80 xl:w-96 h-64 sm:h-72 md:h-80 lg:h-80 rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src={teamworkImg}
                                    alt="Person working with multiple screens"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo2;