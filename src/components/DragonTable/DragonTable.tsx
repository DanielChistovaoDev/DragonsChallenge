import React, { useCallback, useEffect, useState } from 'react';
import './DragonTable.css';
import { DragonsAPI } from '../../types/DragonsAPI';
import ModalDetails from '../ModalDetails/ModalDetails';
import ModalEdition from '../ModalEdition/ModalEdition';

interface DragonTableProps {
  dragons: DragonsAPI[];
  onSaveEdition: (editedDragon: DragonsAPI) => void;
}

const DragonTable: React.FC<DragonTableProps> = ({ dragons, onSaveEdition }) => {
  const [sortedDragons, setSortedDragons] = useState([...dragons]);

  const [
    selectedDragonDetails,
    setSelectedDragonDetails
  ]  = useState<DragonsAPI | null>(null);

  const [
    selectedDragonEdition,
    setSelectedDragonEdition
  ]  = useState<DragonsAPI | null>(null);

  const sortByName = useCallback(() => {
    const sorted = [...dragons].sort((a, b) => {
      const valueA = Array.isArray(a['name']) ? a['name'][0] : a['name'];
      const valueB = Array.isArray(b['name']) ? b['name'][0] : b['name'];

      return valueA.toString().localeCompare(valueB.toString());
    });

    setSortedDragons(sorted);
  }, [dragons]);

  useEffect(() => {
    sortByName();
  }, [sortByName]);

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
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className='dragon-table--buttons'
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <>
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
              <td>{Array.isArray(dragon.createdAt) ? dragon.createdAt[0] : dragon.createdAt}</td>

              <td>
                <button
                  onClick={() => setSelectedDragonDetails(dragon)}
                  className='dragon-table--buttons'
                >
                  Details
                </button>

                <button
                  onClick={() => setSelectedDragonEdition(dragon)}
                  className='dragon-table--buttons'
                >
                  Edit
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>

      {/* controles de paginação com botões de número de página */}
      <div>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className='dragon-table--buttons'
        >
        Anterior
        </button>

        {renderPageNumbers()}

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className='dragon-table--buttons'
        >
          Próxima
        </button>
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
    </>
  );
};

export default DragonTable;
