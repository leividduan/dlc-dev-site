"use client"

import { cn } from "@/lib/utils";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { FileUser, Youtube } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ToggleTheme } from "./toggle-theme";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const menuItems = [
  {
    name: 'início',
    href: '/',
  },
  {
    name: 'contato',
    href: '/contact',
  },
];

interface RootProps {
  children: React.ReactNode;
}

const Root = ({ children }: RootProps) => {
  return (
    <header className="sticky px-10 py-2 z-50 top-0 border-grid w-full border-b bg-background/95">
      {children}
    </header>
  );
}

const Container = ({ children }: RootProps) => {
  return (
    <div className="flex items-center">
      {children}
    </div>
  );
}

const HomeLink = () => {
  return (
    <>
      <Link href="/" className="mr-5">
        <span className="text-2xl font-bold tracking-tighter hidden lg:hidden 2xl:inline-block" >Deivid Luan Cardoso</span>
        <span className="text-2xl font-bold tracking-tighter hidden md:inline-block lg:inline-block 2xl:hidden">DLC</span>
      </Link>
    </>
  );
}

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-4 text-sm 2xl:gap-6">
      {menuItems.map((item) => (
       <Link
          key={item.name}
          className={cn("transition-colors hover:text-foreground", pathname === item.href ? "text-foreground font-bold" : "text-foreground/80")}
          href={item.href}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}

const Icons = () => {
  return (
    <div className="flex items-center gap-1 ml-auto">
      <Button variant="ghost" size="icon" asChild>
        <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" download='CV_DEIVID_LUAN_CARDOSO'>
          <FileUser />
          <span className="sr-only">Resume</span>
        </a>
      </Button>
     <Button variant="ghost" size="icon" asChild>
       <a href="https://www.linkedin.com/in/leividduan/" target="_blank" rel="noopener noreferrer">
         <LinkedInLogoIcon />
         <span className="sr-only">LinkedIn</span>
       </a>
     </Button>
     <Button variant="ghost" size="icon" asChild>
       <a href="https://www.youtube.com/@leividduan" target="_blank" rel="noopener noreferrer">
         <Youtube />
         <span className="sr-only">Youtube</span>
       </a>
     </Button>
     <Button variant="ghost" size="icon" asChild>
       <a href="https://github.com/leividduan" target="_blank" rel="noopener noreferrer">
         <GitHubLogoIcon />
         <span className="sr-only">GitHub</span>
       </a>
     </Button>
     <Separator orientation="vertical" decorative={false} className="h-5" />
     <ToggleTheme />
   </div>
  );
}

export {
  Container,
  HomeLink,
  Icons,
  Nav,
  Root
};

