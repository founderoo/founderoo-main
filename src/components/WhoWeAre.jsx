import React from 'react';
import founder1 from '../assets/Ceo.png';
import founder2 from '../assets/cto.png';

const WhoWeAre = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 md:my-16">
            <div className="bg-purple-100 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-6 md:gap-8 shadow-xl">
                {/* Text Content */}
                <div className="w-full lg:w-2/3 text-gray-800 text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-purple-900">
                        Who We Are?
                    </h2>
                    <p className="text-base sm:text-lg leading-relaxed max-w-none lg:max-w-2xl">
                        We're a passionate team of entrepreneurs, creatives, and problem-solvers who believe in the power of startups to shape the future. At Founder Flow, we've built a platform that bridges the gap between ambitious founders and the resources they need to thrive—from expert freelancers to strategic insights and community support. We exist to champion innovation, simplify the startup journey, and help big ideas come to life.
                    </p>
                </div>

                {/* Images Section */}
                <div className="w-full lg:w-1/3 flex-shrink-0 flex justify-center items-center py-6 lg:py-0">
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
                        {/* Primary image (CEO) - positioned as the main focal point */}
                        <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 z-20">
                            <img
                                src={founder1}
                                alt="CEO - Smiling male founder with glasses"
                                className="w-full h-full object-cover rounded-full shadow-lg border-3 md:border-4 border-white"
                            />
                        </div>

                        {/* Secondary image (CTO) - positioned behind and to the left */}
                        <div className="absolute bottom-0 left-0 w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 z-10">
                            <img
                                src={founder2}
                                alt="CTO - Smiling"
                                className="w-full h-full object-cover rounded-full shadow-lg border-3 md:border-4 border-white"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;