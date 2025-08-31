import React from 'react';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import OurCompany from './pages/OurCompany.jsx';
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/our-company" element={<OurCompany />} />


            </Routes>
            <Footer />

        </div>
    );
}

export default App;


