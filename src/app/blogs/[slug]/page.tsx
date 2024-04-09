'use client';

import { BlockNoteView, useCreateBlockNote } from '@blocknote/react';
import { Avatar, Button, Card, CardBody, Divider } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import FrameSection from '@/components/common/FrameSection';
import TitleSection from '@/components/common/TitleSection';
import { social } from '@/components/layout/Header';
import Widget from '@/components/layout/widget';
import { tag } from '@/components/layout/widget/TagClouds';

import { BlogApi } from '@/api/blog-api';
import { ResPostById } from '@/shared/posts.type';

const Blogs = () => {
  const [blogData, setBlogData] = useState<ResPostById>();
  const pathname = usePathname();
  const url = pathname.split('/');
  const slug = url[url.length - 1];

  const editor = useCreateBlockNote();

  useEffect(() => {
    const handlePost = async (slug: string) => {
      try {
        const res = await BlogApi.getPostById(slug);
        const blocks = await editor.tryParseHTMLToBlocks(res.data.description);
        editor.replaceBlocks(editor.document, blocks);
        setBlogData(res.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };

    handlePost(slug);
  }, [slug, editor]);

  return (
    <div className='grid grid-cols-3 gap-6'>
      <div className='col-span-2 flex flex-col gap-8'>
        <BlockNoteView editor={editor} editable={false} />
        <Divider />
        <div className='flex items-center justify-between'>
          <div className='flex flex-col gap-2'>
            <span>Share this:</span>
            <div className='flex items-center gap-2'>
              {social.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span className='hover:text-secondary'>{item.icon}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className='flex flex-wrap gap-2'>
            {tag.slice(0, 3).map((item) => (
              <Button
                radius='full'
                size='sm'
                className='text-text-secondary hover:border-hover-text hover:text-hover-text border bg-transparent transition-all dark:border-[#343f4c]'
                key={item}
              >
                #{item}
              </Button>
            ))}
          </div>
        </div>
        <Card
          className='dark:bg-default-100/50 w-full border-none bg-[#f1f8ff]'
          shadow='none'
        >
          <CardBody>
            <div className='flex w-full'>
              <div className='relative flex p-8'>
                <Avatar
                  as='button'
                  className='h-24 w-24 transition-transform'
                  src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                />
              </div>
              <div className='flex flex-col py-8'>
                <div className='flex items-start justify-between'>
                  <div className='flex flex-col gap-0'>
                    <h3 className='text-foreground/90 font-semibold'>
                      {blogData?.user.username}
                    </h3>
                    <p className='text-small text-foreground/80'>
                      Tôi là một người cầu tiến
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        <div className='flex flex-col gap-4'>
          <TitleSection title='Comments (0)' />
          <FrameSection className='flex flex-col justify-center gap-6'>
            <span className='text-sm opacity-70'>No comment</span>
          </FrameSection>
          <div>
            <span>Comment</span>
            <input
              placeholder='Viết comment'
              // onChange={(e) => setTitle(e.target.value)}
              type='text'
              className='w-full border-none placeholder:text-[#cfcfcf] focus:ring-0'
            />
          </div>
        </div>
      </div>
      <div className='col-span-1'>
        <Widget />
      </div>
    </div>
  );
};

export default Blogs;
