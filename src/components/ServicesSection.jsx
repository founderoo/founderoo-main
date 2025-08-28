import React from 'react';
import background from '../assets/background.jpg';

const ServicesSection = () => {
    const services = [
        {
            title: "IDEA BASED STARTUP",
            description: "Transform your innovative ideas into successful startups with our comprehensive guidance and support.",
            image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
            title: "FAST DEVELOPMENT",
            description: "Accelerate your product development with agile methodologies and expert technical guidance.",
            image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
            title: "STARTUP CONSULTATION",
            description: "Get personalized consultation from industry experts to navigate your startup journey successfully.",
            image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
            title: "BUSINESS MENTORING",
            description: "Connect with experienced mentors who provide strategic guidance for sustainable business growth.",
            image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
            title: "DIGITAL MARKETING",
            description: "Boost your online presence with comprehensive digital marketing strategies and campaigns.",
            image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
            title: "SKILL DEVELOPMENT",
            description: "Enhance your entrepreneurial skills with targeted training programs and workshops.",
            image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=300"
        }
    ];

    return (
        <section
            className="py-20 bg-primary text-primary-foreground relative overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${background})`,
            }}
        >
            {/* Keep your existing gradient overlay for additional styling */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/20"></div>

            {/* Keep your decorative circle */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full transform translate-x-32 translate-y-32"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-full font-bold text-lg mb-6">
                        OUR SERVICES
                    </div>
                    <h2 className="text-3xl text-primary font-bold mb-4">Founderoo is a "One-stop Digital solution"</h2>
                    <p className="text-primary text-lg">for freelancers and Coaching programs</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-card rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-card-foreground mb-3">{service.title}</h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;