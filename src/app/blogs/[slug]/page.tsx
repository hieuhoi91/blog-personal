'use client';

import { BlockNoteView, useCreateBlockNote } from '@blocknote/react';
import {
  Avatar,
  Button,
  Card,
  CardBody,
  Divider,
  useDisclosure,
  User,
} from '@nextui-org/react';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';

import { IComment, useSocket } from '@/hooks/useSocket';

import FrameSection from '@/components/common/FrameSection';
import TitleSection from '@/components/common/TitleSection';
import { social } from '@/components/layout/Header';
import Widget from '@/components/layout/widget';
import { tag } from '@/components/layout/widget/TagClouds';

import { BlogApi } from '@/api/blog-api';
import { ResComment } from '@/shared/comment.type';
import { ResPostBySlug } from '@/shared/posts.type';
import ModalAuth from '@/view/Auth/ModalAuth';

const Post = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [blogData, setBlogData] = useState<ResPostBySlug>();
  const [commentsData, setCommentsData] = useState<ResComment[]>([]);
  const [messages, setMessages] = useState<IComment[]>([]);
  const { sendMessage, onMessage } = useSocket(blogData?.id);
  const pathname = usePathname();
  const session = useSession();
  const url = pathname.split('/');
  const slug = url[url.length - 1];

  const inputRefComment = useRef<HTMLInputElement | null>(null);
  const editor = useCreateBlockNote();

  const formatDateString = (isoString: string): string => {
    const date = parseISO(isoString);

    const formattedDate = format(date, "MMMM d, yyyy 'at' h:mm a");
    return formattedDate;
  };

  useEffect(() => {
    onMessage((message: IComment) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, [onMessage]);

  const handleSend = () => {
    if (session.status === 'unauthenticated') onOpen();

    if (inputRefComment.current) {
      sendMessage(inputRefComment.current.value);
      inputRefComment.current.value = '';
      inputRefComment.current.focus();
    }
  };

  useEffect(() => {
    const handlePost = async (slug: string) => {
      try {
        const res = await BlogApi.getPostBySlug(slug);
        const blocks = await editor.tryParseHTMLToBlocks(res.data.description);
        editor.replaceBlocks(editor.document, blocks);
        setBlogData(res.data);
        const data_comment = await BlogApi.getCommentbyPostId(res.data.id);
        setCommentsData(data_comment.data);
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
                  src={blogData?.user.avatar}
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
          <TitleSection title='Comments' />
          <FrameSection className='flex flex-col justify-center'>
            {commentsData.length > 0 || messages.length > 0 ? (
              <div>
                <div>
                  {commentsData.map((comment) => (
                    <div
                      key={comment.id}
                      className='flex flex-col items-start gap-2'
                    >
                      <User
                        name={comment.user.username}
                        description={formatDateString(comment.createdAt)}
                        avatarProps={{
                          src: `${comment.user.avatar}`,
                        }}
                      />
                      <span>{comment.comment}</span>
                    </div>
                  ))}
                </div>
                <div>
                  {messages.map((comment) => (
                    <div
                      key={comment.user_id}
                      className='flex flex-col items-start gap-2'
                    >
                      <User
                        name={comment.username}
                        description={comment.createAt}
                        avatarProps={{
                          src: `${comment.avatar}`,
                        }}
                      />
                      <span>{comment.message}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>Ko có comment nào!</div>
            )}
          </FrameSection>
          <div>
            <span>Comment</span>
            <input
              ref={inputRefComment}
              type='text'
              className='w-full rounded-full border px-6 text-sm focus:ring-0 dark:text-black'
              placeholder='Comment here'
              onKeyDown={(e: KeyboardEvent) => {
                if (e.key === 'Enter') handleSend();
              }}
            />
            <Button type='submit' onClick={handleSend} className='mt-4'>
              Gui
            </Button>
            <ModalAuth
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              onClose={onClose}
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

export default Post;
