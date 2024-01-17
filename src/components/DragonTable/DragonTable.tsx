import React, { useCallback, useEffect, useState } from 'react';
import './DragonTable.css';
import { DragonsAPI } from '../../types/DragonsAPI';
import ModalDetails from '../ModalDetails/ModalDetails';

interface DragonTableProps {
  dragons: DragonsAPI[];
}

const DragonTable: React.FC<DragonTableProps> = ({ dragons }) => {
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
          {sortedDragons.map((dragon) => (
            <tr key={dragon.id}>
              <td>{dragon.name}</td>
              <td>{dragon.type}</td>
              <td>{Array.isArray(dragon.createdAt) ? dragon.createdAt[0] : dragon.createdAt}</td>
              <td>
                <button
                  onClick={() => setSelectedDragonDetails(dragon)}
                >
                  Details
                </button>

                <button
                  onClick={() => setSelectedDragonEdition(dragon)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ModalDetails
        dragon={selectedDragonDetails}
        isOpen={!!selectedDragonDetails}
        onClose={() => setSelectedDragonDetails(null)}
      />

    </>
  );
};

export default DragonTable;
