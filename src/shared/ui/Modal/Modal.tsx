import { MouseEvent, PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';

import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal = (props: PropsWithChildren<ModalProps>) => {
  const { className, children, isOpen, lazy, onClose } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
    }
  }, [onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler]
  );

  const handleTransition = () => {
    if (isClosing) {
      onClose();
      setIsClosing(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setIsOpening(true);
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      setIsOpening(false);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const onContentClick = (e: MouseEvent) => e.stopPropagation();

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpening,
    [cls.isClosing]: isClosing
  };

  if (lazy && !isOpen) {
    return null;
  }

  return (
    <Portal>
      <div className={cn(cls.modal, mods, [className])}>
        <div onClick={closeHandler} className={cls.overlay} onTransitionEnd={handleTransition}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
