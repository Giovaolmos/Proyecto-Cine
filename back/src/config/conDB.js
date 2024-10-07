 require("dotenv").config();
const mongoose = require("mongoose");
const URI = process.env.MONGO_URI;

const conDB = async () => {
mongoose.connect(URI);

};

module.exports = conDB;