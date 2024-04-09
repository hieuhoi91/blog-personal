import { FC } from 'react';

interface TitleProps {
  title: string;
  widget?: boolean;
}

const TitleSection: FC<TitleProps> = (props) => {
  return (
    <div
      className={`${
        props.widget ? 'items-center justify-end' : 'items-start justify-start'
      } text-text-primary flex flex-col gap-4 dark:text-white`}
    >
      <h3 className='text-xl font-bold'>{props.title}</h3>
      {/* <NextImage
        width={33}
        height={4}
        alt=''
        src='svg/nga.svg'
        className='mb-6'
      /> */}
    </div>
  );
};

export default TitleSection;
