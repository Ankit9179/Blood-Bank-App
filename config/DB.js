const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(
      `conneted to mongodb database ${mongoose.connection.host}`.bgGreen.blue
    );
  } catch (error) {
    console.log(`MongooDB  Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
