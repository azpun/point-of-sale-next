import { X } from "lucide-react";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, setIsOpen, children }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay latar belakang hitam */}
      <div
        className="fixed inset-0 bg-black/50"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal konten */}
      <div className="relative w-full max-w-md p-4 bg-white rounded-lg shadow-xl">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-gray-500 text-2xl font-bold"
        >
          <X />
        </button>
        <div className="space-y-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
