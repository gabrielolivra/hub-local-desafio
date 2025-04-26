import LoginForm from '@/app/ui/login-form';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-between  md:h-screen">
      <div>
        <Image
          src="/favicon.ico"
          width={620}
          height={800}
          className="h-screen object-contair"
          alt=""
        />
      </div>
      <div className="max-w-[400px]h-screen mr-14 flex flex-col items-center justify-center gap-4 rounded-lg">
        <Image
          src={require('@/app/ui/assets/logo.png')}
          width={150}
          height={150}
          className="object-contain"
          alt=""
        />
        <LoginForm />
      </div>
    </main>
  );
}
