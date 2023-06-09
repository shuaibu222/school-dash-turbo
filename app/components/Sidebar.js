'use client';

import React, { useState } from 'react';

export default function Sidebar({ isSidebarOpen }) {
  return (
    <aside
      className={`sidebar ${isSidebarOpen ? '' : 'sidebar-close'}`}
      clear="true"
    ></aside>
  );
}
