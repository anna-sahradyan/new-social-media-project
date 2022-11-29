const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const authRoute = require("./routes/auth");
const userRouter = require("./routes/user");

dotenv.config();

mongoose.connect(
    process.env.MONGO_KEY,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => {
        console.log("Connected to MongoDB");
    }
);

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/auth", authRoute);
app.use("/users", userRouter);


app.listen(4000, () => {
    console.log(`Server is running at http://localhost:${4000}`);
});