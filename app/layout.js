'use client';

import React, { useState } from 'react';
import './globals.css';
import { Poppins } from 'next/font/google';
import { MyContext } from './hooks/MyContext';
import Sidebar from './components/Sidebar';
import Navigation from './components/Navigation';

const inter = Poppins({ subsets: ['latin'], weight: '400' });

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <html lang="en">
      <MyContext.Provider
        value={{ isSidebarOpen, setIsSidebarOpen, toggleSidebar }}
      >
        <body className={inter.className}>
          <header>
            <Sidebar
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />
          </header>
          <main className={`main-parent ${isSidebarOpen ? '' : 'main-close'}`}>
            <Navigation />
            {children}
          </main>
        </body>
      </MyContext.Provider>
    </html>
  );
}
