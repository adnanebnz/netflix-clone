"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GithubIcon } from "lucide-react";
import GoogleIcon from "@/public/google.svg";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="px-6 py-10 mt-24 rounded bg-black/80 md:mt-0 md:max-w-sm md:px-14">
      <form>
        <h1 className="text-3xl font-semibold text-white">Log in</h1>
        <div className="mt-5 space-y-4">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
          />
          <Button
            className="w-full bg-[#e50914]"
            variant={"destructive"}
            type="submit"
          >
            Log in
          </Button>
        </div>
      </form>
      <div className="mt-2 text-sm text-gray-500">
        You don&apos;t have an account?{" "}
        <Link className="text-white underline" href={"/sign-up"}>
          Sign up now!
        </Link>
      </div>
      <div className="flex items-center justify-center w-full mt-6 gap-x-3">
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={() => signIn("github")}
        >
          <GithubIcon className="w-4 h-4" />
        </Button>
        <Button variant={"outline"} size={"icon"}>
          <Image src={GoogleIcon} alt="Google" className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
