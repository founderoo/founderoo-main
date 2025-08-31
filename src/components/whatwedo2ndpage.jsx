import React from 'react';
import teamworkImg from '../assets/teamwork.jpg'; // Assuming you have this image

const WhatWeDo2 = () => {
    return (
        <div className="w-full py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                    <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
                        <div className="lg:w-3/5 space-y-4">
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                                What We Do?
                            </h2>
                            <p className="text-base lg:text-lg leading-relaxed">
                                We empower founders by delivering expert insights, strategic branding, and
                                unparalleled networking opportunities. Through growth-oriented solutions and
                                idea-based funding,
                            </p>
                            <p className="text-base lg:text-lg leading-relaxed">
                                we create an ecosystem where entrepreneurs thrive, innovate, and redefine
                                industries. To be the ultimate launchpad for founders, providing the essential
                                resources, strategies, and connections to transform ideas into impactful and
                                successful startups. We aim to shape the future of entrepreneurship by
                                fostering innovation, collaboration, and sustainable growth.
                            </p>
                        </div>
                        <div className="lg:w-2/5 flex justify-end">
                            <div className="w-96 h-80 rounded-2xl overflow-hidden shadow-xl">
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