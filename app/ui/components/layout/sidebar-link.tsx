'use client';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface SubLinkProps {
  name: string;
  href: string;
}

export interface LinkProps {
  name: string;
  href: string;
  icon?: React.ElementType | undefined;
  subLinks?: SubLinkProps[];
}

interface SidebarLinksProps {
  links: LinkProps[];
}

export default function SidebarLinks({ links }: SidebarLinksProps) {
  return (
    <>
      <ul className="space-y-2 font-medium">
        {links.map(link => {
          return link.subLinks ? (
            <SubLinks key={link.name} link={link} />
          ) : (
            <LinkComponent key={link.name} link={link} />
          );
        })}
      </ul>
      <ul>
        <li>
          <button
            className="flex w-full px-4 items-center
        py-2 text-sm text-gray-700hover:bg-hub-secondary-orange 
        text-gray-300 hover:bg-hub-secondary-orange 
         hover:text-white rounded-lg"
            onClick={() => signOut()}
          >
            <PowerIcon className="w-6" />
            <span className="pl-2 text-xl">Sair</span>
          </button>
        </li>
      </ul>
    </>
  );
}

const LinkComponent = ({ link }: { link: LinkProps }) => {

  const pathname = usePathname(); // Obtém a URL atual
  const isActive = pathname === link.href;
  return (
    <li>
      <Link
        href={link.href}
        className={`flex items-center p-2 rounded-lg group gap-2
        ${isActive ? "bg-hub-secondary-orange text-white" : "text-white hover:bg-hub-secondary-orange"}
      `}
      >
        {link.icon && <link.icon className="w-6" />}
        <p className="hidden md:block">{link.name}</p>
      </Link>
    </li>
  );
};

const SubLinks = ({ link }: { link: LinkProps }) => {
  const [openSubLink, setOpenSubLink] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    link?.subLinks?.forEach(link => toggleSubLinks(link.name));
  }, [link]);

  const toggleSubLinks = (name: string) => {
    setOpenSubLink(prev => (prev === name ? null : name));
  };
  return (
    <>
      <li>
        <button
          type="button"
          onClick={() => toggleSubLinks(link.name)}
          className="
          w-full
          flex
          items-center
          p-2
          text-white
          rounded-lg
          hover:bg-hub-secondary-orange
          hover:text-white
          group
        "
        >
          <span className="flex-1 ms-3 text-left whitespace-nowrap">
            {link.name}
          </span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {openSubLink && (
          <ul className="ml-6 mt-1 rounded-md bg-hub-primary-dark">
            {link.subLinks?.map(sub => (
              < li key={sub.name} className='py-1'>
                <a
                  href={sub.href}
                  className={`w-full
                flex
                items-center
                p-2
              text-white
                rounded-lg
              hover:bg-hub-secondary-orange
              hover:text-white
                group  ${sub.href === pathname ? 'bg-hub-secondary-orange' : ''}`}
                >
                  {sub.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li >
    </>
  );
};
