import React from 'react';
import founder1 from '../assets/Ceo.png'; // Assuming you have these images
import founder2 from '../assets/cto.png';

const WhoWeAre = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
            <div className="bg-purple-100 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8 shadow-xl">
                <div className="lg:w-2/3 text-gray-800">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-purple-900">
                        Who We Are?
                    </h2>
                    <p className="text-lg leading-relaxed">
                        We're a passionate team of entrepreneurs, creatives, and problem-solvers who believe in the power of startups to shape the future. At Founderoo, we've built a platform that bridges the gap between ambitious founders and the resources they need to thrive—from expert freelancers to strategic insights and community support. We exist to champion innovation, simplify the startup journey, and help big ideas come to life.
                    </p>
                </div>
                <div className="lg:w-1/3 flex-shrink-0 relative flex justify-center items-center py-10 lg:py-0">
                    <div className="relative w-64 h-64 mx-auto">
                        {/* The main overlapping image (male founder) */}
                        <img
                            src={founder1}
                            alt="Smiling male founder with glasses"
                            className="w-full h-full object-cover rounded-full shadow-lg border-4 left-20 border-white z-10 relative"
                        />
                        {/* The secondary overlapping image (female founder) */}
                        <img
                            src={founder1}
                            alt="Smiling female founder"
                            className="w-56 h-56 object-cover rounded-full shadow-lg border-4 border-white absolute top-5 left-10 transform -translate-x-1/2 -translate-y-1/4"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;