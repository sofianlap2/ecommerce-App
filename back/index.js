const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

//dotenv config
const dotenv = require("dotenv");
dotenv.config();
// end dot env

//mongoose connect database
mongoose.connect(
    process.env.MONGO_URL
).then(() => console.log("DB connection successful"))
.catch((err) => console.log(err))

//grant json post format
app.use(express.json())

//endpoint
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

//port listen
app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
});
