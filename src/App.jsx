import React from 'react';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import OurCompany from './pages/OurCompany.jsx';
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import SignUpPage from "@/pages/SignUpPage.jsx";
import CollaborationsPage from './pages/CollaborationsPage';
import { AuthProvider } from './Context/AuthContext';
import ProfilePage from './components/ProfilePage';
function App() {
    return (
        <div>
            <AuthProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/our-company" element={<OurCompany />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/collaborations" element={<CollaborationsPage />} />
                    <Route path="/profile" element={<ProfilePage />} />


                </Routes>
                <Footer />
            </ AuthProvider>
        </div>
    );
}

export default App;


