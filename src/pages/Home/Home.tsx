// src/pages/Home.tsx
import React, { useEffect } from "react";
import "./Home.css";
import DragonTable from "../../components/DragonTable/DragonTable";
import useDragons from "../../hooks/useDragons";
import { DragonsAPI } from "../../types/DragonsAPI";
import Loader from "../../components/Loader/Loader";
import { sortAlphabetically } from "../../utils/sortAlphabetically";
import ErrorLabel from "../../components/ErrorLabel/ErrorLabel";

const Home: React.FC = () => {
  const { dragons, loading, error, getDragons, editDragon, createDragon } = useDragons();

  useEffect(() => {
    getDragons();
  }, []);

  const onSaveEdition = (editedDragon: DragonsAPI) => {
    const { id } = editedDragon;
    editDragon(id, editedDragon);
  };

  const onSaveRegister = (createdDragon: DragonsAPI) => {
    createDragon(createdDragon);
  };

  return (
    <div className="background-container">
      <div className="home-container">
        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorLabel errorMessage="Erro ao carregar dragões"/>
        ) : (
          <DragonTable
            dragons={sortAlphabetically(dragons, "name")}
            onUpdate={getDragons}
            onSaveEdition={onSaveEdition}
            onSaveRegister={onSaveRegister}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
