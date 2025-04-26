'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Logo from '../../logo';
import Image from 'next/image';
import { useCurrentUser } from '@/app/hooks/useCurrentUser';
import { signOut } from 'next-auth/react';

type NavbarProps = {
  onToggleSidebar: () => void;
};

export default function Navbar({ onToggleSidebar }: NavbarProps) {
  const [openProfile, setOpenProfile] = useState(false);
  const { user } = useCurrentUser();

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="px-2 py-2 lg:px-2 lg:pl-2 bg-hub-primary-dark">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="inline-flex
            items-center
            p-2
            text-sm
          text-white
          bg-hub-primary-light
            rounded-lg
            border border-white
          hover:bg-hub-secondary-orange
            focus:outline-none
            focus:ring-2
          focus:ring-bg-hub-secondary-orange
          hover:bg-hubring-bg-hub-secondary-orange
          focus:ring-bg-hub-secondary-orange"
            aria-controls="sidebar"
          >
            <span className="sr-only">Toggle sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <Link className="flex ms-2 md:me-24" href="/home">
            <div className="flex">
              <Logo width={70} />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white ml-4">
                HUB - Local
              </span>
            </div>
          </Link>

          <div className="flex items-center">
            <button
              type="button"
              className="flex
                text-sm
                bg-transparent
                rounded-full
                focus:ring-4 items-center"
              onClick={() => setOpenProfile(!openProfile)}
            >
              <span className="text-white pr-4">{user?.name}</span>
              <Image
                src="/profile-picture.png"
                width={32}
                height={32}
                className="rounded-full"
                alt="user picture"
              />
            </button>
            {openProfile && (
              <div className="absolute right-0 top-16 w-40 text-base list-none divide-yrounded-sm shadow-sm bg-hub-primary-light divide-gray-600">
                <div className="px-4 py-3" role="none">
                  <p
                    className="text-sm  text-white"
                    role="none"
                  >
                    {user?.name}
                  </p>
                  <p
                    className="text-sm font-medium  truncate text-gray-300"
                    role="none"
                  >
                    {user?.email}
                  </p>
                </div>
                <ul className="py-1" role="none">
                  <li>
                    <button
                      className="
                      flex
                      w-40
                      px-4
                      py-2
                      text-sm
                    bg-hub-secondary-orange
                    text-gray-300
                    hover:bg-hub-secondary-orange
                    hover:text-white rounded-sm"
                      onClick={() => signOut()}
                    >
                      Sair
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
