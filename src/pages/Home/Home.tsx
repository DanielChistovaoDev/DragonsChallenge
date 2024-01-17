// src/pages/Home.tsx
import React, { useEffect } from 'react';
import './Home.css';
import DragonTable from '../../components/DragonTable/DragonTable';
import useDragons from '../../hooks/useDragons';
import { DragonsAPI } from '../../types/DragonsAPI';

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
    <div className="home-container">
      <h2>Página Inicial</h2>
      <p>Bem-vindo à sua página inicial!</p>
      {loading ? (
        <p>Carregando dragões...</p>
      ) : error ? (
        <p>Erro ao carregar dragões: {error.message}</p>
      ) : (
        <DragonTable
          dragons={dragons}
          onSaveEdition={onSaveEdition}
        />
      )}
    </div>
  );
};

export default Home;
