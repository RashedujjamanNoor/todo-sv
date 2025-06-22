const mongoose = require("mongoose");

const connectDB = async (req, res) => {
  await mongoose
    .connect(
      "mongodb+srv://admin:admin@cluster0.xbeo0bh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then((res) => console.log("db connected"));
};

module.exports = connectDB;
