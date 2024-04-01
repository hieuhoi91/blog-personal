'use client';

import { Button, Select, SelectItem } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { useState } from 'react';

import FrameSection from '@/components/common/FrameSection';
import UploadImage from '@/components/common/UploadImage';

import { BlogApi } from '@/api/blog-api';
import { ResCategories } from '@/shared/type';

const Editor = dynamic(() => import('./Editor'), {
  ssr: false,
});
const AdminBlog = () => {
  const [images, setImage] = useState<File[]>([]);
  const [categories, setCategories] = useState<ResCategories[]>([]);

  // eslint-disable-next-line unused-imports/no-unused-vars
  let html = '';
  const setHtml = (value: string) => {
    html = value;
  };

  const handleSelectCategory = async () => {
    const category = await BlogApi.getAllCategory();
    setCategories(category.data);
  };

  return (
    <div className='mt-8 flex flex-col gap-8'>
      <FrameSection>
        <div>
          <span>Chủ đề</span>
          <Select
            onClick={handleSelectCategory}
            items={categories}
            label='Assigned to'
            variant='bordered'
            placeholder='Select a user'
            labelPlacement='outside'
            classNames={{
              base: 'max-w-xs',
              trigger: 'min-h-unit-12 py-2',
            }}
            renderValue={(items) => {
              return (
                <div className='flex flex-wrap gap-2'>
                  {items.map((item) => (
                    <div key={item.key}>{item.data?.name}</div>
                  ))}
                </div>
              );
            }}
          >
            {(category) => (
              <SelectItem key={category.id} textValue={category.name}>
                <div className='flex items-center gap-2'>{category.name}</div>
              </SelectItem>
            )}
          </Select>
        </div>
        <div>
          <span>Tiêu đề</span>
          <input
            placeholder='Hãy nhập tiêu đề'
            type='text'
            className='w-full border-none placeholder:text-[#cfcfcf] focus:ring-0'
          />
        </div>
        <div>
          <span>Thumbnail</span>
          <UploadImage multiple={false} images={images} setImage={setImage} />
        </div>
      </FrameSection>
      <FrameSection>
        <span className=''>Nội dung</span>
        <Editor setHtml={setHtml} />
      </FrameSection>
      <Button>add</Button>
    </div>
  );
};

export default AdminBlog;
