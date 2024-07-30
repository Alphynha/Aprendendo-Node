const dotenv = require("dotenv");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectToDataBase = async () => {
  await mongoose.connect(process.env.MONGODB_URI, (error) => {
    if (error) {
      return console.log("Ocorreu um erro: ", error);
    }

    return console.log("Conexão bem sucessida!");
  });
};

module.exports = connectToDataBase;
