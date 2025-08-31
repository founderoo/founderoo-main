import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import signupimage from '../assets/signupimage.jpg';

export default function SignUpPage() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        rememberMe: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission here
    };

    const handleSocialLogin = (provider) => {
        console.log(`Login with ${provider}`);
        // Handle social login here
    };

    return (
        <div className="h-screen bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center p-2 overflow-hidden">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 h-[95vh]">
                {/* Left Panel - Form */}
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <div className="flex-1">
                        {/* Back Arrow */}
                        <button className="mb-3 p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <ArrowLeft className="w-4 h-4 text-gray-600" />
                        </button>

                        {/* Header */}
                        <div className="mb-3">
                            <h1 className="text-2xl font-bold text-gray-900 mb-1">Welcome!</h1>
                            <p className="text-gray-600 text-sm">To The World Of Founderoo</p>
                        </div>

                        {/* Sign Up / Log In Toggle */}
                        <div className="flex mb-3">
                            <button className="px-4 py-2 bg-black text-white rounded-lg font-medium mr-3 text-sm">
                                Sign Up
                            </button>
                            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm">
                                Log In
                            </button>
                        </div>

                        {/* Journey Text */}
                        <div className="mb-3">
                            <h2 className="text-base font-semibold text-gray-900 mb-1">Start Your Journey With Us</h2>
                            <p className="text-gray-600 text-xs">Sign Up With Open Account</p>
                        </div>

                        {/* Social Login Buttons */}
                        <div className="flex space-x-2 mb-3">
                            <button
                                onClick={() => handleSocialLogin('Google')}
                                className="flex-1 border border-gray-300 rounded-lg py-2 px-2 flex items-center justify-center hover:bg-gray-50 transition-colors"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                </svg>
                            </button>
                            <button
                                onClick={() => handleSocialLogin('Apple')}
                                className="flex-1 border border-gray-300 rounded-lg py-2 px-2 flex items-center justify-center hover:bg-gray-50 transition-colors"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                                </svg>
                            </button>
                            <button
                                onClick={() => handleSocialLogin('Facebook')}
                                className="flex-1 border border-gray-300 rounded-lg py-2 px-2 flex items-center justify-center hover:bg-gray-50 transition-colors"
                            >
                                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="flex items-center mb-3">
                            <div className="flex-1 border-t border-gray-300"></div>
                            <span className="px-3 text-gray-500 text-xs">or</span>
                            <div className="flex-1 border-t border-gray-300"></div>
                        </div>

                        {/* Form */}
                        <div className="space-y-2">
                            {/* Username */}
                            <div>
                                <label className="block text-xs text-gray-600 mb-1">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-sm"
                                    placeholder="Enter your username"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-xs text-gray-600 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-sm"
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-xs text-gray-600 mb-1">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-sm"
                                    placeholder="Enter your password"
                                />
                            </div>

                            {/* Remember Me */}
                            <div className="flex items-center pt-1">
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    id="rememberMe"
                                    checked={formData.rememberMe}
                                    onChange={handleInputChange}
                                    className="w-3 h-3 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                                />
                                <label htmlFor="rememberMe" className="ml-2 text-xs text-gray-600">
                                    Remember Me
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button - Fixed at bottom */}
                    <div className="mt-4">
                        <button
                            onClick={handleSubmit}
                            className="w-full bg-black text-white py-2.5 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm"
                        >
                            Let's Start
                        </button>
                    </div>
                </div>

                {/* Right Panel - Hero Image */}
                <div className="hidden lg:block relative bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                        src={signupimage}
                        alt="Signup illustration"
                        className="w-full h-full object-cover"
                    />

                    {/* Decorative wave at bottom */}
                    <div className="absolute bottom-0 right-0">
                        <svg width="150" height="100" viewBox="0 0 150 100" className="text-white fill-current opacity-30">
                            <path d="M150,100 L150,30 Q130,10 100,20 Q70,30 50,10 Q30,0 0,15 L0,100 Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}