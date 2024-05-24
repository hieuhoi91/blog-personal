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
import { signIn } from 'next-auth/react';
import React, { useState } from 'react';
import * as Yup from 'yup';

import { ReqLogin } from '@/shared/type';

interface PropsLogin {
  handleToggle: () => void;
  onClose: () => void;
}

const Login = (props: PropsLogin) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      const reqLogin: ReqLogin = {
        email: values.email,
        password: values.password,
      };
      const res = await signIn('credentials', { ...reqLogin, redirect: false });

      if (res?.ok) {
        setIsLoading(false);
        props.onClose();
      }

      if (res?.error) {
        setIsLoading(true);
        setError('Tài khoản hoặc mật khẩu sai!');
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    },

    validationSchema: Yup.object().shape({
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
          <ModalHeader className='!px-8 !py-4'>Login in here!</ModalHeader>
          <ModalBody>
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

            {error && <span className='text-sm text-red-600'>{error}</span>}
          </ModalBody>
          <ModalFooter className='flex items-center justify-between'>
            <Button
              onClick={props.handleToggle}
              disableAnimation
              className='bg-transparent p-0'
              radius='none'
            >
              Create an account
            </Button>

            <Button
              className='bg-main text-white hover:border-transparent'
              variant='light'
              type='submit'
              //BUG close modal
              // onPress={onClose}
            >
              {!isLoading ? 'Login' : <Spinner size='sm' />}
            </Button>
          </ModalFooter>
        </form>
      )}
    </ModalContent>
  );
};

export default Login;
