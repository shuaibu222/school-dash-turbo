'use client';

import React, { useContext } from 'react';
import { MyContext } from '../hooks/MyContext';
import Link from 'next/link';

export default function Sidebar() {
  const { isSidebarOpen } = useContext(MyContext);
  return (
    <aside
      className={`sidebar ${isSidebarOpen ? '' : 'sidebar-close'}`}
      clear="true"
    >
      <ul>
        <Link href="/events">events</Link>
        <Link href="/library">library</Link>
      </ul>
    </aside>
  );
}
