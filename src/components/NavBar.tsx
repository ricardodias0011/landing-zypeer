

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { FaChalkboardUser, FaUser } from "react-icons/fa6";
import { LogoIcon } from "./Icons";
import { Button, buttonVariants } from "./ui/button";
interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#features",
    label: "Ferramentas",
  },
  {
    href: "#app-mobile",
    label: "Mobile",
  },
  {
    href: "#pricing",
    label: "Preços",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[1px] dark:bg-[#2E293B] border-zinc-200 top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex "
            >
              <LogoIcon />
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            {/* <ModeToggle /> */}

            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5 text-white"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl text-white">
                    Zypeer
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4 text-white">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={`text-[17px] ${buttonVariants({ variant: "ghost" })}`}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
                <div className="flex flex-col gap-2 mt-4">
                  <Button
                    rel="noreferrer noopener"
                    // target="_blank"
                    onClick={() => {
                      window.open("https://prof.zypeer.com.br", "_blank")
                    }}
                    className={`flex gap-2 items-center flex-row${buttonVariants({ variant: "default" })}`}
                    style={{ minWidth: 120 }}
                  >
                    <FaChalkboardUser size={20} />
                    <p>Professores</p>
                  </Button>
                  <Button
                    rel="noreferrer noopener"
                    // href="https://edu.zypeer.com.br"
                    className={`flex gap-2 items-center flex-row rounded-full! border-gray-500! bg-[#393F5466]! ${buttonVariants({ variant: "outline" })}`}
                    style={{ minWidth: 130 }}
                    onClick={() => {
                      const ua = navigator.userAgent || navigator.vendor;

                      const isIOS = /iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream;

                      if (isIOS) {
                        window.open(
                          "https://edu.zypeer.com.br/app/simulated?page=explore",
                          "_blank"
                        );
                      } else {
                        window.open("https://play.google.com/store/apps/details?id=com.zypeertech.zypeeredu", "_blank")
                      }
                    }}
                  >
                    <FaUser size={16} />
                    <p>Alunos</p>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[14px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            {/* <ModeToggle /> */}
            <Button
              rel="noreferrer noopener"
              // href="https://edu.zypeer.com.br"
              className={`flex gap-2 items-center flex-row rounded-full! border-gray-500! bg-[#393F5466]! ${buttonVariants({ variant: "outline" })}`}
              style={{ minWidth: 130 }}
              onClick={() => {
                const ua = navigator.userAgent || navigator.vendor;

                const isIOS = /iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream;

                if (isIOS) {
                  window.open(
                    "https://edu.zypeer.com.br/app/simulated?page=explore",
                    "_blank"
                  );
                } else {
                  window.open("https://play.google.com/store/apps/details?id=com.zypeertech.zypeeredu", "_blank")
                }
              }}
            >
              <FaUser size={16} />
              <p>Alunos</p>
            </Button>
            <Button
              rel="noreferrer noopener"
              // target="_blank"
              onClick={() => {
                window.open("https://prof.zypeer.com.br", "_blank")
              }}
              className={`flex gap-2 items-center flex-row${buttonVariants({ variant: "default" })}`}
              style={{ minWidth: 120 }}
            >
              <FaChalkboardUser size={20} />
              <p>Professores</p>
            </Button>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header >
  );
};
