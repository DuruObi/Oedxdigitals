import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Inject Meta Tags for Mobile & PWA experience
  useEffect(() => {
    // Helper to create/update meta tags
    const setMeta = (name: string, content: string) => {
        let element = document.querySelector(`meta[name="${name}"]`);
        if (!element) {
            element = document.createElement('meta');
            element.setAttribute('name', name);
            document.head.appendChild(element);
        }
        element.setAttribute('content', content);
    };

    setMeta('theme-color', '#0f172a'); // Matches bg-slate-950
    setMeta('apple-mobile-web-app-capable', 'yes');
    setMeta('apple-mobile-web-app-status-bar-style', 'black-translucent');
    
    // Attempt to inject manifest dynamically (Experimental)
    const link = document.createElement('link');
    link.rel = 'manifest';
    // This is a placeholder path. Without root access, we can't easily serve a real manifest.json
    // But this shows the intent.
    link.href = '/manifest.json'; 
    document.head.appendChild(link);

  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500 selection:text-white font-sans overflow-x-hidden">
      <Navbar />
      <main className="pt-0">
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardHome from "./pages/dashboard/DashboardHome";
import Projects from "./pages/dashboard/Projects";
import Profile from "./pages/dashboard/Profile";
import Home from "./pages/Home";

export default function App(){
 return(
 <AuthProvider>
  <BrowserRouter>
   <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>

    <Route path="/dashboard" element={
      <ProtectedRoute><DashboardHome/></ProtectedRoute>
    }/>

    <Route path="/projects" element={
      <ProtectedRoute><Projects/></ProtectedRoute>
    }/>

    <Route path="/profile" element={
      <ProtectedRoute><Profile/></ProtectedRoute>
    }/>

   </Routes>
  </BrowserRouter>
 </AuthProvider>
 )
}
