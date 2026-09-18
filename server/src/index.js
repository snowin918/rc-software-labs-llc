import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const bootstrap = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`[RC SOFTWARE LABS] API running on port ${PORT}`);
    });
  } catch (error) {
    console.error("[RC SOFTWARE LABS] Failed to start API", error.message);
    process.exit(1);
  }
};

bootstrap();
