import Image from "next/image";
import LoginForm from "../login/_partial/login-form";
import RegisterForm from "./_partial/register-form";

export default function Page() {
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
        <RegisterForm />
      </div>
    </main>)
}