import React from 'react';
import Ceo from '../assets/Ceo.png';
import cto from '../assets/cto.png';
import hr from '../assets/hr.png';

const TeamMemberCard = ({ name, title, imageUrl }) => {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="relative w-48 h-64 md:w-64 md:h-80 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
                <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
                <a href="#" className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-purple-500 hover:bg-gray-100 transition-colors">
                    <svg className="w-6 h-6 text-blue-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.761s.784-1.76 1.75-1.761 1.75.79 1.75 1.761-.783 1.761-1.75 1.761zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.742 7 2.457v6.778z" />
                    </svg>
                </a>
            </div>
            <div className="mt-4 w-48 md:w-64">
                <div className="border-l-2 border-purple-600 pl-4 py-1">
                    <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
                    <p className="text-gray-600 mt-1">{title}</p>
                </div>
            </div>
        </div>
    );
};

const BoardOfManagementSection = () => {
    return (
        <div className="bg-white py-16 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-purple-600 text-lg font-medium">Meet the Team</p>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">
                    Our Board of Management
                </h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                    <TeamMemberCard
                        name="Ramanand Thakur"
                        title="Founder & CEO"
                        imageUrl={cto}
                    />
                    <TeamMemberCard
                        name="Ramanand Thakur"
                        title="Founder & CEO"
                        imageUrl={Ceo}
                    />
                    <TeamMemberCard
                        name="Ramanand Thakur"
                        title="Founder & CEO"
                        imageUrl={hr}
                    />
                </div>
                <div className="mt-12">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg">
                        View All Team
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BoardOfManagementSection;