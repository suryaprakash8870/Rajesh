import express from "express";
import http from "http";
import mongoose from "mongoose";
import { createServer } from "http";
import { Server } from "socket.io";
import Dataroutes from "./routes/dashboard";

const app = express();
const server = createServer(app); // Use createServer from http module

mongoose.connect(
  "mongodb+srv://rajessh781:R%40jesh2512@personal-blog.dtfxubi.mongodb.net/CodeBlog",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true, // Add this for the new Server Discovery and Monitoring engine
  }
);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Routes
app.use(express.json()); // Use built-in express.json() middleware

app.use("/data", Dataroutes);

app.get("/", (req, res) => {
  res.send("Hello, this is the root route!");
});

// Handle MongoDB connection errors
mongoose.connection.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

server.listen(4475, () => console.log("Listening on port 4475"));
