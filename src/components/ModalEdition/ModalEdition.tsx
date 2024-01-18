import React from "react";
import "./ModalEdition.css";
import { DragonsAPI } from "../../types/DragonsAPI";
import Button from "../Button/Button";
import { formatDateString } from "../../utils/formatDateString";

interface ModalEditionProps {
  isOpen: boolean;
  onClose: () => void;
  dragon: DragonsAPI | null;
  onSave: (editedDragon: DragonsAPI) => void;
}

const ModalEdition: React.FC<ModalEditionProps> = ({
  isOpen,
  onClose,
  dragon,
  onSave,
}) => {
  const [editedDragon, setEditedDragon] = React.useState<DragonsAPI | null>(
    null,
  );

  React.useEffect(() => {
    setEditedDragon(dragon);
  }, [dragon]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editedDragon) return;

    setEditedDragon({
      ...editedDragon,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    if (editedDragon) {
      onSave(editedDragon);
      onClose();
    }
  };

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {editedDragon && (
              <div className="form">
                <h2>Edit</h2>
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={editedDragon.name}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Type:
                  <input
                    type="text"
                    name="type"
                    value={editedDragon.type}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Created At:
                  {formatDateString(editedDragon.createdAt)}
                </label>

                <div className="actions">
                  <Button label="Save" onClick={handleSave} />

                  <Button label="Close" onClick={onClose} />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalEdition;
