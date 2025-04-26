import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex flex-col justify-center h-screen w-full rounded-lg bg-gray-50 ml-4">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Bem vindo ao HUB local</strong><br></br>
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-hub-primary-light px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-hub-primary-light/50 md:text-base"
          >
            <span>Acessar HUB</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center h-screen py-2 ">
          <Image
            src="/favicon.ico"
            width={700}
            height={800}
            className="h-screen object-cover"
            alt=""
          />
        </div>
      </div>
    </main >
  );
}
