const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const authRoute = require("./routes/auth");


dotenv.config();

mongoose.connect(
    process.env.MONGO_KEY,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Connected to MongoDB");
    }
);

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/auth", authRoute);



app.listen(4000, () => {
    console.log("Backend server is running!");
});