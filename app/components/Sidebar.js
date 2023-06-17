'use client';

import { useContext } from 'react';
import Image from 'next/image';
import { MyContext } from '../hooks/MyContext';
import { Poppins } from 'next/font/google';
import { AiFillCaretDown } from 'react-icons/ai';
import { MdDashboard, MdSchool, MdEvent, MdClose } from 'react-icons/md';
import { BsHouses } from 'react-icons/bs';
import { IoPeople } from 'react-icons/io5';
import { useMediaQuery } from '@react-hook/media-query';

import Link from 'next/link';

const inter = Poppins({ subsets: ['latin'], weight: '800' });

export default function Sidebar() {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(MyContext);

  const isPhoneViewport = useMediaQuery('(max-width: 30em)');

  return (
    <aside
      className={`sidebar ${isSidebarOpen ? '' : 'sidebar-close'}`}
      clear="true"
    >
      <div className="logo">
        <h1>
          <span className={inter.className}>DHTN</span>
        </h1>
        <div className="close-parent">
          <MdClose
            className="close"
            onClick={() => setIsSidebarOpen((prevState) => !prevState)}
          />
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
          <Link
            href="/"
            onClick={() => {
              if (isPhoneViewport) {
                setIsSidebarOpen((prevState) => !prevState);
              }
            }}
          >
            Dashboard
          </Link>
        </div>
        <div className="departments sidenav-icons">
          <BsHouses className="side-icons" />
          <Link
            href="departments"
            onClick={() => {
              if (isPhoneViewport) {
                setIsSidebarOpen((prevState) => !prevState);
              }
            }}
          >
            Departments
          </Link>
        </div>
        <div className="teachers sidenav-icons">
          <MdSchool className="side-icons" />
          <Link
            href="teachers"
            onClick={() => {
              if (isPhoneViewport) {
                setIsSidebarOpen((prevState) => !prevState);
              }
            }}
          >
            Teachers
          </Link>
        </div>
        <div className="students sidenav-icons">
          <IoPeople className="side-icons" />
          <Link
            href="students"
            onClick={() => {
              if (isPhoneViewport) {
                setIsSidebarOpen((prevState) => !prevState);
              }
            }}
          >
            Students
          </Link>
        </div>
        <div className="events sidenav-icons">
          <MdEvent className="side-icons" />
          <Link
            href="events"
            onClick={() => {
              if (isPhoneViewport) {
                setIsSidebarOpen((prevState) => !prevState);
              }
            }}
          >
            Events
          </Link>
        </div>
      </div>
    </aside>
  );
}
