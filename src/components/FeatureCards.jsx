import React from 'react';
import { Users, Lightbulb } from 'lucide-react';

const FeatureCards = () => {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-card rounded-2xl shadow-lg p-8 relative overflow-hidden border">
                        <div className="absolute top-0 left-0 w-24 h-24 bg-primary transform -rotate-45 -translate-x-12 -translate-y-12"></div>
                        <div className="relative z-10">
                            <div className="bg-background w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md border">
                                <Users className="text-primary" size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-card-foreground">Community Building</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Connect with like-minded entrepreneurs, share experiences, and build lasting relationships that drive mutual success in your entrepreneurial journey.
                            </p>
                        </div>
                    </div>

                    <div className="bg-card rounded-2xl shadow-lg p-8 relative overflow-hidden border">
                        <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary transform rotate-45 translate-x-12 translate-y-12"></div>
                        <div className="relative z-10">
                            <div className="bg-background w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md border">
                                <Lightbulb className="text-primary" size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-card-foreground">Innovation Hub</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Access cutting-edge resources, workshops, and mentorship programs designed to accelerate your startup growth and foster innovative thinking.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureCards;