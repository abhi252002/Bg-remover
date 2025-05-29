import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/mongodb.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
await connectDB();

// Sirf webhook route ke liye raw body middleware lagao:
app.use(
  "/api/user/webhooks",
  express.raw({ type: "application/json" })
);

// Baaki routes ke liye normal json middleware
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => res.send("Api Working"));
app.use("/api/user", userRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Server Running on port " + PORT));
