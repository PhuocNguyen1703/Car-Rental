"use client";

import React, { useEffect, useState } from "react";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 overflow-hidden z-50 bg-black-950/45">
      {children}
    </div>
  );
};

export default Modal;
