'use client';

import {
  Avatar,
  Button,
  Modal,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  useDisclosure,
} from '@nextui-org/react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useTheme } from 'next-themes';
import React, { useState } from 'react';
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoPinterest,
  BiLogoTiktok,
  BiLogoTwitter,
  BiLogoYoutube,
} from 'react-icons/bi';

import Search from '@/components/common/Search';
import NextImage from '@/components/NextImage';

import Login from '@/view/Auth/Login';
import Register from '@/view/Auth/Register';

interface Social {
  icon: React.ReactNode;
  href: string;
}

export const social: Social[] = [
  {
    icon: <BiLogoFacebook />,
    href: 'https://www.facebook.com/lownsni',
  },
  {
    icon: <BiLogoTwitter />,
    href: 'https://twitter.com/?lang=en',
  },
  {
    icon: <BiLogoInstagram />,
    href: 'https://www.instagram.com/_lowns.ni/',
  },
  {
    icon: <BiLogoPinterest />,
    href: 'https://www.pinterest.com/',
  },
  {
    icon: <BiLogoTiktok />,
    href: 'https://www.tiktok.com/@_lowns.ni',
  },
  {
    icon: <BiLogoYoutube />,
    href: 'https://www.youtube.com/',
  },
];

export const menu = [
  { name: 'Home', href: '/' },
  { name: 'Lifestyle', href: '/blogs/lifestyle' },
  { name: 'Culture', href: '/blogs/culture' },
  { name: 'Features', href: '/blogs/features' },
  { name: 'Shop', href: '/shop' },
];

const Header = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { theme } = useTheme();
  const session = useSession();

  const { status } = session;

  const [isLogin, setIsLogin] = useState(true);

  const handleToggleAuth = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Navbar
      shouldHideOnScroll
      className='flex h-[90px] justify-center border-b dark:border-[#343f4c]'
    >
      <NavbarBrand className='!grow-0'>
        <Link href='/'>
          <NextImage
            width={118}
            height={28}
            src={
              theme === 'dark'
                ? 'https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/logo-light.svg'
                : 'https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/logo.svg'
            }
            alt='logo'
          />
        </Link>
      </NavbarBrand>
      <NavbarContent
        className='hidden grow gap-8 text-[14px] sm:flex'
        justify='center'
      >
        {menu.map((item) => (
          <NavbarItem key={item.name}>
            <Link color='foreground' href={item.href} className='text-[14px]'>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className='flex !justify-end'>
        <div className='mr-12 flex items-center gap-4'>
          {social.map((item) => (
            <Link key={item.href} href={item.href}>
              <span className='hover:text-secondary'>{item.icon}</span>
            </Link>
          ))}
        </div>
        {status === 'authenticated' ? (
          <Avatar name='' src='/' size='sm' />
        ) : (
          <Button
            onPress={onOpen}
            isIconOnly
            className='border-b border-black bg-transparent dark:border-white'
            radius='none'
          >
            Login
          </Button>
        )}

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          {isLogin ? (
            <Login handleToggle={handleToggleAuth} />
          ) : (
            <Register handleToggle={handleToggleAuth} />
          )}
        </Modal>

        <Search />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
