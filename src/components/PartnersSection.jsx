import React from 'react';
import { InfiniteSlider } from "@/components/InfiniteSlider.jsx";

const PartnersSection = () => {
    const partners = [
        {
            name: "Startup Bihar",
            logo: "SB",
            gradient: "from-purple-400 to-purple-600",
            description: "Innovation Hub"
        },
        {
            name: "Bihar Government",
            logo: "BG",
            gradient: "from-amber-400 to-amber-600",
            description: "Government Initiative"
        },
        {
            name: "Kirdhatutor",
            logo: "KT",
            gradient: "from-red-200 to-red-400",
            description: "Educational Platform"
        },
        {
            name: "iNfludex",
            logo: "iN",
            gradient: "from-indigo-600 to-blue-600",
            description: "Digital Solutions"
        }
    ];

    const PartnerCard = ({ partner }) => (
        <div className="group relative">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 min-w-[280px] border border-gray-100">
                {/* Logo/Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${partner.gradient} flex items-center justify-center mb-6 mx-auto`}>
                    <span className="text-white font-bold text-xl">{partner.logo}</span>
                </div>

                {/* Partner Name */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                    {partner.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm text-center">
                    {partner.description}
                </p>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
        </div>
    );

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                        </svg>
                        Our Partners
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Trusted by Leading
                        <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"> Organizations</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We collaborate with industry leaders and government initiatives to drive innovation and create meaningful impact across Bihar and beyond.
                    </p>
                </div>

                {/* Partners Slider */}
                <div className="relative">
                    <InfiniteSlider
                        gap={32}
                        duration={25}
                        durationOnHover={50}
                        className="py-4"
                    >
                        {partners.map((partner, index) => (
                            <PartnerCard key={index} partner={partner} />
                        ))}
                    </InfiniteSlider>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;