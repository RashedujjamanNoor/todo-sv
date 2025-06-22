const express = require("express");
const cors = require("cors");
const dbConnection = require("./db/mongobd");
const app = express();
const userRouter = require("./routes/userRoute");

app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);
dbConnection();
app.listen(3000, () => console.log("server is running at port 3000"));
