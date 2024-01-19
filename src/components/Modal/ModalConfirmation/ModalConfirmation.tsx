import React from "react";
import "../Modal.css";
import { DragonsAPI } from "../../../types/DragonsAPI";
import Button from "../../Button/Button";

interface ModalConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  dragon: DragonsAPI | null;
  onSave: (editedDragon: DragonsAPI) => void;
}

const ModalConfirmation: React.FC<ModalConfirmationProps> = ({
  isOpen,
  onClose,
  dragon,
  onSave,
}) => {

  const handleDelete = () => {
    if (dragon) {
      onSave(dragon);
      onClose();
    }
  };

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {dragon && (
              <div className="form">
                <h2>Alert</h2>
                <label>
                  Are you sure you want to delete this record?
                </label>

                <label>
                  Dragon Name: {dragon.name}
                </label>

                <div className="actions">
                  <Button label="Yes" onClick={handleDelete} />

                  <Button label="Cancel" onClick={onClose} />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalConfirmation;
