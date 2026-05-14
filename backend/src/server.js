import express from "express";
import path from "path";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";

const app = express();

const __dirname = path.resolve();

app.get("/hello", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hello World",
  });
});

//make ready app for deployment
if (ENV.NODE_ENV === "Production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}


//server setup
const startServer = async()=>{
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
});
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
}

startServer();
