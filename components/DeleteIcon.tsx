import React, { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Modal from "react-modal";

const DeleteIcon: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleCancelClick = () => {
    setIsModalOpen(false);
  };

  const handleConfirmClick = () => {
    // Perform delete action here
    // Add your logic to delete the item from the data array or perform any other necessary actions
    setIsModalOpen(false);
  };

  return (
    <>
      <span className="cursor-pointer" onClick={handleDeleteClick}>
        <DeleteOutlineIcon />
      </span>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCancelClick}
        contentLabel="Delete Confirmation"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
          <div className="p-4">
            <p className="text-lg font-semibold mb-4">
              Are you sure you want to delete this item?
            </p>
            <div className="flex space-x-2">
              <button
                className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400"
                onClick={handleCancelClick}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                onClick={handleConfirmClick}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DeleteIcon;
