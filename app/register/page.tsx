import Image from "next/image";
import Logo from "@/app/ui/assets/logo.png"
import RegisterForm from "./_partial/register-form";

export default function Page() {
  return (
    <main className="flex items-center justify-between  md:h-screen">
      <div>
        <Image
          src="/favicon.ico"
          width={620}
          height={800}
          className="h-screen"
          quality={100}
          alt=""
        />
      </div>
      <div className="w-1/2 h-screen mr-16 flex flex-col items-center justify-center gap-2 rounded-lg">
        <Image
          src={Logo}
          width={200}
          height={200}
          quality={100}
          className="object-contain"
          alt="Logo"
        />
        <RegisterForm />
      </div>
    </main>
  )
}