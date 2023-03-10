import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  element?: HTMLElement;
}

export const Portal = (props: PropsWithChildren<PortalProps>) => {
  const { children, element = document.body } = props;
  return createPortal(children, element);
};
