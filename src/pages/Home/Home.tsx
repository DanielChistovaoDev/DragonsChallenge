// src/pages/Home.tsx
import React from 'react';
import './Home.css';
import DragonTable from '../../components/DragonTable/DragonTable';

const Home: React.FC = () => {

  const dragonsMock = [
    {
      "createdAt":"2024-01-16T18:43:11.561Z",
      "name":"Iabaasdadad",
      "type":"Ice",
      "histories":["adasdasda"],
      "id":"2"
    },
    {
      "createdAt":"2024-01-16T18:43:11.561Z",
      "name":"asdadad",
      "type":"Ice",
      "histories":["adasdasda"],
      "id":"2"
    },
    {
      "createdAt":"2024-01-16T18:43:16.694Z",
      "name":"wqeqeqe",
      "type":"Water",
      "histories":["asdasdada"],
      "id":"3"
    }
  ]
 
  return (
    <div className="home-container">
      <h2>Página Inicial</h2>
      <p>Bem-vindo à sua página inicial!</p>
      <DragonTable
        dragons={dragonsMock}
        onDetailsClick={ () => console.log('onDetailsClick') }
        onEditClick={ () => console.log('onEditClick') }
      />
    </div>
  );
};

export default Home;
