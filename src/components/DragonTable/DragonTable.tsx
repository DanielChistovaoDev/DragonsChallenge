// src/components/DragonTable.tsx
import React, { useState } from 'react';
import './DragonTable.css';
import { DragonsAPI } from '../../types/DragonsAPI';

interface DragonTableProps {
  dragons: DragonsAPI[];
  onDetailsClick: (dragon: DragonsAPI) => void;
  onEditClick: (dragon: DragonsAPI) => void;
}

const DragonTable: React.FC<DragonTableProps> = ({ dragons, onDetailsClick, onEditClick }) => {
  const [sortedDragons, setSortedDragons] = useState([...dragons]);

  const sortByAttribute = (attribute: keyof DragonsAPI) => {
    const sorted = [...sortedDragons].sort((a, b) => {
      const valueA = Array.isArray(a[attribute]) ? a[attribute][0] : a[attribute];
      const valueB = Array.isArray(b[attribute]) ? b[attribute][0] : b[attribute];

      return valueA.toString().localeCompare(valueB.toString());
    });

    setSortedDragons(sorted);
  };

  return (
    <>
      <table className="dragon-table">
        <thead>
          <tr>
            <th onClick={() => sortByAttribute('name')}>Name</th>
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
                <button onClick={() => onDetailsClick(dragon)}>Details</button>
                <button onClick={() => onEditClick(dragon)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DragonTable;
