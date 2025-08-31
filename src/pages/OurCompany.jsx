import React from 'react';
import  man from   '../assets/man.jpg'
import contact from '../assets/contact.jpg'
import contact2 from '../assets/contact2.jpg'
import WhyWeDoThis from "@/components/WhyWeDoThis.jsx";
import WhoWeAre from "@/components/WhoWeAre.jsx";
import WhatWeDo2 from "@/components/whatwedo2ndpage.jsx";
import ceo from '../assets/ceo.png'
export default function CompanyLandingPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="relative px-8 pt-16 pb-8">
                <div className="max-w-6xl mx-auto">
                    {/* Title */}
                    <h1 className="text-6xl font-bold text-gray-800 text-center mb-4">
                        Our Company
                    </h1>

                    {/* Subtitle */}
                    <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
                        When you need support to improve your business, come to us — we're here to help you reach your goals.
                        Just sit back, and watch your vision come to life.
                    </p>

                    {/* Main Content Area with Decorative Elements */}
                    <div className="relative">
                        {/* Left decorative dots */}
                        <div className="absolute left-0 top-8 grid grid-cols-10 gap-1 opacity-30">
                            {Array.from({ length: 100 }, (_, i) => (
                                <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                            ))}
                        </div>

                        {/* Right decorative dots */}
                        <div className="absolute right-0 bottom-8 grid grid-cols-10 gap-1 opacity-30">
                            {Array.from({ length: 100 }, (_, i) => (
                                <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                            ))}
                        </div>

                        {/* Hero Image Container */}
                        <div className="relative mx-auto max-w-4xl">
                            <div className="relative bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-1 shadow-2xl">
                                <div className="bg-white rounded-3xl p-6">
                                    <img
                                        src={man}
                                        alt="Team meeting"
                                        className="w-full h-64 object-cover rounded-2xl"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Overview Section */}
            <div className="px-8 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-start gap-12">
                        {/* Overview Text */}
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl font-bold text-gray-800 mb-8">
                                Overview
                            </h2>

                            <div className="text-gray-600 leading-relaxed space-y-4">
                                <p>
                                    <strong>Founderoo</strong> is a platform built to empower early-stage
                                    founders and entrepreneurs with the tools, insights, and
                                    connections they need to build impactful startups. From
                                    finding the right freelancers to accessing curated
                                    resources and expert guidance, Founderoo is a one-stop
                                    hub for turning bold ideas into successful ventures. Our
                                    mission is to simplify the startup journey and foster
                                    innovation by connecting builders with the right support
                                    at the right time.
                                </p>
                            </div>
                        </div>

                        {/* Overview Image */}
                        <div className="lg:w-1/2">
                            <div className="relative">
                                <div className="bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-2xl p-1 shadow-xl">
                                    <div className="bg-white rounded-2xl p-4">
                                        <img
                                            src={contact}
                                            alt="Team collaboration"
                                            className="w-full h-64 object-cover rounded-xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <WhatWeDo2/>

            <WhoWeAre/>
            <WhyWeDoThis/>

            {/* History Section */}
            <div className="px-8 py-16 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-start gap-8">
                        {/* History Content */}
                        <div className="lg:w-2/3">
                            <div className="bg-gradient-to-r from-purple-400 to-purple-500 rounded-t-2xl px-6 py-3">
                                <h3 className="text-white font-semibold text-lg">History</h3>
                            </div>

                            <div className="bg-gradient-to-br from-purple-100 to-blue-50 rounded-b-2xl p-8 relative">
                                {/* Quote icon */}
                                <div className="text-6xl text-purple-300 font-serif absolute top-4 left-6">"</div>

                                <div className="ml-12 text-gray-700 leading-relaxed">
                                    <p>
                                        Founderoo was established in 2022 as a strategic solution, brand of Branding, absorbing innovation and trending into committed to empowering visionaries and entrepreneurs. Recognizing a critical gap in early-stage startup support, we embarked on a mission Founderoo to focus exclusively on the unique challenges and opportunities faced by startup founders.
                                    </p>
                                    <br />
                                    <p>
                                        With a mission to empower founders with the right resources, strategic insights, and powerful connections needed to thrive, Founderoo has become a trusted player in the entrepreneurial ecosystem.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* History Image */}
                        <div className="lg:w-1/3">
                            <div className="bg-gradient-to-br from-blue-200 to-blue-400 rounded-2xl p-1">
                                <div className="bg-white rounded-2xl p-4">
                                    <img
                                        src={contact2}
                                        alt="Business meeting"
                                        className="w-full h-48 object-cover rounded-xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Company Evolution Section */}
            <div className="px-8 py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        A Company Evolution
                    </h2>

                    <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
                        We're Very Proud of The Path We've taken. Explore our journey, but know as the company we are today.
                    </p>

                    {/* Timeline */}
                    <div className="flex justify-center items-center space-x-8 mb-16">
                        <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">1</span>
                        </div>
                        <div className="w-24 h-1 bg-purple-300 relative">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-purple-300"></div>
                        </div>
                        <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">2</span>
                        </div>
                        <div className="w-24 h-1 bg-purple-300 relative">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-400 to-purple-300"></div>
                        </div>
                        <div className="w-12 h-12 bg-purple-300 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">3</span>
                        </div>
                        <div className="w-24 h-1 bg-purple-200"></div>
                        <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                            <span className="text-gray-600 font-bold">4</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Founder Section */}
            <div className="px-8 py-16 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="border-4 border-purple-500 rounded-3xl p-8 relative">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">
                            Our <span className="text-purple-500">Founder</span>
                        </h2>

                        <div className="flex gap-8">
                            {/* Founder Image Placeholder */}
                            <div className="w-32 h-40 bg-gray-300 rounded-lg relative">
                                <div className="absolute bottom-2 left-2">
                                    <div className="w-30 h-38 bg-blue-600 rounded flex items-center justify-center">
                                       <img src={ceo}/>
                                    </div>
                                </div>
                            </div>

                            {/* Quote Section */}
                            <div className="flex-1 relative">
                                <div className="text-4xl text-purple-300 font-serif absolute -top-2 -left-2">"</div>
                                <p className="text-purple-500 font-semibold mb-4 ml-6">Say</p>

                                {/* Quote placeholder */}
                                <div className="bg-gray-200 rounded-lg p-6 ml-6 relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 border-2 border-gray-400 relative">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-full h-px bg-gray-400 absolute top-1/2 left-0 transform -translate-y-1/2 rotate-45"></div>
                                                <div className="w-full h-px bg-gray-400 absolute top-1/2 left-0 transform -translate-y-1/2 -rotate-45"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-6xl text-purple-300 font-serif absolute bottom-4 right-4">"</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}