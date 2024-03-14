'use client';

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <Button
        onPress={onOpen}
        isIconOnly
        className='bg-transparent text-black'
        radius='full'
        aria-label='Like'
      >
        <MdSearch size={20} className='dark:text-white' />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='!px-8 !py-4'>Search in here!</ModalHeader>
              <ModalBody>
                <Input
                  isClearable
                  radius='lg'
                  placeholder='Type to search...'
                  classNames={{
                    input: [
                      'bg-transparent',
                      'text-black/90 dark:text-white/90',
                      'placeholder:text-default-700/50 dark:placeholder:text-white/60',
                      'border-0 focus:border-0 focus:ring-0',
                    ],
                    innerWrapper: 'bg-transparent',
                    inputWrapper: [
                      'shadow-xl',
                      'bg-default-200/50',
                      'dark:bg-default/60',
                      'backdrop-blur-xl',
                      'backdrop-saturate-200',
                      'hover:bg-default-200/70',
                      'dark:hover:bg-default/70',
                      'group-data-[focused=true]:bg-default-200/50',
                      'dark:group-data-[focused=true]:bg-default/60',
                      '!cursor-text',
                    ],
                  }}
                  startContent={
                    <MdSearch className='pointer-events-none flex-shrink-0 text-black/50 text-slate-400 dark:text-white/90' />
                  }
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  className='bg-main text-white hover:border-transparent'
                  variant='light'
                  onPress={onClose}
                >
                  Oke
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Search;
