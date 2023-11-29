const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const connectDB = require("./database/connectDB");
require("dotenv").config();

const corsOptions = {
    origin: true, 
    credentials: true
}

const app = express();
const port = 5000;
connectDB();

app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/user", require("./routes/userRoutes"))

app.listen(port, () => {
    console.log(`The server is running on PORT ${port}`);
})