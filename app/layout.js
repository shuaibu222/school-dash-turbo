'use client';

import React, { useState } from 'react';
import './globals.css';
import { Poppins } from 'next/font/google';
import { MyContext } from './hooks/MyContext';
import Sidebar from './components/Sidebar';
import Navigation from './components/Navigation';

const inter = Poppins({ subsets: ['latin'], weight: '300' });

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <html lang='en'>
      <head>
        <title>DHTN school management system</title>
        <meta
          name='description'
          content='this is a huge database system designed for DHTN school'
        />
        <meta name='author' content='shuaibu abdulkadir hussain' />
      </head>
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
