import { useState, useEffect } from 'react';
import { DragonsAPI } from '../types/DragonsAPI';
import DragonsService from '../services/DragonsService';

interface DragonsHook {
  dragons: DragonsAPI[];
  loading: boolean;
  error: Error | null;
  getDragons: () => Promise<void>;
  getDragonById: (id: string) => Promise<void>;
  createDragon: (newDragon: DragonsAPI) => Promise<void>;
  editDragon: (id: string, updatedDragon: DragonsAPI) => Promise<void>;
  deleteDragon: (id: string) => Promise<void>;
}

const useDragons = (): DragonsHook => {
  const [dragons, setDragons] = useState<DragonsAPI[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const getDragons = async () => {
    try {
      setLoading(true);
      const dragonsData = await DragonsService.getAllDragons();
      setDragons(dragonsData);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  const getDragonById = async (id: string) => {
    try {
      setLoading(true);
      await DragonsService.getDragonById(id);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  const createDragon = async (newDragon: DragonsAPI) => {
    try {
      setLoading(true);
      await DragonsService.createDragon(newDragon);
      await getDragons();
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  const editDragon = async (id: string, updatedDragon: DragonsAPI) => {
    try {
      setLoading(true);
      await DragonsService.editDragon(id, updatedDragon);
      await getDragons();
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  const deleteDragon = async (id: string) => {
    try {
      setLoading(true);
      await DragonsService.deleteDragon(id);
      await getDragons();
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDragons();
  }, []);

  return {
    dragons,
    loading,
    error,
    getDragons,
    getDragonById,
    createDragon,
    editDragon,
    deleteDragon,
  };
};

export default useDragons;
