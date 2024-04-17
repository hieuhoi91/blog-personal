'use client';

import {
  Button,
  Input,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
} from '@nextui-org/react';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

import { BlogApi } from '@/api/blog-api';
import { ReqRegister } from '@/shared/type';

interface PropsRegister {
  handleToggle: () => void;
}

const avatars: string[] = [
  'https://axiesreact.themesflat.co/static/media/avt-1.71a23be871d509a23d2d.jpg',
  'https://axiesreact.themesflat.co/static/media/avt-2.e101dc63363945410d54.jpg',
  'https://axiesreact.themesflat.co/static/media/avt-4.cbb2f9fb25c1e375d958.jpg',
  'https://axiesreact.themesflat.co/static/media/avt-5.cb38feefc0ea48ef8f43.jpg',
  'https://axiesreact.themesflat.co/static/media/avt-6.0f735e283e35e7c8f00c.jpg',
  'https://axiesreact.themesflat.co/static/media/avt-9.87baf90907513c1c10e6.jpg',
  'https://axiesreact.themesflat.co/static/media/avt-7.98fafb24331353eb43c0.jpg',
];

const Register = (props: PropsRegister) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      const randomAvatar = (arr: string[]) => {
        const index = Math.floor(Math.random() * arr.length);
        return arr[index];
      };

      try {
        const reqRegister: ReqRegister = {
          username: values.username,
          email: values.email,
          password: values.password,
          role: 'user',
          avatar: randomAvatar(avatars),
        };
        setIsLoading(true);
        const _ = await BlogApi.register(reqRegister);

        props.handleToggle();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        setIsLoading(false);
        setError(e.response.data.message);
      }
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required('You must enter your username.'),
      email: Yup.string()
        .email('Email not valid.')
        .required('You must enter your email.'),
      password: Yup.string().required('You must enter your password.'),
    }),
  });
  return (
    <ModalContent>
      {() => (
        <form onSubmit={formik.handleSubmit}>
          <ModalHeader className='!px-8 !py-4'>Sign up in here!</ModalHeader>
          <ModalBody>
            <Input
              label='Username'
              id='username'
              name='username'
              type='text'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              classNames={{
                input: [
                  'p-0',
                  'bg-transparent',
                  'text-black/90 dark:text-white/90',
                  'border-0 focus:border-0 focus:ring-0',
                ],
              }}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className='text-sm text-red-600'>
                {formik.errors.username}
              </div>
            ) : null}

            <Input
              label='Email'
              id='email'
              name='email'
              type='email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              classNames={{
                input: [
                  'p-0',
                  'bg-transparent',
                  'text-black/90 dark:text-white/90',
                  'border-0 focus:border-0 focus:ring-0',
                ],
              }}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='text-sm text-red-600'>{formik.errors.email}</div>
            ) : null}
            <Input
              label='Password'
              id='password'
              name='password'
              type='password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              classNames={{
                input: [
                  'p-0',
                  'bg-transparent',
                  'text-black/90 dark:text-white/90',
                  'border-0 focus:border-0 focus:ring-0',
                ],
              }}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className='text-sm text-red-600'>
                {formik.errors.password}
              </div>
            ) : null}

            {error && (
              <span className='pt-2 text-sm text-red-600'>{error}</span>
            )}
          </ModalBody>
          <ModalFooter className='flex items-center justify-between'>
            <Button
              onClick={props.handleToggle}
              disableAnimation
              className='bg-transparent p-0'
              radius='none'
            >
              Sign in instead
            </Button>
            <Button
              type='submit'
              className='bg-main text-white hover:border-transparent'
              variant='light'
            >
              {!isLoading ? 'Sign in' : <Spinner size='sm' />}
            </Button>
          </ModalFooter>
        </form>
      )}
    </ModalContent>
  );
};

export default Register;
