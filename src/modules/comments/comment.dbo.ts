// src/modules/comments/comment.dbo.ts
import mongoose from 'mongoose';

export type Comment = {
  text: string;
  rating: number; // Rating from 1-5
  rentalOfferId: string;
  userId: string;
  createdAt?: Date;
}

const commentSchema = new mongoose.Schema({
  text: {type: String, required: true, minlength: 5, maxlength: 1024},
  rating: {type: Number, required: true, min: 1, max: 5},
  rentalOfferId: {type: mongoose.Schema.Types.ObjectId, ref: 'RentalOfferDbo', required: true},
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserDbo', required: true},
  createdAt: {type: Date, default: Date.now}
});

export const CommentDbo = mongoose.model<Comment>('CommentDbo', commentSchema);
