import React, { useState } from 'react';
import { ArrowLeft, AlertCircle, Loader2 } from 'lucide-react';
import signupimage from '../assets/signupimage.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

export default function SignUpPage() {
    const [isSignUp, setIsSignUp] = useState(true);
    const [loading, setLoading] = useState(false);
    const [showResetPassword, setShowResetPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        rememberMe: false
    });

    const { signUp, signIn, signInWithGoogle, signInWithFacebook, signInWithApple, resetPassword, error, setError } = useAuth();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const validateForm = () => {
        if (!formData.email) {
            setError('Email is required');
            return false;
        }
        if (!formData.password) {
            setError('Password is required');
            return false;
        }
        if (isSignUp && !formData.username) {
            setError('Username is required');
            return false;
        }
        if (isSignUp && formData.password.length < 6) {
            setError('Password must be at least 6 characters long');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);
        setError('');

        try {
            if (isSignUp) {
                await signUp(formData.email, formData.password, formData.username);
                navigate('/'); // Redirect to dashboard or home page
            } else {
                await signIn(formData.email, formData.password);
                navigate('/'); // Redirect to dashboard or home page
            }
        } catch (error) {
            console.error('Authentication error:', error);
            // Error is handled by the context
        } finally {
            setLoading(false);
        }
    };

    const handleSocialLogin = async (provider) => {
        setLoading(true);
        setError('');

        try {
            switch (provider) {
                case 'Google':
                    await signInWithGoogle();
                    break;
                case 'Apple':
                    await signInWithApple();
                    break;
                case 'Facebook':
                    await signInWithFacebook();
                    break;
                default:
                    throw new Error('Unsupported provider');
            }
            navigate('/dashboard'); // Redirect to dashboard or home page
        } catch (error) {
            console.error('Social login error:', error);
            // Error is handled by the context
        } finally {
            setLoading(false);
        }
    };

    const handleForgotPassword = async () => {
        if (!formData.email) {
            setError('Please enter your email address first');
            return;
        }

        setLoading(true);
        setError('');

        try {
            await resetPassword(formData.email);
            setShowResetPassword(true);
        } catch (error) {
            console.error('Password reset error:', error);
            // Error is handled by the context
        } finally {
            setLoading(false);
        }
    };

    const toggleMode = (signUpMode) => {
        setIsSignUp(signUpMode);
        setError('');
        setShowResetPassword(false);
        // Clear form when switching modes
        setFormData({
            username: '',
            email: '',
            password: '',
            rememberMe: false
        });
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4 lg:p-6">
            <div className="bg-card rounded-2xl shadow-2xl overflow-hidden max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 my-4">
                {/* Left Panel - Form */}
                <div className="p-6 sm:p-8 lg:p-6 xl:p-8 flex flex-col justify-between">
                    <div className="flex-1">
                        {/* Back Arrow */}
                        <div className="mb-4">
                            <Link to="/">
                                <button className="p-2 hover:bg-muted rounded-full transition-colors" disabled={loading}>
                                    <ArrowLeft className="w-5 h-5 text-muted-foreground" />
                                </button>
                            </Link>
                        </div>

                        {/* Header */}
                        <div className="mb-5 lg:mb-6">
                            <h1 className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-bold text-foreground mb-1">Welcome!</h1>
                            <p className="text-muted-foreground text-sm sm:text-base">To The World Of Founderoo</p>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start">
                                <AlertCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                                <p className="text-red-700 text-sm">{error}</p>
                            </div>
                        )}

                        {/* Success Message for Password Reset */}
                        {showResetPassword && (
                            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                                <p className="text-green-700 text-sm">
                                    Password reset email sent! Check your inbox for further instructions.
                                </p>
                            </div>
                        )}

                        {/* Sign Up / Log In Toggle */}
                        <div className="flex mb-5 lg:mb-6">
                            <button
                                onClick={() => toggleMode(true)}
                                disabled={loading}
                                className={`px-4 sm:px-6 py-2.5 rounded-lg font-medium mr-3 text-sm transition-colors disabled:opacity-50 ${isSignUp
                                    ? 'bg-primary text-primary-foreground shadow-md'
                                    : 'border border-border text-foreground hover:bg-muted'
                                    }`}
                            >
                                Sign Up
                            </button>
                            <button
                                onClick={() => toggleMode(false)}
                                disabled={loading}
                                className={`px-4 sm:px-6 py-2.5 rounded-lg font-medium text-sm transition-colors disabled:opacity-50 ${!isSignUp
                                    ? 'bg-primary text-primary-foreground shadow-md'
                                    : 'border border-border text-foreground hover:bg-muted'
                                    }`}
                            >
                                Log In
                            </button>
                        </div>

                        {/* Journey Text */}
                        <div className="mb-5 lg:mb-6">
                            <h2 className="text-lg sm:text-xl lg:text-lg xl:text-xl font-semibold text-foreground mb-1">
                                {isSignUp ? 'Start Your Journey With Us' : 'Welcome Back'}
                            </h2>
                            <p className="text-muted-foreground text-sm sm:text-base">
                                {isSignUp ? 'Sign Up With Open Account' : 'Log In To Your Account'}
                            </p>
                        </div>

                        {/* Social Login Buttons */}
                        <div className="flex space-x-3 mb-5 lg:mb-6">
                            <button
                                onClick={() => handleSocialLogin('Google')}
                                disabled={loading}
                                className="flex-1 border border-border rounded-lg py-2.5 px-2 flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                                ) : (
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                    </svg>
                                )}
                            </button>
                            <button
                                onClick={() => handleSocialLogin('Apple')}
                                disabled={loading}
                                className="flex-1 border border-border rounded-lg py-2.5 px-2 flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                                ) : (
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                    </svg>
                                )}
                            </button>
                            <button
                                onClick={() => handleSocialLogin('Facebook')}
                                disabled={loading}
                                className="flex-1 border border-border rounded-lg py-2.5 px-2 flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                                ) : (
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="flex items-center mb-5 lg:mb-6">
                            <div className="flex-1 border-t border-border"></div>
                            <span className="px-3 text-muted-foreground text-sm">or</span>
                            <div className="flex-1 border-t border-border"></div>
                        </div>

                        {/* Form Fields */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Username Field - Only for Sign Up */}
                            {isSignUp && (
                                <div>
                                    <label className="block text-sm sm:text-base text-muted-foreground mb-1.5">Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleInputChange}
                                        disabled={loading}
                                        className="w-full px-3 py-2.5 sm:py-3 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                                        placeholder="Enter your username"
                                        required
                                    />
                                </div>
                            )}

                            {/* Email Field */}
                            <div>
                                <label className="block text-sm sm:text-base text-muted-foreground mb-1.5">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    disabled={loading}
                                    className="w-full px-3 py-2.5 sm:py-3 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            {/* Password Field */}
                            <div>
                                <label className="block text-sm sm:text-base text-muted-foreground mb-1.5">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    disabled={loading}
                                    className="w-full px-3 py-2.5 sm:py-3 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>

                            {/* Remember Me and Forgot Password */}
                            <div className="flex items-center justify-between pt-3">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="rememberMe"
                                        id="rememberMe"
                                        checked={formData.rememberMe}
                                        onChange={handleInputChange}
                                        disabled={loading}
                                        className="w-4 h-4 text-primary bg-background border-input rounded focus:ring-ring disabled:opacity-50"
                                    />
                                    <label htmlFor="rememberMe" className="ml-2 text-sm text-muted-foreground">
                                        Remember Me
                                    </label>
                                </div>
                                {!isSignUp && (
                                    <button
                                        type="button"
                                        onClick={handleForgotPassword}
                                        disabled={loading}
                                        className="text-sm text-primary hover:text-primary/80 transition-colors font-medium disabled:opacity-50"
                                    >
                                        Forgot Password?
                                    </button>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="mt-6 sm:mt-8">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-primary text-primary-foreground py-3 sm:py-4 px-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-base sm:text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin mr-2" />
                                            {isSignUp ? 'Creating Account...' : 'Signing In...'}
                                        </>
                                    ) : (
                                        isSignUp ? "Let's Start" : "Log In"
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Right Panel - Hero Image */}
                <div className="hidden lg:block relative bg-gradient-to-br from-muted to-muted/50">
                    <img
                        src={signupimage}
                        alt="Signup illustration"
                        className="w-full h-full object-cover"
                    />

                    {/* Decorative wave at bottom */}
                    <div className="absolute bottom-0 right-0">
                        <svg width="120" height="80" viewBox="0 0 120 80" className="text-white fill-current opacity-30 sm:w-32 sm:h-20 lg:w-36 lg:h-24">
                            <path d="M120,80 L120,20 Q100,5 80,15 Q60,25 40,10 Q20,0 0,10 L0,80 Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}