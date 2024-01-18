import React from "react";
import "./ModalRegister.css";
import { DragonsAPI } from "../../types/DragonsAPI";
import Button from "../Button/Button";
import { convertDateToISOString, formatDateString, getNewDateAPIFormat } from "../../utils/date";

interface ModalEditionProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (createdDragon: DragonsAPI) => void;
}

const ModalRegister: React.FC<ModalEditionProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [createdDragon, setCreatedDragon] = React.useState<DragonsAPI>({
    createdAt: convertDateToISOString(
        getNewDateAPIFormat()
    ),
    histories: [],
    name: '',
    type: '',
    id: ''
});


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!createdDragon) return;

    setCreatedDragon({
      ...createdDragon,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    if (createdDragon) {
      onSave(createdDragon);
      onClose();
    }
  };

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {createdDragon && (
              <div className="form">
                <h2>Edit</h2>
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={createdDragon.name}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Type:
                  <input
                    type="text"
                    name="type"
                    value={createdDragon.type}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Created At:
                  {formatDateString(createdDragon.createdAt)}
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

export default ModalRegister;
