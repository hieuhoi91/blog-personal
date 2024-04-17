import { Avatar } from '@nextui-org/react';
import React, { FC } from 'react';

interface InfoProps {
  avatar?: boolean;
  avatarUrl: string;
  name: string;
  slug?: string;
  date: string;
}

const Info: FC<InfoProps> = (props) => {
  const date = new Date(props.date || 123);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const monthIndex = date.getMonth();
  const monthName = months[monthIndex];
  const day = date.getDate();
  const year = date.getFullYear();

  const formattedDate = `${monthName} ${day}, ${year}`;

  return (
    <div className='flex gap-4'>
      {props.avatar && <Avatar src={props.avatarUrl} size='sm' />}

      <div
        className={`${
          props.avatar === false ? 'text-xs' : 'text-sm'
        } text-text-secondary flex items-center`}
      >
        <span className='hover:text-hover-text cursor-pointer transition-all'>
          {props.name}
        </span>
        {props.slug && <span className='text-hover-text px-4'>•</span>}
        {props.slug}
        <span className='text-hover-text px-4'>•</span>
        {formattedDate}
      </div>
    </div>
  );
};

export default Info;
