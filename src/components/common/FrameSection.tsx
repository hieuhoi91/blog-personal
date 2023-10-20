import { FC } from 'react';

interface FrameSectionProps {
  className?: string;
  children: React.ReactNode;
}

const FrameSection: FC<FrameSectionProps> = (props) => {
  return (
    <div
      className={`${props.className} rounded-lg border p-[30px] dark:border-[#343f4c]`}
    >
      {props.children}
    </div>
  );
};

export default FrameSection;
