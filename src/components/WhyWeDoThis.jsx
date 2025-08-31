import React from 'react';
import founder1 from '../assets/Ceo.png'; // Assuming you have these images
import founder2 from '../assets/cto.png';

const WhyWeDoThis = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
            <div className="bg-purple-100 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row-reverse items-center gap-8 shadow-xl">
                <div className="lg:w-2/3 text-gray-800 text-right">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-purple-900">
                        Why We Do This?
                    </h2>
                    <p className="text-lg leading-relaxed">
                        We're passionate about empowering founders and fostering innovation. Our mission is to provide the resources, connections, and support entrepreneurs need to succeed. We believe in making the startup journey simpler and more accessible. By doing so, we help ideas grow into impactful businesses.
                    </p>
                </div>
                <div className="lg:w-1/3 flex-shrink-0 relative flex justify-center items-center py-10 lg:py-0">
                    <div className="relative w-64 h-64 mx-auto">
                        {/* The main overlapping image (man in a suit) */}
                        <img
                            src={founder1}
                            alt="Man in a suit"
                            className="w-full h-full object-cover rounded-full shadow-lg border-4 right-20 border-white z-10 relative"
                        />
                        {/* The secondary overlapping image (woman with blonde hair) */}
                        <img
                            src={founder1}
                            alt="Woman with blonde hair"
                            className="w-56 h-56 object-cover rounded-full shadow-lg border-4 border-white absolute top-10 right-0 left-10 transform translate-x-1/4 -translate-y-1/4"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};



export default WhyWeDoThis;