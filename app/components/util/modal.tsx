import { ReactNode } from 'react';

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
}

export function Modal({ children, onClose }: ModalProps) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <dialog
        className="modal"
        open
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </dialog>
    </div>
  );
}