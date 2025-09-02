import React from 'react';
import founder1 from '../assets/Ceo.png';
import founder2 from '../assets/cto.png';

const WhyWeDoThis = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 md:my-16">
            <div className="bg-purple-100 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row-reverse items-center gap-6 md:gap-8 shadow-xl">
                {/* Text Content */}
                <div className="w-full lg:w-2/3 text-gray-800 text-center lg:text-right">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-purple-900">
                        Why We Do This?
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-none lg:max-w-2xl lg:ml-auto">
                        We're passionate about empowering founders and fostering innovation. Our mission is to provide the resources, connections, and support entrepreneurs need to succeed. We believe in making the startup journey simpler and more accessible. By doing so, we help ideas grow into impactful businesses.
                    </p>
                </div>

                {/* Images Section */}
                <div className="w-full lg:w-1/3 flex-shrink-0 flex justify-center items-center py-6 lg:py-0">
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
                        {/* Primary image (CEO) - positioned as the main focal point */}
                        <div className="absolute top-0 left-0 w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 z-20">
                            <img
                                src={founder1}
                                alt="CEO - Man in a suit"
                                className="w-full h-full object-cover rounded-full shadow-lg border-3 md:border-4 border-white"
                            />
                        </div>

                        {/* Secondary image (CTO) - positioned behind and to the right */}
                        <div className="absolute bottom-0 right-0 w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 z-10">
                            <img
                                src={founder2}
                                alt="CTO - Woman with blonde hair"
                                className="w-full h-full object-cover rounded-full shadow-lg border-3 md:border-4 border-white"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyWeDoThis;