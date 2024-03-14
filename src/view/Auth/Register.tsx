'use client';

import {
  Button,
  Input,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import React from 'react';

interface PropsRegister {
  handleToggle: () => void;
}

const Register = (props: PropsRegister) => {
  return (
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className='!px-8 !py-4'>Sign up in here!</ModalHeader>
          <ModalBody>
            <Input
              label='Username'
              type='text'
              classNames={{
                input: [
                  'p-0',
                  'bg-transparent',
                  'text-black/90 dark:text-white/90',
                  'border-0 focus:border-0 focus:ring-0',
                ],
              }}
            />
            <Input
              label='Email'
              type='email'
              classNames={{
                input: [
                  'p-0',
                  'bg-transparent',
                  'text-black/90 dark:text-white/90',
                  'border-0 focus:border-0 focus:ring-0',
                ],
              }}
            />
            <Input
              label='Password'
              type='password'
              radius='lg'
              classNames={{
                input: [
                  'p-0',
                  'bg-transparent',
                  'text-black/90 dark:text-white/90',
                  'border-0 focus:border-0 focus:ring-0',
                ],
              }}
            />
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
              className='bg-main text-white hover:border-transparent'
              variant='light'
              onPress={onClose}
            >
              Sign up
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  );
};

export default Register;
