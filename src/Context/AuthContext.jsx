// src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db, googleProvider, facebookProvider, appleProvider } from '../lib/firebase';

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Sign up with email and password
  const signUp = async (email, password, username) => {
    try {
      setError('');
      const result = await createUserWithEmailAndPassword(auth, email, password);

      // Update profile with username
      await updateProfile(result.user, {
        displayName: username
      });

      // Create user document in Firestore
      await setDoc(doc(db, 'users', result.user.uid), {
        uid: result.user.uid,
        username: username,
        email: email,
        displayName: username,
        createdAt: new Date(),
        provider: 'email'
      });

      return result;
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  // Sign in with email and password
  const signIn = async (email, password) => {
    try {
      setError('');
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result;
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      setError('');
      const result = await signInWithPopup(auth, googleProvider);

      // Check if user document exists, if not create one
      const userDoc = await getDoc(doc(db, 'users', result.user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, 'users', result.user.uid), {
          uid: result.user.uid,
          username: result.user.displayName,
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
          createdAt: new Date(),
          provider: 'google'
        });
      }

      return result;
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  // Sign in with Facebook
  const signInWithFacebook = async () => {
    try {
      setError('');
      const result = await signInWithPopup(auth, facebookProvider);

      // Check if user document exists, if not create one
      const userDoc = await getDoc(doc(db, 'users', result.user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, 'users', result.user.uid), {
          uid: result.user.uid,
          username: result.user.displayName,
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
          createdAt: new Date(),
          provider: 'facebook'
        });
      }

      return result;
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  // Sign in with Apple
  const signInWithApple = async () => {
    try {
      setError('');
      const result = await signInWithPopup(auth, appleProvider);

      // Check if user document exists, if not create one
      const userDoc = await getDoc(doc(db, 'users', result.user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, 'users', result.user.uid), {
          uid: result.user.uid,
          username: result.user.displayName || result.user.email.split('@')[0],
          email: result.user.email,
          displayName: result.user.displayName || result.user.email.split('@')[0],
          photoURL: result.user.photoURL,
          createdAt: new Date(),
          provider: 'apple'
        });
      }

      return result;
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  // Sign out
  const logout = async () => {
    try {
      setError('');
      await signOut(auth);
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  // Reset password
  const resetPassword = async (email) => {
    try {
      setError('');
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  // Get user data from Firestore
  const getUserData = async (uid) => {
    try {
      const userDoc = await getDoc(doc(db, 'users', uid));
      return userDoc.exists() ? userDoc.data() : null;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    signIn,
    signInWithGoogle,
    signInWithFacebook,
    signInWithApple,
    logout,
    resetPassword,
    getUserData,
    error,
    setError
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}