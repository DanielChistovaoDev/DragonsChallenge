import React from "react";
import "./ModalDetails.css";
import { DragonsAPI } from "../../types/DragonsAPI";
import Button from "../Button/Button";
import { formatDateString } from "../../utils/formatDateString";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  dragon: DragonsAPI | null;
}

const ModalDetails: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  dragon,
}) => {
  if (!isOpen) return null;

  return (
    dragon && (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div>
            <h2>Detalhes</h2>
            <p>Nome: {dragon.name}</p>
            <p>Tipo: {dragon.type}</p>
            <p>Data de criação: {formatDateString(dragon.createdAt)}</p>
            <p>Histórias: {dragon.histories.length}</p>
          </div>

          <Button label="Close" onClick={onClose} />

          {children}
        </div>
      </div>
    )
  );
};

export default ModalDetails;
