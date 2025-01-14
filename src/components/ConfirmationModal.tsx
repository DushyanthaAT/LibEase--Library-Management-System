import React from "react";
import { TiWarning } from "react-icons/ti";

interface ModalProps {
  isOpen: boolean;
  confirmationType: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ModalProps> = ({
  isOpen,
  confirmationType,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  let message = "";
  switch (confirmationType) {
    case "delete":
      message = "Are you sure you want to delete this book?";
      break;
    case "edit":
      message = "Are you sure you want to edit this book?";
      break;
    case "signout":
      message = "Are you sure you want to sign out?";
      break;
    default:
      message = "Are you sure you want to proceed?";
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-xs w-full flex flex-col items-center gap-1">
        {/* Outer circle */}
        <div className="flex items-center justify-center bg-gray-100 p-1 rounded-full">
          {/* Inner circle */}
          <div className="bg-red-500 p-2 rounded-full text-xl">
            <TiWarning className="text-[40px] text-white" /> {/* Icon */}
          </div>
        </div>
        <h3 className="text-lg font-semibold text-center">{message}</h3>
        <p className="text-center text-sm text-gray-400">
          This action cannot be reversed. Please confirm to proceed.
        </p>
        <div className="flex justify-end space-x-4 mt-5">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            onClick={onConfirm}
          >
            Confirm
          </button>
          <button
            className=" px-4 py-2 rounded-md hover:bg-gray-200 border border-gray-300 "
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
