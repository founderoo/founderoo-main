import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import founderoo from '../../src/assets/founderoo.webp';
import {Link} from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-secondary text-primary-foreground relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="bg-primary-foreground text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg mr-2">
                            <img src={founderoo} alt="Founderoo Logo" />
                        </div>
                        <span className="text-xl font-bold">Founder Flow</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="/" className="hover:opacity-80 transition-opacity">Home</a>
                        <a href="/our-company" className="hover:opacity-80 transition-opacity">About Us</a>
                        <a href="/collaborations" className="hover:opacity-80 transition-opacity">Collaborations</a>
                        <a href="https://founderooblog.vercel.app/" className="hover:opacity-80 transition-opacity">Blog</a>
                    </nav>

                    {/* CTA Button & Mobile Menu */}
                    <div className="flex items-center">
                        <Link to="/signup">
                        <button className="bg-primary hover:bg-amber-400 text-secondary-foreground px-6 py-2 rounded-full font-medium transition-colors hidden sm:block">
                            Join Now
                        </button>
                        </Link>
                        <button
                            className="md:hidden ml-4"
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-primary border-t border-primary/20 z-50">
                        <nav className="px-4 py-4 space-y-4">
                            <a href="/" className="block hover:opacity-80 transition-opacity">Home</a>
                            <a href="/our-company" className="block hover:opacity-80 transition-opacity">About Us</a>
                            <a href="/collaborations" className="block hover:opacity-80 transition-opacity">Collaborations</a>
                            <a href="https://founderooblog.vercel.app/" className="block hover:opacity-80 transition-opacity">Blog</a>
                            <button className="bg-secondary hover:bg-amber-400 text-secondary-foreground px-6 py-2 rounded-full font-medium transition-colors w-full sm:hidden">
                                Join Now
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;