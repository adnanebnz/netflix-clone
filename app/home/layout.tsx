import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import Navbar from "../components/Navbar";

const HomeLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/login");
  }
  return (
    <div>
      <Navbar session={session} />
      <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};

export default HomeLayout;
