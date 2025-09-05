import React from 'react';
import { Users, Building2, Heart, Handshake, Target, Globe } from 'lucide-react';

export default function CollaborationsPage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Header Section */}
            <div className="px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                <div className="max-w-6xl mx-auto">
                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 text-center mb-4">
                        Our Collaborations
                    </h1>

                    {/* Subtitle */}
                    <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16 leading-relaxed text-sm sm:text-base">
                        Building meaningful partnerships that drive innovation and create positive impact.
                        Together, we're shaping a better future through strategic alliances.
                    </p>

                    {/* Main Content Area with Decorative Elements */}
                    <div className="relative">
                        {/* Hero Image Container */}
                        <div className="relative mx-auto max-w-4xl">
                            <div className="relative bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl p-1 shadow-2xl">
                                <div className="bg-white rounded-3xl p-4 sm:p-6">
                                    <div className="w-full h-48 sm:h-56 lg:h-64 bg-gradient-to-r from-purple-300 to-purple-100 rounded-2xl flex items-center justify-center">
                                        <div className="text-center px-4">
                                            <Handshake className="w-12 h-12 sm:w-16 sm:h-16 text-purple-600 mx-auto mb-4" />
                                            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Partnership in Action</h3>
                                            <p className="text-gray-600 text-sm sm:text-base">Connecting visions, creating impact</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overview Section */}
            <div className="px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
                            Collaboration Overview
                        </h2>
                        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-sm sm:text-base">
                            At <strong>Founder Flow</strong>, we believe in the power of collaboration to drive meaningful change.
                            Our partnerships span across social initiatives and corporate ventures, creating a diverse ecosystem
                            of innovation and impact. Through strategic alliances, we amplify our mission to empower entrepreneurs
                            while contributing to social good and business excellence.
                        </p>
                    </div>
                </div>
            </div>

            {/* Social Collaboration Section */}
            <div className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                        {/* Social Collaboration Content */}
                        <div className="lg:w-1/2">
                            <div className="flex items-center mb-6">
                                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 mr-3" />
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                                    Social Collaboration
                                </h2>
                            </div>

                            <div className="text-gray-600 leading-relaxed space-y-4 text-sm sm:text-base">
                                <p>
                                    We are proud to partner with dedicated organizations that share our commitment
                                    to social impact and community development. Our social collaboration initiatives
                                    focus on empowering underserved communities, supporting educational programs,
                                    and fostering entrepreneurship among emerging founders.
                                </p>

                                <div className="bg-gradient-to-br from-purple-100 to-blue-50 rounded-lg p-4 sm:p-6 my-6">
                                    <h4 className="font-semibold text-gray-800 mb-2">Partner Organization</h4>
                                    <div className="flex items-center">
                                        <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mr-2" />
                                        <span className="text-purple-700 font-medium text-sm sm:text-base">Name will be disclosed soon</span>
                                    </div>
                                    <p className="text-gray-600 mt-3 text-xs sm:text-sm">
                                        We're excited to announce our upcoming partnership with a leading NGO
                                        that aligns with our values and mission. Stay tuned for more details!
                                    </p>
                                </div>

                                <p>
                                    This collaboration represents our commitment to giving back to society and
                                    creating sustainable change through entrepreneurship and innovation.
                                </p>
                            </div>
                        </div>

                        {/* Social Collaboration Visual */}
                        <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
                            <div className="relative">
                                <div className="bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-2xl p-1 shadow-xl">
                                    <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8">
                                        <div className="h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-purple-100 to-blue-50 rounded-xl flex items-center justify-center">
                                            <div className="text-center px-4">
                                                <Users className="w-16 h-16 sm:w-20 sm:h-20 text-purple-500 mx-auto mb-4" />
                                                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Community Impact</h3>
                                                <p className="text-gray-600 text-sm sm:text-base">Empowering communities through collaboration</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Corporate Collaboration Section */}
            <div className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                        {/* Corporate Collaboration Visual */}
                        <div className="lg:w-1/2 lg:order-1 w-full">
                            <div className="relative">
                                <div className="bg-gradient-to-br from-purple-500 via-purple-600 to-purple-800 rounded-2xl p-1 shadow-xl">
                                    <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8">
                                        <div className="h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                                            <div className="text-center px-4">
                                                <Building2 className="w-16 h-16 sm:w-20 sm:h-20 text-purple-500 mx-auto mb-4" />
                                                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Corporate Excellence</h3>
                                                <p className="text-gray-600 text-sm sm:text-base">Strategic partnerships for business growth</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Corporate Collaboration Content */}
                        <div className="lg:w-1/2 lg:order-2 mt-8 lg:mt-0">
                            <div className="flex items-center mb-6">
                                <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 mr-3" />
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                                    Corporate Collaboration
                                </h2>
                            </div>

                            <div className="text-gray-600 leading-relaxed space-y-4 text-sm sm:text-base">
                                <p>
                                    Our corporate collaboration initiatives connect us with forward-thinking businesses
                                    that recognize the value of innovation and entrepreneurship. These partnerships
                                    create synergies that benefit startups, established companies, and the broader
                                    business ecosystem.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                                    <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <Target className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 mb-2" />
                                        <h5 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Strategic Alliances</h5>
                                        <p className="text-xs sm:text-sm text-gray-600">Building long-term partnerships for mutual growth</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 mb-2" />
                                        <h5 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Global Reach</h5>
                                        <p className="text-xs sm:text-sm text-gray-600">Expanding opportunities across markets</p>
                                    </div>
                                </div>

                                <p>
                                    Through corporate collaborations, we facilitate knowledge exchange, resource sharing,
                                    and market access opportunities that accelerate startup growth and drive business innovation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="px-8 py-16 bg-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Why Collaborate With Us?
                    </h2>

                    <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
                        Our collaborative approach creates value for all stakeholders while driving meaningful impact across communities and industries.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
                            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Shared Impact</h4>
                            <p className="text-gray-600">
                                Together, we create lasting positive change in communities and markets.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Target className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Strategic Value</h4>
                            <p className="text-gray-600">
                                Our partnerships deliver measurable results and competitive advantages.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
                            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Globe className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Global Network</h4>
                            <p className="text-gray-600">
                                Access our extensive network of entrepreneurs, innovators, and changemakers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="px-8 py-16 bg-gradient-to-r from-purple-800 to-purple-500">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Collaborate?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Join us in creating meaningful partnerships that drive innovation and positive impact.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                            Partner With Us
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
