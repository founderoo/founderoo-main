import React from 'react';
import man from '../assets/man.jpg'
import contact from '../assets/contact.jpg'
import contact2 from '../assets/contact2.jpg'
import WhyWeDoThis from "@/components/WhyWeDoThis.jsx";
import WhoWeAre from "@/components/WhoWeAre.jsx";
import WhatWeDo2 from "@/components/whatwedo2ndpage.jsx";
import ceo from '../assets/Ceo.png'

export default function CompanyLandingPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="relative px-4 sm:px-8 pt-8 sm:pt-16 pb-4 sm:pb-8">
                <div className="max-w-6xl mx-auto">
                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 text-center mb-4">
                        Our Company
                    </h1>

                    {/* Subtitle */}
                    <p className="text-sm sm:text-base text-gray-600 text-center max-w-2xl mx-auto mb-8 sm:mb-16 leading-relaxed px-4">
                        When you need support to improve your business, come to us — we're here to help you reach your goals.
                        Just sit back, and watch your vision come to life.
                    </p>

                    {/* Main Content Area with Decorative Elements */}
                    <div className="relative">


                        {/* Hero Image Container */}
                        <div className="relative mx-auto max-w-4xl">
                            <div className="relative bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl sm:rounded-3xl p-1 shadow-2xl">
                                <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-6">
                                    <img
                                        src={man}
                                        alt="Team meeting"
                                        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl sm:rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overview Section */}
            <div className="px-4 sm:px-8 py-8 sm:py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                        {/* Overview Text */}
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-8">
                                Overview
                            </h2>

                            <div className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-4">
                                <p>
                                    <strong>Founder Flow</strong> is a platform built to empower early-stage
                                    founders and entrepreneurs with the tools, insights, and
                                    connections they need to build impactful startups. From
                                    finding the right freelancers to accessing curated
                                    resources and expert guidance, Founder Flow is a one-stop
                                    hub for turning bold ideas into successful ventures. Our
                                    mission is to simplify the startup journey and foster
                                    innovation by connecting builders with the right support
                                    at the right time.
                                </p>
                            </div>
                        </div>

                        {/* Overview Image */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative">
                                <div className="bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-xl sm:rounded-2xl p-1 shadow-xl">
                                    <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4">
                                        <img
                                            src={contact}
                                            alt="Team collaboration"
                                            className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg sm:rounded-xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <WhatWeDo2 />
            <WhoWeAre />
            <WhyWeDoThis />

            {/* History Section */}
            <div className="px-4 sm:px-8 py-8 sm:py-16 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
                        {/* History Content */}
                        <div className="w-full lg:w-2/3">
                            <div className="bg-gradient-to-r from-purple-400 to-purple-500 rounded-t-xl sm:rounded-t-2xl px-4 sm:px-6 py-3">
                                <h3 className="text-white font-semibold text-base sm:text-lg">History</h3>
                            </div>

                            <div className="bg-gradient-to-br from-purple-100 to-blue-50 rounded-b-xl sm:rounded-b-2xl p-4 sm:p-6 lg:p-8 relative">
                                {/* Quote icon */}
                                <div className="text-3xl sm:text-4xl lg:text-6xl text-purple-300 font-serif absolute top-2 sm:top-4 left-3 sm:left-6">"</div>

                                <div className="ml-6 sm:ml-8 lg:ml-12 text-sm sm:text-base text-gray-700 leading-relaxed">
                                    <p>
                                        Founder Flow was established in 2022 as a strategic solution, brand of Branding, absorbing innovation and trending into committed to empowering visionaries and entrepreneurs. Recognizing a critical gap in early-stage startup support, we embarked on a mission Founderoo to focus exclusively on the unique challenges and opportunities faced by startup founders.
                                    </p>
                                    <br />
                                    <p>
                                        With a mission to empower founders with the right resources, strategic insights, and powerful connections needed to thrive, Founderoo has become a trusted player in the entrepreneurial ecosystem.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* History Image */}
                        <div className="w-full lg:w-1/3">
                            <div className="bg-gradient-to-br from-blue-200 to-blue-400 rounded-xl sm:rounded-2xl p-1">
                                <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4">
                                    <img
                                        src={contact2}
                                        alt="Business meeting"
                                        className="w-full h-40 sm:h-44 lg:h-48 object-cover rounded-lg sm:rounded-xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Company Evolution Section */}
            <div className="px-4 sm:px-8 py-8 sm:py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                        A Company Evolution
                    </h2>

                    <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
                        We're Very Proud of The Path We've taken. Explore our journey, but know as the company we are today.
                    </p>

                    {/* Timeline - Responsive */}
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-8 mb-8 sm:mb-16">
                        <div className="flex items-center space-x-4 sm:space-x-0">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm sm:text-base">1</span>
                            </div>
                            <div className="w-16 h-1 sm:w-24 bg-purple-300 relative sm:hidden">
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-purple-300"></div>
                            </div>
                        </div>

                        <div className="hidden sm:block w-16 lg:w-24 h-1 bg-purple-300 relative">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-purple-300"></div>
                        </div>

                        <div className="flex items-center space-x-4 sm:space-x-0">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-400 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm sm:text-base">2</span>
                            </div>
                            <div className="w-16 h-1 sm:w-24 bg-purple-300 relative sm:hidden">
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-400 to-purple-300"></div>
                            </div>
                        </div>

                        <div className="hidden sm:block w-16 lg:w-24 h-1 bg-purple-300 relative">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-400 to-purple-300"></div>
                        </div>

                        <div className="flex items-center space-x-4 sm:space-x-0">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-300 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm sm:text-base">3</span>
                            </div>
                            <div className="w-16 h-1 sm:w-24 bg-purple-200 sm:hidden"></div>
                        </div>

                        <div className="hidden sm:block w-16 lg:w-24 h-1 bg-purple-200"></div>

                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-200 rounded-full flex items-center justify-center">
                            <span className="text-gray-600 font-bold text-sm sm:text-base">4</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Founder Section */}
            <div className="px-4 sm:px-8 py-8 sm:py-16 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="border-2 sm:border-4 border-purple-500 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 relative">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                            Our <span className="text-purple-500">Founder</span>
                        </h2>

                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 lg:gap-8 mt-4">
                            {/* Founder Image */}
                            <div className="relative flex-shrink-0">
                                <img
                                    src={ceo}
                                    alt="Founder"
                                    className="w-32 h-40 sm:w-40 sm:h-48 lg:w-48 lg:h-60 rounded-lg object-cover"
                                />
                                <div className="absolute bottom-2 left-2 bg-blue-600 rounded p-1">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Quote Section */}
                            <div className="flex-1 relative w-full">
                                <p className="text-purple-500 font-semibold mb-2 text-base sm:text-lg lg:text-xl text-center sm:text-left sm:ml-4">Say</p>
                                <div className="bg-gray-200 rounded-lg p-4 sm:p-6 relative flex items-center justify-center min-h-[80px] sm:min-h-[100px] sm:ml-4">
                                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg italic text-center">
                                        &ldquo;Our vision is to empower businesses with innovative solutions.&rdquo;
                                    </p>
                                </div>
                                <div className="text-3xl sm:text-4xl lg:text-6xl text-purple-300 font-serif absolute -top-2 sm:top-0 left-1/2 sm:-left-6 transform -translate-x-1/2 sm:translate-x-0 -translate-y-1/2">&ldquo;</div>
                                <div className="text-3xl sm:text-4xl lg:text-6xl text-purple-300 font-serif absolute -bottom-2 sm:bottom-0 left-1/2 sm:-right-6 transform -translate-x-1/2 sm:translate-x-0 translate-y-1/2">&rdquo;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
