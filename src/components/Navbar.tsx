"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

const AppNavbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Courses", link: "/courses" },
    { name: "Contact", link: "/contacts" },
  ];

  return (
    <Navbar className="bg-black/60 backdrop-blur-xl border-b border-white/10">
      <NavBody>
        <NavItems
          items={navItems.map((item) => ({
            ...item,
            active: pathname === item.link,
          }))}
        />

        <div className="flex items-center gap-4">
          <NavbarButton href="/courses" variant="primary">
            Explore
          </NavbarButton>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg ${
                pathname === item.link ? "text-white" : "text-neutral-400"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <NavbarButton
            onClick={() => setIsMobileMenuOpen(false)}
            variant="primary"
            className="w-full mt-4"
          >
            Explore Courses
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default AppNavbar;
