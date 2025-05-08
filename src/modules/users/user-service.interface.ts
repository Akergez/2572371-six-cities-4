import {User} from './user-dbo.js';
import {DatabaseOperationsInterface} from '../../db/database-operations.interface.js';
import mongoose from 'mongoose';

export interface UserService extends DatabaseOperationsInterface<User> {
  findById(id: mongoose.Types.ObjectId): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  addToFavorites(userId: mongoose.Types.ObjectId, offerId: string): Promise<void>;
  removeFromFavorites(userId: mongoose.Types.ObjectId, offerId: string): Promise<void>;
  updateAvatar(userId: mongoose.Types.ObjectId, link: string): Promise<void>;
}
