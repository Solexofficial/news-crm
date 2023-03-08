import { FC } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  children: React.ReactNode;
  element?: HTMLElement;
};

export const Portal: FC<PortalProps> = ({
  children,
  element = document.getElementById('root') as HTMLElement,
}) => {
  return createPortal(children, element);
};
