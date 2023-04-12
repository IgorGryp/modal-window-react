import React, { useState } from "react";

const Modal = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="open-modal-button" onClick={openModal}>
        ✨ Open Modal Window
      </button>
      {open && (
        <div className="overlay">
          <div className="modal">
            <div className="close-button" onClick={closeModal}>
              &times;
            </div>
            <img
              src="https://media.giphy.com/media/24652QfeZzNIPzoH36/giphy.gif"
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
