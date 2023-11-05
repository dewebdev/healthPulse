import React from "react";

const Modal = ({ isOpen, toggleModal, pdfSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white w-2/3 h-2/3 rounded-lg p-6 shadow-lg relative">
        <button
          className="absolute top-0 right-0  text-sm bg-red-600  rounded-lg lg:rounded-xm lg:p-1 p-[3px] cursor-pointer text-white "
          onClick={toggleModal}
        >
          Close
        </button>
        <iframe
          title="PDF Report"
          src={pdfSrc}
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Modal;
