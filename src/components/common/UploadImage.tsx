import { ChangeEvent, FC, useState } from 'react';
import { MdOutlineHighlightOff, MdOutlineWallpaper } from 'react-icons/md';

import NextImage from '@/components/NextImage';

interface UploadImageProps {
  images: File[];
  setImage: (images: File[]) => void;
  multiple: boolean;
}

interface ImageItemProps {
  images: File[];
  file: File;
  setImage: (images: File[]) => void;
  idx: number;
}

const ImageItem: FC<ImageItemProps> = (props) => {
  const [ishover, setIshover] = useState<boolean>(true);
  const [uploadImage, setUploadImage] = useState<File>();

  const handleDeleteImage = () => {
    const newImages = props.images.filter((_, index) => index !== props.idx);
    props.setImage(newImages);
  };
  return (
    <div
      className='relative'
      onMouseEnter={() => setIshover(true)}
      onMouseLeave={() => setIshover(false)}
    >
      <NextImage
        width={300}
        height={300}
        src={URL.createObjectURL(uploadImage || props.file)}
        alt=''
        className='h-full w-full'
      />
      <span
        className='absolute right-0 top-0 z-20 cursor-pointer text-2xl'
        onClick={handleDeleteImage}
      >
        <MdOutlineHighlightOff />
      </span>
      {ishover && (
        <div className='absolute left-1/2 top-1/2 z-10 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-black opacity-20'>
          <input
            type='file'
            className='absolute left-1/2 top-1/2 z-20 h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-pointer opacity-0'
            onChange={(e) => {
              if (e.target.files) {
                setUploadImage(e.target.files[0]);
              }
            }}
          />
          <MdOutlineWallpaper className=' absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-white' />
        </div>
      )}
    </div>
  );
};

const UploadImage: React.FC<UploadImageProps> = (props) => {
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const urls: File[] = [];

    if (files) {
      for (let i = 0; i < files.length; i++) {
        urls.push(files[i]);
      }
    }
    props.setImage(urls);
  };
  return (
    <div className='flex h-full flex-col items-center justify-center gap-2 rounded-xl bg-white p-10 shadow-lg'>
      {props.images.length < 1 && (
        <div className='flex flex-col items-center justify-center gap-2'>
          <input
            title='Upload Image(s)'
            type='file'
            onChange={handleFileUpload}
            multiple={props.multiple}
          />
          <MdOutlineWallpaper style={{ fontSize: '24px' }} />
          <h2 className='text-light-text-primary text-sm'>
            PNJ, JPG & GIF ACCEPTED
          </h2>
        </div>
      )}
      <div className='grid w-full grid-cols-4 gap-6'>
        {props.images?.map((file, idx) => (
          <ImageItem
            key={idx}
            file={file}
            idx={idx}
            setImage={props.setImage}
            images={props.images}
          />
        ))}
      </div>
    </div>
  );
};

export default UploadImage;
