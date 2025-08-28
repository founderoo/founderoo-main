import React from 'react';
import { Users, Lightbulb, Target, Zap, TrendingUp, Award } from 'lucide-react';

const WhatWeDo = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-accent/10 to-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        {/* Central "What We Do?" box */}
                        <div className="bg-primary text-primary-foreground p-8 rounded-2xl text-center relative z-10 shadow-xl">
                            <h2 className="text-3xl font-bold mb-4">What We Do?</h2>
                            <p className="text-primary-foreground/90">
                                We empower founders with the right resources, mentorship, and community support to help them build impactful startups, foster innovation, and drive long-term success in the entrepreneurial ecosystem.
                            </p>
                        </div>

                        {/* Circular icons around the box */}
                        <div className="absolute inset-0">
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-accent/30 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                                <Lightbulb className="text-primary" size={28} />
                            </div>
                            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-accent/30 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                                <Target className="text-primary" size={28} />
                            </div>
                            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-accent/30 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                                <TrendingUp className="text-primary" size={28} />
                            </div>
                            <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-accent/30 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                                <Users className="text-primary" size={28} />
                            </div>
                            <div className="absolute top-8 right-8 bg-accent/30 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                                <Zap className="text-primary" size={20} />
                            </div>
                            <div className="absolute bottom-8 left-8 bg-accent/30 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                                <Award className="text-primary" size={20} />
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-gradient-to-br from-muted to-accent/30 rounded-3xl p-8">
                            <img
                                src="https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=400"
                                alt="Founderoo community member"
                                className="w-full h-80 object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;