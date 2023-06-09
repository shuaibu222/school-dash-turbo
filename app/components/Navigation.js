'use client';

import React, { useContext } from 'react';
import { MyContext } from '../hooks/MyContext';

export default function Navigation() {
  const { toggleSidebar } = useContext(MyContext);
  return (
    <nav>
      <button className="ham-btn" onClick={toggleSidebar}>
        Toggle
      </button>
      <ul>
        <li>shuayb</li>
        <li>shuayb</li>
        <li>shuayb</li>
        <li>shuayb</li>
        <li>shuayb</li>
      </ul>
    </nav>
  );
}
