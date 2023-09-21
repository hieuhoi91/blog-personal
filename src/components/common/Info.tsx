import { Avatar } from '@nextui-org/react';
import React from 'react';

const Info = () => {
  return (
    <div className='flex gap-4'>
      <Avatar
        src='https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/nick-arnot-321267-unsplash-48x48.jpg'
        size='md'
      />

      <div className='text-text-secondary flex items-center'>
        <span className='hover:text-hover-text cursor-pointer transition-all'>
          Katen Doe
        </span>
        <span className='text-hover-text px-4'>•</span>
        August 19, 2022
      </div>
    </div>
  );
};

export default Info;
