"use client"

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon, HamburgerMenuIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { FileUser, Youtube } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LocaleSwitcher from "./locale-switcher";
import { ToggleTheme } from "./toggle-theme";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const menuItems = [
  {
    name: 'home',
    href: '/',
  },
  {
    name: 'contact',
    href: '/contact',
  },
];

interface RootProps {
  children: React.ReactNode;
}

const Root = ({ children }: RootProps) => {
  return (
    <header className="sticky px-2 md:px-10 py-2 z-50 top-0 border-grid w-full border-b bg-background/95">
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
  const locale = useLocale();

  return (
    <>
      <Link href={`${locale}`} className="mr-5">
        <span className="text-2xl font-bold tracking-tighter hidden lg:hidden 2xl:inline-block" >Deivid Luan Cardoso</span>
        <span className="text-2xl font-bold tracking-tighter hidden md:inline-block lg:inline-block 2xl:hidden">DLC</span>
      </Link>
    </>
  );
}

const Nav = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('Menu');

  return (
    <nav className="hidden md:flex items-center gap-4 text-sm 2xl:gap-6">
      {menuItems.map((item) => (
       <Link
          key={item.name}
          className={cn("transition-colors hover:text-foreground", pathname === item.href ? "text-foreground font-bold" : "text-foreground/80")}
          href={`/${locale}${item.href}`}
        >
          {t(item.name)}
        </Link>
      ))}
    </nav>
  );
}

const Icons = () => {
  return (
    <div className="flex items-center gap-1 ml-auto">
      <div className='hidden md:inline-block'>
        <LocaleSwitcher />
      </div>
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

const DrawerNav = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('Menu');

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size='icon' className="md:hidden">
          <HamburgerMenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm overflow-auto p-6">
          <DrawerHeader className="sr-only">
            <DrawerTitle className="sr-only">Menus</DrawerTitle>
            <DrawerDescription className="sr-only">Navegue entre as páginas.</DrawerDescription>
          </DrawerHeader>

          <div className="flex flex-col space-y-3">
            {menuItems.map((item) => (
              <Link
                  key={item.name}
                  className={cn("text-base", pathname === item.href ? "text-foreground font-bold" : "text-foreground/80")}
                  href={`/${locale}${item.href}`}
                >
                  {t(item.name)}
                </Link>
            ))}
            <div className="md:hidden">
              <LocaleSwitcher className="w-full" />
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export {
  Container,
  DrawerNav,
  HomeLink,
  Icons,
  Nav,
  Root
};

