'use client'
import { useState } from 'react';
import { ChevronDownIcon, UserIcon } from '@heroicons/react/24/outline';
import { signOut } from 'next-auth/react';

interface ProfileDropdownProps {
  userName: string;
  onLogout?: () => void;
}

export default function ProfileDropdown({ userName, onLogout }: ProfileDropdownProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handlerSingOut = async () => {
    try {
      await signOut({ redirect: true, callbackUrl: '/login' });
      if (typeof window !== 'undefined') {
        document.cookie.split(";").forEach((c) => {
          document.cookie = c
            .replace(/^ +/, "")
            .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
      }
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };
  return (
    <div className="relative">
      <div
        className="flex items-center justify-between cursor-pointer h-16 w-[160px] bg-gray-100 rounded-lg px-4 py-2 hover:bg-gray-200"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <UserIcon className="h-8 w-8 text-hub-secondary-orange" />
        <span className="font-bold text-xl text-gray-700">
          {userName || 'Usuário'}
        </span>
        <ChevronDownIcon className="h-4 w-4 text-gray-500" />
      </div>
      {dropdownOpen && (
        <div className="absolute right-0 mt w-40 bg-white border border-gray-200 rounded shadow-lg">
          <button
            onClick={handlerSingOut}
            className="w-full px-2 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
          >
            Sair
          </button>
        </div>
      )}
    </div>
  );
}