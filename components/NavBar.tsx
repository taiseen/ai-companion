"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { UserButton } from "@clerk/nextjs";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import MobileSideBar from "@/components/MobileSideBar";
import Link from "next/link";

const font = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const NavBar = () => {
  return (
    <div
      className="fixed w-full h-16 flex justify-between items-center 
      py-2 px-4 border-b border-primary/10 bg-secondary z-50"
    >
      <div className="flex items-center">
        <MobileSideBar />

        <Link href="/">
          <h1
            className={cn(
              "hidden md:block text-xl md:text-3xl font-bold text-primary",
              font.className
            )}
          >
            companion.ai
          </h1>
        </Link>
      </div>

      <div className="flex items-center gap-x-6">
        <Button variant="premium" size="sm">
          Upgrade <Sparkles className="h-4 w-4 fill-white text-white ml-2" />
        </Button>

        <ModeToggle />

        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default NavBar;
