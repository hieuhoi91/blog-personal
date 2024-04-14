import { Modal } from '@nextui-org/react';
import React, { useState } from 'react';

import Login from '@/view/Auth/Login';
import Register from '@/view/Auth/Register';

export interface ModalAuthProps {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
}

const ModalAuth = (props: ModalAuthProps) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggleAuth = () => {
    setIsLogin(!isLogin);
  };
  return (
    <Modal isOpen={props.isOpen} onOpenChange={props.onOpenChange}>
      {isLogin ? (
        <Login onClose={props.onClose} handleToggle={handleToggleAuth} />
      ) : (
        <Register handleToggle={handleToggleAuth} />
      )}
    </Modal>
  );
};

export default ModalAuth;
