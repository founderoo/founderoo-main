import React, { useState } from 'react';
import { Menu, X, User2, LogOut } from 'lucide-react';
import founderoo from '../../src/assets/founderoo.webp';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'; // Import useAuth hook


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false); // New state for profile dropdown
    const { currentUser, logout } = useAuth(); // Get currentUser and logout from context
    const navigate = useNavigate(); // Get the navigation function

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleProfileMenu = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    };

    const handleLogout = async () => {
        try {
            await logout();
            setIsProfileMenuOpen(false); // Close the menu
            navigate('/'); // Redirect to the homepage after logout
        } catch (error) {
            console.error('Failed to log out:', error);
        }
    };

    return (
        <header className="bg-secondary text-primary-foreground relative z-50">
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
                        <Link to="/" className="hover:opacity-80 transition-opacity">Home</Link>
                        <Link to="/our-company" className="hover:opacity-80 transition-opacity">About Us</Link>
                        <Link to="/collaborations" className="hover:opacity-80 transition-opacity">Collaborations</Link>
                        <a href="https://founderooblog.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">Blog</a>
                    </nav>

                    {/* CTA Button / Profile Icon & Mobile Menu */}
                    <div className="flex items-center">
                        {currentUser ? (
                            // Render profile icon if user is logged in
                            <div className="relative">
                                <button
                                    onClick={toggleProfileMenu}
                                    className="p-2 rounded-full border border-border bg-background text-foreground hover:bg-muted transition-colors"
                                >
                                    <User2 size={20} />
                                </button>
                                {isProfileMenuOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg py-1">
                                        <Link to="/profile" className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors" onClick={() => setIsProfileMenuOpen(false)}>
                                            <div className="flex items-center">
                                                <User2 className="mr-2 h-4 w-4" />
                                                Profile
                                            </div>
                                        </Link>
                                        <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors">
                                            <div className="flex items-center">
                                                <LogOut className="mr-2 h-4 w-4" />
                                                Logout
                                            </div>
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            // Render Join Now button if no user is logged in
                            <Link to="/signup">
                                <button className="bg-primary hover:bg-amber-400 text-secondary-foreground px-6 py-2 rounded-full font-medium transition-colors hidden sm:block">
                                    Join Now
                                </button>
                            </Link>
                        )}

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
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-secondary border-t border-primary/20 z-40">
                        <nav className="px-4 py-4 space-y-4">
                            <Link to="/" className="block hover:opacity-80 transition-opacity" onClick={toggleMenu}>Home</Link>
                            <Link to="/our-company" className="block hover:opacity-80 transition-opacity" onClick={toggleMenu}>About Us</Link>
                            <Link to="/collaborations" className="block hover:opacity-80 transition-opacity" onClick={toggleMenu}>Collaborations</Link>
                            <a href="https://founderooblog.vercel.app/" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity" onClick={toggleMenu}>Blog</a>
                            {!currentUser && (
                                <Link to="/signup" className="block">
                                    <button className="bg-primary hover:bg-amber-400 text-secondary-foreground px-6 py-2 rounded-full font-medium transition-colors w-full">
                                        Join Now
                                    </button>
                                </Link>
                            )}
                            {currentUser && (
                                <>
                                    <Link to="/profile" className="block px-4 py-2 hover:bg-muted transition-colors rounded-lg">Profile</Link>
                                    <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-muted transition-colors rounded-lg">Logout</button>
                                </>
                            )}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;