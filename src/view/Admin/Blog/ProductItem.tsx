import { Card, CardBody } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { TiDeleteOutline } from 'react-icons/ti';

import Info from '@/components/common/Info';

import { Post } from '@/shared/posts.type';

interface PropsPostItem {
  post: Post;
  handleDeleteProduct: (id: string) => void;
}

const ProductItem = (props: PropsPostItem) => {
  const [isDelete, setIsDelete] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsDelete(true)}
      onMouseLeave={() => setIsDelete(false)}
      isBlurred
      className='bg-background/60 dark:bg-default-100/50 w-full border-none'
      shadow='sm'
    >
      <CardBody>
        <div className='relative flex gap-8'>
          <div className='relative h-40 w-40'>
            <Image
              alt='Album cover'
              className='h-full w-full rounded-lg object-cover'
              height={200}
              src={props.post.thumbnail}
              width={200}
            />
          </div>

          <div className='col-span-6 flex flex-1 flex-col'>
            <div className='flex flex-col '>
              <Info
                name={props.post.user.username}
                date={props.post.createdAt}
                avatar
                avatarUrl={props.post.user.avatar}
              />
              <Link href={`/blogs/${props.post.slug}`}>
                <h1 className='text-large hover:text-hover-text mt-2 font-medium transition-all'>
                  {props.post.title}
                </h1>
              </Link>
            </div>
          </div>
          {isDelete ? (
            <div className='absolute right-0 top-0'>
              <TiDeleteOutline
                size={24}
                className='hover:text-hover-text cursor-pointer transition-all'
                onClick={() => props.handleDeleteProduct(props.post.id)}
              />
            </div>
          ) : (
            ''
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductItem;
