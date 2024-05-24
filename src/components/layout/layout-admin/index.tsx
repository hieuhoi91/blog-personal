'use client';

import { Listbox, ListboxItem, ListboxSection } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import {
  MdEditNote,
  MdKeyboardArrowRight,
  MdNoteAdd,
  MdViewList,
} from 'react-icons/md';

import FrameSection from '@/components/common/FrameSection';
import withAuth from '@/components/withAuth';
const iconClasses =
  'text-xl text-default-500 pointer-events-none flex-shrink-0';

const LayoutAdmin = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid w-full grid-cols-12 gap-8 px-8 pb-8'>
      <FrameSection className='col-span-2 h-[440px]'>
        <Listbox variant='flat' aria-label='Listbox menu with sections'>
          <ListboxItem
            showDivider
            key='dashboard'
            endContent={<MdKeyboardArrowRight />}
            startContent={<MdViewList className={iconClasses} />}
          >
            <Link href='/admin' className='w-full'>
              Dashboard
            </Link>
          </ListboxItem>
          <ListboxSection title='User' showDivider>
            <ListboxItem
              key='list-user'
              endContent={<MdKeyboardArrowRight />}
              startContent={<MdViewList className={iconClasses} />}
            >
              <Link href='/admin/user/list' className='w-full'>
                List User
              </Link>
            </ListboxItem>
          </ListboxSection>
          <ListboxSection title='Blog' showDivider>
            <ListboxItem
              key='issues'
              endContent={<MdKeyboardArrowRight />}
              startContent={<MdViewList className={iconClasses} />}
            >
              <Link href='/admin/blog/list' className='w-full'>
                List Blog
              </Link>
            </ListboxItem>
            <ListboxItem
              key='issues'
              endContent={<MdKeyboardArrowRight />}
              startContent={<MdNoteAdd className={iconClasses} />}
            >
              <Link href='/admin/blog/create' className='w-full'>
                Create Blog
              </Link>
            </ListboxItem>
            <ListboxItem
              key='pull_requests'
              endContent={<MdKeyboardArrowRight />}
              startContent={<MdEditNote className={iconClasses} />}
            >
              <Link href='/admin/blog/create' className='w-full'>
                Edit Blog
              </Link>
            </ListboxItem>
          </ListboxSection>
          <ListboxSection title='Product'>
            <ListboxItem
              key='issues'
              endContent={<MdKeyboardArrowRight />}
              startContent={<MdViewList className={iconClasses} />}
            >
              List Product
            </ListboxItem>
            <ListboxItem
              key='issues'
              endContent={<MdKeyboardArrowRight />}
              startContent={<MdNoteAdd className={iconClasses} />}
            >
              Create Product
            </ListboxItem>
            <ListboxItem
              key='pull_requests'
              endContent={<MdKeyboardArrowRight />}
              startContent={<MdEditNote className={iconClasses} />}
            >
              Edit Product
            </ListboxItem>
          </ListboxSection>
        </Listbox>
      </FrameSection>
      <div className='col-span-10'>{children}</div>
    </div>
  );
};

export default withAuth(LayoutAdmin);
