'use client';

import {
  Button,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  useDisclosure,
} from '@nextui-org/react';
import { useTheme } from 'next-themes';
import React from 'react';
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoPinterest,
  BiLogoTiktok,
  BiLogoTwitter,
  BiLogoYoutube,
} from 'react-icons/bi';
import { MdDarkMode, MdLightMode, MdSearch } from 'react-icons/md';

import NextImage from '@/components/NextImage';

interface Social {
  icon: React.ReactNode;
  href: string;
}

export const social: Social[] = [
  {
    icon: <BiLogoFacebook />,
    href: '/fb',
  },
  {
    icon: <BiLogoTwitter />,
    href: '/tw',
  },
  {
    icon: <BiLogoInstagram />,
    href: '/ig',
  },
  {
    icon: <BiLogoPinterest />,
    href: '/pt',
  },
  {
    icon: <BiLogoTiktok />,
    href: '/tt',
  },
  {
    icon: <BiLogoYoutube />,
    href: '/ytb',
  },
];

export const menu = [
  { name: 'Home', href: '/' },
  { name: 'Lifestyle', href: '/lifestyle' },
  { name: 'Culture', href: '/culture' },
  { name: 'Features', href: '/features' },
  { name: 'Shop', href: '/shop' },
];

const Header = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { theme, setTheme } = useTheme();

  return (
    <Navbar
      shouldHideOnScroll
      className='flex h-[90px] justify-center border-b dark:border-[#343f4c]'
    >
      <NavbarBrand className='!grow-0'>
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
        <div className='shadow-a flex gap-4 rounded-full border p-2 dark:border-[#343f4c]'>
          <button onClick={() => setTheme('light')}>
            <MdLightMode />
          </button>
          <button onClick={() => setTheme('dark')}>
            <MdDarkMode />
          </button>
        </div>
        <Button
          onPress={onOpen}
          isIconOnly
          className='bg-main text-white'
          radius='full'
          aria-label='Like'
        >
          <MdSearch size={20} />
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className='!px-8 !py-4'>
                  Search in here!
                </ModalHeader>
                <ModalBody>
                  <Input
                    isClearable
                    radius='lg'
                    placeholder='Type to search...'
                    classNames={{
                      input: [
                        'bg-transparent',
                        'text-black/90 dark:text-white/90',
                        'placeholder:text-default-700/50 dark:placeholder:text-white/60',
                        'border-0 focus:border-0 focus:ring-0',
                      ],
                      innerWrapper: 'bg-transparent',
                      inputWrapper: [
                        'shadow-xl',
                        'bg-default-200/50',
                        'dark:bg-default/60',
                        'backdrop-blur-xl',
                        'backdrop-saturate-200',
                        'hover:bg-default-200/70',
                        'dark:hover:bg-default/70',
                        'group-data-[focused=true]:bg-default-200/50',
                        'dark:group-data-[focused=true]:bg-default/60',
                        '!cursor-text',
                      ],
                    }}
                    startContent={
                      <MdSearch className='pointer-events-none flex-shrink-0 text-black/50 text-slate-400 dark:text-white/90' />
                    }
                  />
                </ModalBody>
                <ModalFooter>
                  <Button
                    className='bg-main text-white hover:border-transparent'
                    variant='light'
                    onPress={onClose}
                  >
                    Oke
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
