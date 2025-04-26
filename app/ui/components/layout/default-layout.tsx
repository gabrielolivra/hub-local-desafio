'use client';
import React, { useState } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import SidebarLinks, { LinkProps } from './sidebar-link';

type DefaultLayoutProps = {
  links: LinkProps[];
  children: React.ReactNode;
};

export default function DefaultLayout({ links, children }: DefaultLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Navbar onToggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar}>
        <SidebarLinks links={links || []} />
      </Sidebar>
      <div className={`${isSidebarOpen ? 'sm:ml-64' : 'sm:ml-0'}`}>
        <div className="p-4 rounded-lg border-gray-700 pt-14">
          {children}
        </div>
      </div>
    </>
  );
}
