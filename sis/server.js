const express = require("express");
const cors = require("cors");
require("dotenv").config();
const userRoutes =require("./userRoute");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/users",userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Tumatakbo na ang serbisyo sa daungang ika-limang libo(${PORT})`));