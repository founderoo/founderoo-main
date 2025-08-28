import React from 'react';

const PartnersSection = () => {
    const partners = [
        'Startup Bihar',
        'Bihar Government',
        'Kirdhatutor',
        'iNfludex'
    ];

    return (
        <section className="py-12 bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
                    {partners.map((partner, index) => (
                        <div key={index} className="bg-primary-foreground rounded-lg p-4 h-16 flex items-center justify-center">
                            <span className="text-muted-foreground font-medium text-sm text-center">{partner}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;