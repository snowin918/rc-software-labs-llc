import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.warn("[RC SOFTWARE LABS] Missing MONGODB_URI. Contact submissions will be skipped.");
    return;
  }

  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000
    });
    console.log("[RC SOFTWARE LABS] MongoDB connected");
  } catch (error) {
    console.error("[RC SOFTWARE LABS] MongoDB connection error", error.message);
    throw error;
  }
};
