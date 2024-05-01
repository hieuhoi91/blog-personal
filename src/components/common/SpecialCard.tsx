import { Chip } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

import Info from '@/components/common/Info';
import NextImage from '@/components/NextImage';

import { BlogApi } from '@/api/blog-api';
import { ResPostBySlug } from '@/shared/posts.type';
interface SpecialCardProps {
  type?: boolean;
}

const SpecialCard: FC<SpecialCardProps> = (props) => {
  const [post, setPost] = useState<ResPostBySlug>();

  const router = useRouter();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await BlogApi.getAllPosts({ sort: 'ASC', take: 1 });

        setPost(res.data.data[0]);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    getPosts();
  }, []);

  return (
    <div
      className='group relative z-10 col-span-2 h-full w-full cursor-pointer overflow-hidden rounded-lg shadow-xl'
      onClick={() => router.push(`/blogs/${post?.slug}`)}
    >
      {post ? (
        <NextImage
          width={1000}
          height={1000}
          src={post.thumbnail}
          alt={post.title}
          className='h-full w-full bg-cover object-cover object-center saturate-200 transition-all group-hover:scale-105'
        />
      ) : (
        ''
      )}
      <div
        className={`${
          props.type ? 'bottom-12 left-12' : 'bottom-6 left-6 '
        } absolute z-20 flex flex-col items-start gap-4`}
      >
        <Chip className='bg-main text-white'>Inspiration</Chip>
        <h2
          className={`${
            props.type ? 'text-[32px]' : 'text-2xl'
          } pr-6 text-white`}
        >
          {post?.title}
        </h2>
        <Info
          avatar={false}
          name={post?.user.username}
          date={post?.createdAt}
        />
      </div>
      <div className='absolute left-0 top-0 z-10 h-full w-full bg-[#203656] opacity-60'></div>
    </div>
  );
};

export default SpecialCard;
