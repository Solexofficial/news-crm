import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

type LoginModalProps = {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
};

export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => {
  return (
    <Modal
      className={classNames(cls.loginModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <LoginForm />
    </Modal>
  );
};
