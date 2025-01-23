import mongoose, { Document, Schema } from "mongoose";

type Platform = {
  name: string;
  id: string;
};

export interface IUser extends Document {
  name: string;
  email: string;
  password: string | null;
  verified: boolean;
  platforms: Platform[];
  reminders: string[];
  joinDate: Date;
  plan: "none" | "Basic" | "Standard" | "Premium";
  onboardingComplete: "platforms" | "pricing" | "completed";
  lastVerificationEmailSent: Date;
  lastForgotPassMailSent: Date;
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    default: null,
  },
  verified: {
    type: Boolean,
    required: true,
    default: false,
  },
  platforms: {
    type: [
      {
        name: { type: String, required: true },
        id: { type: String, required: true },
      },
    ],
    required: false,
  },
  reminders: {
    type: [String],
    required: false,
  },
  joinDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  lastVerificationEmailSent: {
    type: Date,
    required: true,
    default: () => new Date(Date.now() - 60 * 60 * 1000),
  },
  lastForgotPassMailSent: {
    type: Date,
    required: true,
    default: () => new Date(Date.now() - 60 * 60 * 1000),
  },
  plan: {
    type: String,
    enum: ["none", "Basic", "Standard", "Premium"],
    required: true,
    default: "none",
  },
  onboardingComplete: {
    type: String,
    enum: ["platforms", "pricing", "completed"],
    required: true,
    default: "platforms",
  },
});

export default mongoose.models.User ||
  mongoose.model<IUser>("User", userSchema);
