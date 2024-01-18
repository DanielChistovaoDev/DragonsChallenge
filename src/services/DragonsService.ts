interface Dragon {
  id: string;
  name: string;
  type: string;
  createdAt: string;
  histories: string[];
}

const API_BASE_URL = "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon";

const DragonsService = {
  getAllDragons: async (): Promise<Dragon[]> => {
    try {
      const response = await fetch(API_BASE_URL);
      const data: Dragon[] = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching dragons:", error);
      throw error;
    }
  },

  getDragonById: async (id: string): Promise<Dragon> => {
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`);
      const data: Dragon = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching dragon with id ${id}:`, error);
      throw error;
    }
  },

  createDragon: async (newDragon: Dragon): Promise<Dragon> => {
    try {
      const response = await fetch(API_BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDragon),
      });
      const data: Dragon = await response.json();
      return data;
    } catch (error) {
      console.error("Error creating dragon:", error);
      throw error;
    }
  },

  editDragon: async (id: string, updatedDragon: Dragon): Promise<Dragon> => {
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedDragon),
      });
      const data: Dragon = await response.json();
      return data;
    } catch (error) {
      console.error(`Error editing dragon with id ${id}:`, error);
      throw error;
    }
  },

  deleteDragon: async (id: string): Promise<void> => {
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`Failed to delete dragon with id ${id}`);
      }
    } catch (error) {
      console.error(`Error deleting dragon with id ${id}:`, error);
      throw error;
    }
  },
};

export default DragonsService;
