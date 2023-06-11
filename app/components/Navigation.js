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
      </div>
      <div className="nav-sec-col">
        <div className="profile">
          <img
            src="https://shuaibuportfolio.netlify.app/src/assets/images/myImage.jpg"
            alt="profile-image"
          />
          <p>Shuaibu</p>
        </div>
      </div>
    </nav>
  );
}
