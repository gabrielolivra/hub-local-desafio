import React from 'react';

type SidebarProps = {
  isOpen: boolean;
  toggle: () => void;
  children: React.ReactNode;
};

export default function Sidebar({ isOpen, toggle, children }: SidebarProps) {
  return (
    <aside
      id="sidebar"
      className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 transition-transform
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
         border-r border-gray-200 bg-hub-primary-dark flex flex-col mt-14`}
      aria-labelledby="sidebar-label"
    >
      <button
        type="button"
        onClick={toggle}
        className="
          text-white
          bg-transparent
          hover:text-white
          rounded-lg
          text-sm
          p-1.5
          absolute
          top-2.5
          right-2.5
          inline-flex
          items-center
          hover:bg-hub-secondary-orange
        "
        aria-controls="sidebar"
      ></button>
      <div className="flex flex-col h-[calc(100%-3.5rem)] justify-between">
        {children}
      </div>
    </aside>
  );
}
