import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '@/component/homePage/Navbar';
import Footer from '@/component/homePage/Footer';


const MainLayout = () => {
  return (
    <div className="app-container">
        <Navbar />

      <main className="main-content">
        <Outlet /> {/* This is where child pages render */}
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout