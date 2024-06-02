import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      typee: String,
      required: true,
    },
    email: {
      typee: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      typee: String,
      required: true,
    },
    avatarUrl: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('User', UserSchema)
