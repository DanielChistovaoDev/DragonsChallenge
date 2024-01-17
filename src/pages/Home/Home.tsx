// src/pages/Home.tsx
import React, { useEffect } from 'react';
import './Home.css';
import DragonTable from '../../components/DragonTable/DragonTable';
import useDragons from '../../hooks/useDragons';

const Home: React.FC = () => {
  const { dragons, loading, error, getDragons } = useDragons();

  useEffect(() => {
    getDragons();
  }, []);

  return (
    <div className="home-container">
      <h2>Página Inicial</h2>
      <p>Bem-vindo à sua página inicial!</p>
      {loading ? (
        <p>Carregando dragões...</p>
      ) : error ? (
        <p>Erro ao carregar dragões: {error.message}</p>
      ) : (
        <DragonTable dragons={dragons} />
      )}
    </div>
  );
};

export default Home;
