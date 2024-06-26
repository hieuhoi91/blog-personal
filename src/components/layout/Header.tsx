'use client';

import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Listbox,
  ListboxItem,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Tooltip,
  useDisclosure,
} from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoPinterest,
  BiLogoTiktok,
  BiLogoTwitter,
  BiLogoYoutube,
} from 'react-icons/bi';
import { MdKeyboardArrowDown } from 'react-icons/md';

import Search from '@/components/common/Search';
import NextImage from '@/components/NextImage';

import { BlogApi } from '@/api/blog-api';
import { ROUTES } from '@/constant';
import { ResCategories } from '@/shared/category.type';
import ModalAuth from '@/view/Auth/ModalAuth';

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
  { name: 'Lifestyle', href: '/blogs/category/lifestyle' },
  { name: 'Culture', href: '/blogs/category/culture' },
];

const Header = () => {
  const [dataCate, setDataCate] = useState<ResCategories[]>([]);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { theme } = useTheme();
  const pathname = usePathname();
  const valuesToRemove = ['lifestyle', 'culture'];

  const { data: session, status }: any = useSession();

  const handleGetDateCategory = async () => {
    const data = await BlogApi.getAllCategory();
    const dataCate = data.data.filter(
      (category) => !valuesToRemove.includes(category.slug)
    );
    setDataCate(dataCate);
  };

  useEffect(() => {
    handleGetDateCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <NavbarItem isActive={item.href === pathname} key={item.name}>
            <Link color='foreground' href={item.href} className='text-[14px]'>
              {item.name}
            </Link>
          </NavbarItem>
        ))}

        <Tooltip
          content={
            <Listbox
              className='w-full'
              items={dataCate}
              aria-label='Dynamic Actions'
            >
              {(item) => (
                <ListboxItem key={item.id}>
                  <Link href={`/blogs/category/${item.slug}`}>{item.name}</Link>
                </ListboxItem>
              )}
            </Listbox>
          }
        >
          <NavbarItem className='flex cursor-pointer items-center text-[14px]'>
            <span>More</span> <MdKeyboardArrowDown size={20} />
          </NavbarItem>
        </Tooltip>

        <Link color='foreground' href='/shop' className='text-[14px]'>
          Shop
        </Link>
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
          <Dropdown placement='bottom-start'>
            <DropdownTrigger>
              <Avatar
                size='sm'
                as='button'
                className='transition-transform'
                src={session.avatar}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label='Profile Actions' variant='flat'>
              <DropdownItem
                className={`${session.role !== 'admin' && 'hidden'}`}
              >
                <Link href={ROUTES.ADMIN}>
                  <button className='w-full text-left'>Manager Admin</button>
                </Link>
              </DropdownItem>
              <DropdownItem key='settings'>My Settings</DropdownItem>
              <DropdownItem key='team_settings'>Team Settings</DropdownItem>
              <DropdownItem key='system'>System</DropdownItem>
              <DropdownItem key='configurations'>Configurations</DropdownItem>
              <DropdownItem key='help_and_feedback'>
                Help & Feedback
              </DropdownItem>
              <DropdownItem
                key='logout'
                color='danger'
                onClick={() => {
                  signOut({ redirect: false });
                }}
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
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

        <ModalAuth
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          onClose={onClose}
        />

        <Search />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
