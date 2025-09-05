import React, { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { User2 } from 'lucide-react';

export default function ProfilePage() {
    const { currentUser, updateProfile, logout } = useAuth();
    const [displayName, setDisplayName] = useState(currentUser?.displayName || '');
    const [bio, setBio] = useState('');
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccessMessage('');

        if (displayName.trim() === '') {
            setError('Display name cannot be empty.');
            setLoading(false);
            return;
        }

        try {
            // This is a placeholder. You'll need to implement the updateProfile function in your AuthContext
            // to update the user's display name and potentially other fields like bio.
            await updateProfile({ displayName });
            setSuccessMessage('Profile updated successfully!');
        } catch (err) {
            setError('Failed to update profile.');
            console.error('Profile update error:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
        } catch (err) {
            console.error('Logout error:', err);
        }
    };

    return (
        <div className="min-h-[calc(100vh-128px)] flex items-center justify-center p-4">
            <div className="bg-card rounded-2xl shadow-xl p-8 max-w-md w-full">
                <h1 className="text-2xl font-bold text-center text-foreground mb-6">User Profile</h1>

                {currentUser && (
                    <div className="text-center mb-6">
                        <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center text-5xl font-bold text-muted-foreground mx-auto mb-2">
                            <User2 size={48} />
                        </div>
                        <p className="text-lg font-semibold text-foreground">{currentUser.displayName || currentUser.email}</p>
                        <p className="text-sm text-muted-foreground">{currentUser.email}</p>
                    </div>
                )}

                {error && <div className="mb-4 text-red-600 text-center">{error}</div>}
                {successMessage && <div className="mb-4 text-green-600 text-center">{successMessage}</div>}

                <form onSubmit={handleUpdateProfile} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-muted-foreground">Display Name</label>
                        <input
                            type="text"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                            disabled={loading}
                            className="mt-1 w-full p-2 border border-input rounded-md bg-background text-foreground"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-muted-foreground">Bio</label>
                        <textarea
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            disabled={loading}
                            rows="3"
                            className="mt-1 w-full p-2 border border-input rounded-md bg-background text-foreground"
                            placeholder="Tell us a little about yourself..."
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary text-primary-foreground py-2.5 rounded-md font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
                    >
                        {loading ? 'Updating...' : 'Update Profile'}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <button
                        onClick={handleLogout}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}