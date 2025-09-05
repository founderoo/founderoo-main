import React from 'react';
import Ceo from '../assets/Ceo.png';
import { Badge } from "@/components/ui/badge";
import {Linkedin} from "lucide-react";

const founder = {
    name: "Ramanand Thakur",
    role: "Founder & CEO",
    image: Ceo,
    description: "Ramanand is the visionary behind the Founder Flow. With a sharp eye for innovation and deep understanding of Startup's future he is dedicatedly contributing towards Bihar's changing startup ecosystem. Bold, strategic and always future focused, he is igniting a movement of Brand - first entrepreneurship.",
    expertise: ["CompanyVision", "Leadership", "Fundraising", "Branding", "Market Research"],
    linkedin: "https://www.linkedin.com/in/ramanand-thakur"
};

const BoardOfManagementSection = () => {
    return (
        <div className="bg-white py-16 font-sans">
            {/* founder section  */}
            <section id="founder" className="relative py-2xl-token lg:py-3xl-token bg-gray-50 dark:bg-neutral-900 overflow-hidden">
                {/* Decorative background shapes */}
                <div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[900px] h-[900px] bg-[#5F2B8D] dark:bg-[#9333EA] opacity-5 rounded-full z-0"
                    aria-hidden="true"
                />
                <div className="relative max-w-6xl mx-auto px-md-token sm:px-lg-token lg:px-3xl-token flex flex-col lg:flex-row items-center gap-16 z-10">

                    {/* Founder Image */}
                    <div className="w-full lg:w-[42%] flex justify-center lg:justify-end mb-12 lg:mb-0">
                        <div className="overflow-hidden rounded-2xl shadow-xl border border-gray-200 dark:border-neutral-800 bg-white">
                            <img
                                src={founder.image}
                                alt={founder.name}
                                className="w-[340px] h-[420px] object-cover object-top"
                            />
                        </div>
                    </div>

                    {/* Founder Info */}
                    <div className="w-full lg:w-[58%] flex flex-col justify-center">
                        <h2 className="text-5xl lg:text-6xl font-bold body-text-align mb-3 leading-tight">
                            <span className="text-[#5F2B8D]">{founder.name.split(" ")[0]}</span><br />
                            <span className="text-[#FFD64A]">{founder.name.split(" ")[1]}</span>
                        </h2>
                        <h3 className="heading-h3 body-text-align mb-6">{founder.role}</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-120 mb-7 max-w-2xl body-text-align">
                            {founder.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {founder.expertise.map((skill, i) => (
                                <Badge key={i} className="bg-[#F4F3F8] text-[#5F2B8D] border-none dark:bg-white/10 dark:text-white text-[14px] font-semibold">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                        <div>
                            <a
                                href={founder.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2 bg-transparent border-2 border-[#5F2B8D] text-[#5F2B8D] hover:bg-[#5F2B8D] hover:text-white rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105"
                            >
                                <Linkedin className="h-4 w-4" />
                                Connect on LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BoardOfManagementSection;