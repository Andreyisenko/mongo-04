import { UsersCollection } from '../db/models/user.js';
export const registerUser = async (payload) => {
  return UsersCollection.create(payload);
};
