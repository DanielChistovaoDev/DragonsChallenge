// src/components/Modal/ModalEdition.tsx
import React from 'react';
import { DragonsAPI } from '../../types/DragonsAPI';

interface ModalEditionProps {
  isOpen: boolean;
  onClose: () => void;
  dragon: DragonsAPI | null;
  onSave: (editedDragon: DragonsAPI) => void;
}

const ModalEdition: React.FC<ModalEditionProps> = ({ isOpen, onClose, dragon, onSave }) => {
  const [editedDragon, setEditedDragon] = React.useState<DragonsAPI | null>(null);

  React.useEffect(() => {
    setEditedDragon(dragon); // Inicializa o estado editedDragon quando a prop dragon é alterada
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
            <button onClick={onClose}>Close</button>
            {editedDragon && (
              <div>
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
                  <input
                    type="text"
                    name="createdAt"
                    value={editedDragon.createdAt}
                    onChange={handleInputChange}
                  />
                </label>
                <button onClick={handleSave}>Save</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalEdition;
