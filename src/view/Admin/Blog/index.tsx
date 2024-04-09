'use client';

import { Button, Select, SelectItem } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

import FrameSection from '@/components/common/FrameSection';
import UploadImage from '@/components/common/UploadImage';

import { BlogApi } from '@/api/blog-api';
import { ResCategories } from '@/shared/category.type';

const Editor = dynamic(() => import('./Editor'), {
  ssr: false,
});
const AdminBlog = () => {
  const [images, setImage] = useState<File[]>([]);
  const [categories, setCategories] = useState<ResCategories[]>([]);
  const [idCategory, setIdCategory] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  // eslint-disable-next-line unused-imports/no-unused-vars
  const setHtml = (value: string) => {
    setDescription(value);
  };

  const handleCreateBlog = async () => {
    const blog = {
      category_id: idCategory,
      title: title,
      thumbnail_url: '',
      description: description,
    };

    try {
      const thumbnail = await BlogApi.uploadFiles({ files: images });
      blog.thumbnail_url = thumbnail.data.urls[0];
      const _res = await BlogApi.createPost(blog);
      setIdCategory('');
      setTitle('');
      setDescription('');
      setImage([]);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  useEffect(() => {
    const handleGetCategories = async () => {
      const category = await BlogApi.getAllCategory();
      setCategories(category.data);
    };

    handleGetCategories();
  }, []);

  return (
    <div className='mt-8 flex flex-col gap-8'>
      <FrameSection className='flex flex-col gap-6'>
        <div>
          <span>Chủ đề</span>
          <Select
            items={categories}
            aria-labelledby='category'
            variant='bordered'
            placeholder='Select a category'
            labelPlacement='outside'
            classNames={{
              base: 'max-w-xs',
              trigger: 'min-h-unit-12 py-2',
            }}
            onChange={(e) => setIdCategory(e.target.value)}
          >
            {(category) => (
              <SelectItem
                id='category'
                key={category.id}
                textValue={category.name}
              >
                <div className='flex items-center gap-2'>{category.name}</div>
              </SelectItem>
            )}
          </Select>
        </div>
        <div>
          <span>Tiêu đề</span>
          <input
            placeholder='Hãy nhập tiêu đề'
            onChange={(e) => setTitle(e.target.value)}
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
      <Button onClick={handleCreateBlog}>Tạo</Button>
    </div>
  );
};

export default AdminBlog;
