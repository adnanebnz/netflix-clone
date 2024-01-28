"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";
import GoogleIcon from "@/public/google.svg";

const GoogleSignInButton = () => {
  return (
    <Button variant={"outline"} size={"icon"} onClick={() => signIn("google")}>
      <Image src={GoogleIcon} alt="Google" className="w-6 h-6" />
    </Button>
  );
};

export default GoogleSignInButton;
