import express from "express";
import productRouter from "./routes/product";
import authRouter from "./routes/auth";
import categoryRouter from "./routes/category";
import mongoose from "mongoose";
import cors from "cors";
const app = express();

// middleware
app.use(express.json());
app.use(cors());
// router
app.use("/api", productRouter);
app.use("/api", authRouter);
app.use("/api", categoryRouter);
// server
mongoose.connect(
  "mongodb+srv://dohuudien:dien29082003@cluster0.ur8okhl.mongodb.net/",
  {
    dbName: "test",
    autoCreate: true,
  }
);

app.listen(8080, () => {
  console.log(`Server is running on port ${PORT}`);
});

// export const viteNodeApp = app;

// npm i vite vite-plugin-node -D
// tạo file vite.config.js
