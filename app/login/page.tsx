import Image from 'next/image';
import LoginForm from './_partial/login-form';
import Logo from "@/app/ui/assets/logo.png"
export default function LoginPage() {
  return (
    <main className="flex items-center justify-between  md:h-screen">
      <div className='w-1/2'>
        <Image
          src="/favicon.ico"
          width={620}
          height={800}
          className="h-screen"
          quality={100}
          alt=""
        />
      </div>
      <div className="w-1/2 h-screen mr-16 flex flex-col items-center justify-center gap-4 rounded-lg">
        <Image
          src={Logo}
          width={150}
          height={150}
          className="object-contain"
          alt="Logo"
        />
        <LoginForm />
      </div>
    </main>
  );
}
