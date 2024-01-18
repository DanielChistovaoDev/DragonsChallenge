import React, { useCallback, useEffect, useState } from "react";
import "./DragonTable.css";
import { DragonsAPI } from "../../types/DragonsAPI";
import ModalDetails from "../ModalDetails/ModalDetails";
import ModalEdition from "../ModalEdition/ModalEdition";
import { formatDateString } from "../../utils/date";
import Button from "../Button/Button";
import ModalRegister from "../ModalRegister/ModalRegister";

interface DragonTableProps {
  dragons: DragonsAPI[];
  onUpdate: () => void;
  onSaveEdition: (editedDragon: DragonsAPI) => void;
  onSaveRegister: (createdDragon: DragonsAPI) => void;
}

const DragonTable: React.FC<DragonTableProps> = ({
  dragons,
  onUpdate,
  onSaveEdition,
  onSaveRegister
}) => {
  const [selectedDragonDetails, setSelectedDragonDetails] =
    useState<DragonsAPI | null>(null);

  const [selectedDragonEdition, setSelectedDragonEdition] =
    useState<DragonsAPI | null>(null);

  const [isOpenRegisterModal, setIsOpenRegisterModal] = useState(false);

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDragons = dragons.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(dragons.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <Button
          key={i}
          label={String(i)}
          onClick={() => handlePageChange(i)}
        />,
      );
    }

    return pageNumbers;
  };

  return (
    <>
      <div className="table-top--actions">
        <Button
          label='Update'
          onClick={() => onUpdate()}
        />

        <Button
          label='New Dragon'
          onClick={() => setIsOpenRegisterModal(true)}
        />
      </div>

      <table className="dragon-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentDragons.map((dragon) => (
            <tr key={dragon.id}>
              <td>{dragon.name}</td>
              <td>{dragon.type}</td>
              <td>{formatDateString(dragon.createdAt)}</td>

              <td className="dragon-table--actions">
                <Button
                  label="Details"
                  onClick={() => setSelectedDragonDetails(dragon)}
                />

                <Button
                  label="Edit"
                  onClick={() => setSelectedDragonEdition(dragon)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* controles de paginação com botões de número de página */}
      <div>
        <Button
          label="Previous"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        />

        {renderPageNumbers()}

        <Button
          label="Next"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        />
      </div>

      <ModalDetails
        dragon={selectedDragonDetails}
        isOpen={!!selectedDragonDetails}
        onClose={() => setSelectedDragonDetails(null)}
      />

      <ModalEdition
        dragon={selectedDragonEdition}
        isOpen={!!selectedDragonEdition}
        onClose={() => setSelectedDragonEdition(null)}
        onSave={(e) => onSaveEdition(e)}
      />

      <ModalRegister
        isOpen={isOpenRegisterModal}
        onClose={() => setIsOpenRegisterModal(false)}
        onSave={(e) => onSaveRegister(e)}
      />
    </>
  );
};

export default DragonTable;
