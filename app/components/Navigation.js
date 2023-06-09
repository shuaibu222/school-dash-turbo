'use client';

import React, { useContext } from 'react';
import { MyContext } from '../hooks/MyContext';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Navigation() {
  const { toggleSidebar } = useContext(MyContext);
  return (
    <nav className="nav">
      <div className="nav-first-col">
        <button className="ham-btn" onClick={toggleSidebar}>
          <RxHamburgerMenu />
        </button>
        <form className="nav-form">
          <select name="category" id="category">
            <option value="teachers">teachers</option>
            <option value="students">students</option>
            <option value="library">library</option>
            <option value="events">events</option>
          </select>
          <input type="text" name="search" id="search" />
        </form>
      </div>
      <div className="nav-sec-col">
        <p>Logout</p>
      </div>
    </nav>
  );
}
