// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './Context/AuthContext';
import { Loader2 } from 'lucide-react';

export default function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  const location = useLocation();

  // Show loading spinner while checking authentication
  if (currentUser === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // If user is not authenticated, redirect to login
  if (!currentUser) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  // If user is authenticated, render the protected component
  return children;
}

// Alternative: Redirect authenticated users away from auth pages
export function AuthRoute({ children }) {
  const { currentUser } = useAuth();
  const location = useLocation();

  // Show loading spinner while checking authentication
  if (currentUser === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // If user is authenticated, redirect to dashboard
  if (currentUser) {
    const from = location.state?.from?.pathname || '/dashboard';
    return <Navigate to={from} replace />;
  }

  // If user is not authenticated, show auth pages
  return children;
}