import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import dbConnect from "../config/database.js";
import router from "../routes/FeedbackRoutes.js";

// Enable __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
dbConnect();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Mount API routes
app.use("/api/v1", router);

// Serve index.html on root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log("Server is running at port:", PORT);
});
