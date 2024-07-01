import express from "express";
import cors from "cors";
import { helloController } from "./controllers/index.js";

const PORT = 8000;

const app = express();
app.use(express.json());
app.use(cors());
app.set("trust proxy", true);

app.get("/", (req, res) => {
	res.send("HNG STAGE 1 BACKEND TASK");
});

app.get("/api/hello", helloController);

app.listen(PORT, () => console.log("SERVER RUNNING ON PORT ", PORT));
