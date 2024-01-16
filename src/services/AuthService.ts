import { User } from "../types/User";

const usersData = require('../mocks/users.json');

export const login = async (username: string, password: string): Promise<User | null> => {
  const users: User[] = usersData.users;

  const user = users.find(
    u => u.username === username
    && u.password === password
  );

  return user || null;
};