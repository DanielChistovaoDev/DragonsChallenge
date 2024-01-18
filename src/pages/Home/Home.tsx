// src/pages/Home.tsx
import React, { useEffect } from 'react';
import './Home.css';
import DragonTable from '../../components/DragonTable/DragonTable';
import useDragons from '../../hooks/useDragons';
import { DragonsAPI } from '../../types/DragonsAPI';
import Loader from '../../components/Loader/Loader';

const Home: React.FC = () => {
  const { dragons, loading, error, getDragons, editDragon } = useDragons();

  useEffect(() => {
    getDragons();
  }, []);

  const onSaveEdition = (editedDragon: DragonsAPI) => {
    const { id } = editedDragon;
    editDragon(id, editedDragon);
  };

  return (
    <div className='background-container'>
      <div className="home-container">
        {loading ? (
          <Loader />
        ) : error ? (
          <p>Erro ao carregar dragões: {error.message}</p>
        ) : (
          <DragonTable
            dragons={dragons}
            onSaveEdition={onSaveEdition}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
