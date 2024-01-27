import Image from "next/image";
import { ReactNode } from "react";
import BackgroundImg from "@/public/login_background.jpg";
import NetflixLogo from "@/public/netflix_logo.svg";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex w-screen h-screen bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={BackgroundImg}
        alt="background image"
        className="hidden -z-10 sm:flex sm:object-cover brightness-50"
        priority
        fill
      />
      <Image
        src={NetflixLogo}
        alt="Logo"
        className="absolute object-contain left-4 md:left-10 md:top-6"
        height={120}
        width={120}
        priority
      />
      {children}
    </div>
  );
}
