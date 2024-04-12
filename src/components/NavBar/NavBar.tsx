'use client';
import React, { useState, useEffect } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Button,
  Link,
} from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { Logo } from '@/icons/Logo';
import { isMobile } from 'react-device-detect';

export const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Tools', path: '/tools' },
    { name: 'About', path: '/about' },
  ];

  const pathname = usePathname();

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="py-2" shouldHideOnScroll>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <Link href="/">
          <NavbarBrand>
            <Logo size={40} />
            <p className="ml-5 font-extrabold text-white text-2xl">Discord Toolbox</p>
          </NavbarBrand>
        </Link>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4 font-bold" justify="center">
        <NavbarItem>
          <Link color={pathname == '/' ? 'primary' : 'foreground'} href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color={pathname == '/tools' ? 'primary' : 'foreground'} href="/tools">
            Tools
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {!isMobile && (
          <NavbarItem>
            <Button as={Link} color="primary" href="/about" className="text-[16px] font-bold">
              About
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
      <NavbarMenu className="pt-1 items-center justify-center">
        {menuItems.map(({ name, path }, index) => (
          <NavbarMenuItem key={`${name}-${index}`}>
            <Link
              color={pathname == path ? 'primary' : 'foreground'}
              className="w-full text-[24px] my-5"
              href={path}
            >
              {name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
