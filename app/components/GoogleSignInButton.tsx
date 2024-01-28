"use client";

import { Button } from "@/components/ui/button";
import GoogleIcon from "@/public/google.svg";
import { signIn } from "next-auth/react";
import Image from "next/image";

const GoogleSignInButton = () => {
  return (
    <Button variant={"outline"} size={"icon"} onClick={() => signIn("google")}>
      <Image src={GoogleIcon} alt="Google" className="w-6 h-6" priority />
    </Button>
  );
};

export default GoogleSignInButton;
