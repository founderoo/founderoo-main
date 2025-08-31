import React, { useState } from 'react';
import spiral from '../assets/spiral.png';
import faq from '../assets/faq.jpg';

// Reusable FAQ Item component for cleaner code
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-300 py-4">
            <button
                className="flex justify-between items-center w-full text-left text-lg font-semibold text-gray-800 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{question}</span>
                <span>{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
                <p className="mt-2 text-gray-600 leading-relaxed">
                    {answer}
                </p>
            )}
        </div>
    );
};

const FeaturesAndFaq = () => {
    return (
        <div className="font-sans">
            {/* FAQ Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Image */}
                    <div className="relative p-8 border-4 border-purple-500 rounded-3xl overflow-hidden">
                        <div className="relative z-10">
                            <img
                                src={faq}
                                alt="Freelance FAQ"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                        {/* Purple frame effect (optional) */}
                        <div className="absolute inset-0 border-4 border-purple-500 rounded-3xl" style={{ transform: 'rotate(-5deg)' }}></div>
                    </div>

                    {/* Right Side - FAQ Content */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-sm font-bold text-purple-600 uppercase tracking-wider">FAQs</h3>
                            <h2 className="text-4xl font-bold text-gray-900 leading-tight">Get Every Answer<br />From Here</h2>
                        </div>
                        <div className="mt-8 space-y-4">
                            <FAQItem
                                question="Who can use Founderoo?"
                                answer="Founderoo is designed for freelancers, businesses, and anyone looking to connect and collaborate on digital projects. It's a versatile platform for all professional types."
                            />
                            <FAQItem
                                question="How can businesses find the right freelancer?"
                                answer="Our platform uses advanced filtering and a detailed profile system, allowing businesses to search for freelancers based on skills, experience, and ratings to find the perfect match for their project."
                            />
                            <FAQItem
                                question="How does Founderoo ensure quality and security?"
                                answer="We have a robust verification process for all users. Our secure payment system and project management tools ensure that all transactions and collaborations are protected and transparent."
                            />
                            <FAQItem
                                question="Can I manage multiple projects on Founderoo?"
                                answer="Yes, our dashboard is built to handle multiple projects simultaneously. You can easily switch between projects, track progress, and communicate with different teams from one central location."
                            />
                            <FAQItem
                                question="How can I contact customer support?"
                                answer="Our dedicated customer support team is available 24/7. You can reach us via our in-app chat, email, or by submitting a support ticket through our help center."
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Innovative Space for Problem Solver Section */}
            <div className="bg-purple-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                            Innovative Space for Problem Solver
                        </h2>
                        <p className="mt-4 max-w-lg text-lg leading-relaxed">
                            We Are World Unique Marketplace For Freelancer. Helping in profile creation and Trend setter Regular training, providing a large number of client and skilled candidate on a single platform.
                        </p>
                        <button className="mt-8 bg-purple-600 hover:bg-amber-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg">
                            Get Started
                        </button>
                    </div>
                    {/* Abstract shapes from the image - Reverted to absolute with responsive sizing */}
                    <div className="hidden md:block">
                        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px]">
                            <img
                                src={spiral} // Placeholder for your spiral image
                                alt="Abstract Spiral Shape"
                                className="w-full h-full object-contain" // object-contain to ensure the image fits without cropping
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesAndFaq;