'use client';

import { useContext } from 'react';
import Image from 'next/image';
import { MyContext } from '../hooks/MyContext';
import { Poppins } from 'next/font/google';
import { AiFillCaretDown } from 'react-icons/ai';
import { MdDashboard, MdSchool, MdEvent, MdClose } from 'react-icons/md';
import { BsHouses } from 'react-icons/bs';
import { IoPeople } from 'react-icons/io5';

import Link from 'next/link';

const inter = Poppins({ subsets: ['latin'], weight: '800' });

export default function Sidebar() {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(MyContext);
  return (
    <aside
      className={`sidebar ${isSidebarOpen ? '' : 'sidebar-close'}`}
      clear="true"
    >
      <div className="logo">
        <h1>
          <span className={inter.className} style={{ color: '#ff00d0' }}>
            DHTN
          </span>
        </h1>
        <div className="close-parent">
          <MdClose className="close" onClick={() => setIsSidebarOpen(false)} />
        </div>
      </div>
      <div className="admin-account">
        <div className="admin-image">
          <Image
            className="admin-img"
            src="https://shuaibuportfolio.netlify.app/src/assets/images/myImage.jpg"
            alt="shuaibu-icon"
            width={64}
            height={64}
          />
        </div>
        <div className="admin-desc">
          <h3>Shuaibu</h3>
          <p>administrator</p>
        </div>
        <div className="admin-details">
          <AiFillCaretDown />
        </div>
      </div>
      <div className="links">
        <div className="dashboard sidenav-icons">
          <MdDashboard className="side-icons" />
          <Link href="/">Dashboard</Link>
        </div>
        <div className="departments sidenav-icons">
          <BsHouses className="side-icons" />
          <Link href="departments">Departments</Link>
        </div>
        <div className="teachers sidenav-icons">
          <MdSchool className="side-icons" />
          <Link href="teachers">Teachers</Link>
        </div>
        <div className="students sidenav-icons">
          <IoPeople className="side-icons" />
          <Link href="students">Students</Link>
        </div>
        <div className="events sidenav-icons">
          <MdEvent className="side-icons" />
          <Link href="events">Events</Link>
        </div>
      </div>
    </aside>
  );
}
