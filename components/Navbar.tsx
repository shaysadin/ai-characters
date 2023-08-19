"use client";

import { Menu, Sparkles } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button"



import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { MobileSidebar } from "./mobile-sidebar";
import { useProModal } from "@/hooks/use-pro-model";
import { useRouter } from "next/navigation";


const font = Poppins ({
    weight: "600",
    subsets: ["latin"]
}) 

interface NavbarProps {
    isPro: boolean;
  }

export const Navbar = ({
    isPro
  }: NavbarProps) => {

    const router = useRouter();
    const proModel = useProModal();
    
    const { isSignedIn } = useUser();

    return ( 
        <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16">
            <div className="flex items-center">
                <MobileSidebar />
                <Link href="/">
                    <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-primary", font.className)}>
                        character AI 
                    </h1>
                </Link>
            </div>

            <div className="flex items-center gap-x-3">
                {!isPro && (
                
                    <Button onClick={() => {isSignedIn ? (
                        proModel.onOpen()
                      ) : (
                        router.push("/sign-in")
                      )}} variant="premium" size="sm">
                    Upgrade
                    <Sparkles className="h-4 w-4 fill-white text-white" />
                </Button>
                    )}
                {isPro && (
                    <div>Pro Plan</div>
                )}
                <ModeToggle />
                {isSignedIn ? (
          <UserButton />
        ) : (
          <Button><a href="/sign-in">Log In</a></Button>
        )}
            </div>
        </div>
     );
};
 
